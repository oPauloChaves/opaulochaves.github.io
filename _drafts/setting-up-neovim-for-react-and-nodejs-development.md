---
title: "Setting Up NeoVim for React and Nodejs Development on Ubuntu"
categories:
  - blog
tags:
  - vim
  - ubuntu
---

In this guide I will show you how to setup NeoVim for React and Nodejs development on Ubuntu

## [Installing Neovim]

1. Via **apt-get**

Neovim isn't available via `apt-get` by default, but it offers a Personal Package Archive (PPA) which allows you to install it by running `$ sudo apt-get install neovim`.
Run the following command to add the PPA, install neovim and some prerequesite packages.

```sh
sudo apt-get install software-properties-common

sudo add-apt-repository ppa:neovim-ppa/stable
sudo apt-get update
sudo apt-get install neovim

# prerequesites for Python modules
sudo apt-get install python-dev python-pip python3-dev python3-pip
```

This approach has a downfall though. I'm running Ubuntu 18.04 and at the time of this writing v0.3.8 is the version available through PPA while the latest stable version
on Github is 0.4.3. That's why these days I prefer to use appimage to install vim which is simpler to get up and running with vim.

2. Via **AppImage**

## Adding a Plugin Manager - Plug

[installing-neovim]: https://github.com/neovim/neovim/wiki/Installing-Neovim
