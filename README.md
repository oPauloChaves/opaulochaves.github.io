# paulochaves.dev - Personal Website and Blog

## Requirements

To use this project you have to have a Contentful account. If you don't have one yet you can register at [www.contentful.com/sign-up](https://www.contentful.com/sign-up/).

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install) (if you haven't already).

### Get the source code and install dependencies.

```
$ git clone git@github.com:opaulochaves/opaulochaves.github.io.git
$ yarn install
```

### Grab the keys from Contentful and paste them in the following env files

- `.env.development`

  ```yaml
  CONTENTFUL_SPACE_ID=''
  CONTENTFUL_ACCESS_TOKEN='' # Content Preview API - access token
  CONTENTFUL_HOST='preview.contentful.com'
  ```

- `.env.production`

  ```yaml
  CONTENTFUL_SPACE_ID=''
  CONTENTFUL_ACCESS_TOKEN='' # Content Delivery API - access token
  CONTENTFUL_HOST='cdn.contentful.com'
  ```

## Crucial Commands

This project comes with a few handy commands for linting and code fixing.

### `yarn run develop`

Run in the project locally.

### `yarn run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `yarn run deploy`

Run a production build into `./public` and publish the site to GitHub pages.

## Other resources

- This website is based on [gatsby-starter-bootstrap](https://github.com/jaxx2104/gatsby-starter-bootstrap) and [gatsby-contentful-starter](https://github.com/contentful-userland/gatsby-contentful-starter)
- Tutorial video series ["Building a blazing fast website with GatsbyJS and Contentful"](https://www.youtube.com/watch?v=Ek4o40w1tH4&list=PL8KiuH6vpACV-F7jXribe4YveGBhBeG9A) by @Khaledgarbaya
