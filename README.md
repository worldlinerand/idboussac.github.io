### id-blockchain.org


Official public website for the ID-Blockchain project.


## How to contribute?
If you don't have Ruby installed: Install Ruby (OSX):
```
brew install ruby
```
Clone the projet locally
```
git clone git@github.com:idboussac/idboussac.github.io.git
```
Move into the project folder:
```
cd ~/idboussac.github.io
```
Checkout a new branch:
```
git co -b my_new_branch
```
Install jekyll Gem:
```
Gem install Jekyll
```
Make freshly installed Gems with Bundler
```
bundle install
```
Open the project files, the project is structured as follow:
```
- Blog
---> .sass-cache
---> _layouts
---> _posts (Where you add new content)
---> _sass
---> _site
---> assets (Where your add images and/or pdf files)
---> css
---> js
```
On this blog, posts are written in [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). To add a new post, simply type the timestamp of your post and its title as file name, separated by dashes, and add the `.md` extention like. By convention we adopt timestamps like: `2017-01-01-my-first-post.md`
Start your `.md` file by adding these informations:
```
---
layout: post
title: Your Title
date: 2017-06-23
---
``
When you are happy with your new post or changes, compile them into static files:
```
jekyll serve
```
or
```
bundle exec jekyll serve --watch
```
to see changes while working.
Once you are done adding new contents, commit your changes, push them to your branch and create your merge request to our master branch.
