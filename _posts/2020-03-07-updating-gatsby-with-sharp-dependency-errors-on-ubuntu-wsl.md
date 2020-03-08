---
title: "Updating Gatsby, Plugins and Solving Sharp Dependency Building Failure on Ubuntu using WSL"
date: 2020-03-07 21:03:08-0300
categories:
  - blog
tags:
  - cms
  - contentful
  - gatsby
  - graphql
  - node
  - npm
  - ubuntu
  - sharp
  - yarn
  - wsl
---

Recently I started getting my feet wet on headless CMS. I chose the following stack to work with: [Contentful](https://www.contentful.com/) + [Gatsby](https://www.gatsbyjs.com/) + [Material-UI](https://material-ui.com/). First I read the Contentful documentation to get a better understanding of how things work, why use a headless CMS and what are the differences between a full fledged CMS like Wordpress and Contentful. Upon reading I created my account, then created some content types and added some content. Next I moved to writing code, as always, the most exciting part. I cloned [this starter](https://www.gatsbyjs.org/starters/contentful-userland/gatsby-contentful-starter/) that I found on the Gatsby website and edited it adding code from [this other boilerplate](https://github.com/dominicabela/gatsby-starter-material-ui) to get Material-UI integrated on my setup. Then after I have installed all dependencies with `yarn install` and run `yarn dev` I got everything running smoothly on localhost.

I also started using Gatsby Cloud to deploy the demo and after setting up my account and have the builds running nicely everytime I pushed anything to master branch I noticed Gatsby was suggesting me to upgrade some dependencies. The reason for that was: 

> To take full advantage of Gatsby Builds, upgrade to  **gatsby@^2.19.5** and  **gatsby-plugin-sharp@^2.4.0**.

Doing that would give me the benefit of having distributed builds for the demo website, thus resulting in improved build times, as stated in the [documentation](https://www.gatsbyjs.com/docs/distributed-builds/): 

> You can expect consistent 2.5x improvements, and the caching and distribution on subsequent builds can lead to 10x improvements in build times.

Of course, as an early adopter, and excited about trying out new features, I went on and opened up my terminal to update the dependencies as listed in the documentation, `npm i gatsby@^2.19.5 gatsby-plugin-sharp@^2.4.0`. Since I am running Yarn and the `gatsby` depenceny is under `devDependencies` I run the following commands to conform with my setup. 

```bash
$ cd /path/to/demo
$ yarn add -D gatsby@^2.19.5
$ yarn add gatsby-plugin-sharp@^2.4.0
```

Unfortunately after updating those two dependencies and tried to run `yarn dev` I started getting errors like this:

```
ERROR #85901  GRAPHQL
There was an error in your GraphQL query:
Unknown type "ImageSharpSizes".
File: node_modules/gatsby-transformer-sharp/src/fragments.js:251:55
```

You can clearly see it is a GraphQL related error coming from the `gatsby-transformer-sharp` plugin which now says the type `ImageSharpSizes` is unknown. :grimacing: Since I was also new to GraphQL I had no idea how to solve this, so Stackoverflow enters to rescue me. I found some links which led me to sharp repo issues and later another one which took me to [gatsby-plugin-sharp repo](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp) and there at the bottom of the README file there was a [troubleshooting section](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp#troubleshooting) explaining the issue and how to solve. The errors I was getting was because there were multiple incompatible versions of the `sharp` package installed in `node_modules` and to fix that I'd need to update all Gatsby dependencies that depended on the `sharp` package. In my case, those packages were:

- gatsby-plugin-sharp (I had just updated as written above)
- gatsby-source-contentful
- gatsby-transform-sharp

I updated them to their latest versions, run `yarn dev` and this time it worked fine. :raised_hands: :clap: After getting that handled I also updated the `sharp` dependency in my package.json to ensure packages that relied on `sharp` would use the same version. That was when I clearly understood, after reading the troubleshooting mentioned above, why the demo included the `sharp` package even though it was not using it directly.

At this stage everything was working fine, even when running Ubuntu as subsystem with WSL 2 in my Windows 10 PC. One thing interesting to note is that under WSL, when running the default terminal to open Ubuntu, everything works as expected, but unfortunately font support in this terminal is not good. I use ZSH with [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh). With Oh My Zsh you get a nice looking terminal plus other nice features like autosuggest, highlighting and so on which improve my development environment a lot. To get a better font support I installed [powerline fonts](https://github.com/powerline/fonts) and [wsltty](https://github.com/mintty/wsltty) (another terminal for WSL). That, indeed, resulted in what I was expecting, which was a good font rendering with icons.

But now whenever I tried to run `yarn install` the `sharp` build would fail due to this error:

```bash
[4/4] Building fresh packages...
...
error /home/[user]/app-name/node_modules/gatsby-plugin-sharp/node_modules/sharp: Command failed.
Exit code: 1
Command: (node install/libvips && node install/dll-copy && prebuild-install) || (node-gyp rebuild && node install/dll-copy)
...
Output:
ERR! sharp ENOENT: no such file or directory, mkdir 'C:\Users\[user]\AppData\Roaming/npm-cache'
info sharp Attempting to build from source via node-gyp but this may fail due to the above error
info sharp Please see https://sharp.pixelplumbing.com/page/install for required dependencies
...
```

Here the messages mention `sharp` failing to build and the reason for this is that this package depends on a native one called `libvips`. [libvips](https://github.com/libvips/libvips) is an image processing library written in C. That is why you see this `node install/libvips ...` command. There's a [install/libvips.js](https://github.com/lovell/sharp/blob/v0.24.0/install/libvips.js) script which is responsible for installing that sharp dependency. The script does things like checking if the system supports it, if libvips is already installed, and in case it is supported but not installed, it attempts to install it by first looking up the npm cache dir to grab a cached tar file, and if there's none it downloads it. That error was happening when the script attempted to get the tar file from `npm-cache` dir. This happens [here](https://github.com/lovell/sharp/blob/v0.24.0/lib/libvips.js#L32) and first it checks if the env `npm_config_cache` is set and if not it tries to interpolate `APPDATA` with `npm-cache`. In my case `npm_config_cache` was not defined but `APPDATA` was and it was equal to `C:\Users\[user]\AppData\Roaming`. Since I was running Ubuntu `APPDATA` shouldn't exist but `wsltty` had it defined and this caused the sharp build to fail. By not having `APPDATA` the script would fallback to `path.join(os.homedir(), '.npm'))` and this would work since this is the expected behavior and it is where npm keeps its cache.

After having a clear picture of the problem there were some approaches I could choose to solve it:

- Prefix the `yarn` command with `npm_config_cache`

	```bash
	npm_config_cache=`npm config get cache` yarn install
	```
	The downside is that I would probably have to use this prefix whenever I tried to install or update sharp 	to avoid the script picking up `APPDATA`.

- Export that env in my `.zshrc` file

	```bash
	EXPORT npm_config_cache=`npm config get cache`
	```
	But now I'd have to check if `npm` was installed and it seems hacky having to hardcode `npm_config_cache`. This was not what I wanted.

- Unset `APPDATA` within `.zshrc`.

	```bash
	unset APPDATA
	```
	I chose this one. Since I was running Ubuntu it did not make sense to have this set because that is a Windows environment variable. This approach allowed me to keep using wsltty to run Node and also not touch any `npm` or `yarn` config.


--------------

At the time of this writing [the dependencies in the contentful starter repository have already been updated](https://github.com/contentful-userland/gatsby-contentful-starter/commit/38edde98d4fd422352ee18477fa81cbb74ba1a2d) and that means you should not get `sharp` errors related to conflicting versions like I did when updating dependencies and also you will take advantage of distributed builds in Gatsby Cloud.
