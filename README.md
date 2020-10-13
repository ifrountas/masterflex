# MasterFlex WordPress Theme
A clean starter WordPress Theme based on CSS3 Flexbox

## MasterFlex Requirements

MasterFlex requires [Node.js](https://nodejs.org) v10.16.x or newer.

## Download MasterFlex and Install Dependencies
From your `wp-content/themes` directory, run the following. 
```bash
$ git clone --single-branch --branch dev https://github.com/ifrountas/masterflex.git myfirsttheme
$ cd myfirsttheme
$ npm install
```

## Automated Startup 
When you run `npm install` the first time, you will trigger the automated startup. 

**"What is the name of your theme?"**

The provided answer is used to update style.css with your theme name.

**"What is the namespace of your theme?"**

This will replace all of the function namespaces and translation textdomains with your selected namespace.

**"What is your local URL for this install?"**

This URL is used to configure BrowserSync to work with your local environment.

## Commands
`npm run start` - watches all JS, CSS and image source files for changes. 

`npm run build` - compiles all JS, CSS and image source files localy.

`npm run compress` - compiles and minifies all JS, CSS and image source files in a new theme tag

