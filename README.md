# MakebeCool Starter Theme


## Getting started

To get started with MakebeCool Starter Theme, run the following command in your terminal:

> **Install dependencies** 

```
$ npm i
```

## Slate way

If you want to start Slate v1. way of developing read these instructions. 

Your config file is .env file. [Here](https://shopify.github.io/slate/docs/deploy-environments) you csn find docs about it.

Commands:

```
$ npm run start
```
This will call "slate-tools start" command to start the local developing. Compiles your local theme files into a dist directory, uploads these files to your remote Shopify store and finally boots up a local Express server that will serve most of your CSS and JavaScript.

```
$ npm run watch
```
This will call "slate-tools start --skipFirstDeploy". Skips the file upload sequence and simply boots up the local Express server.

```
$ npm run build 
```
Builds a production-ready version of the theme by compiling the files into the dist folder.

```
$ npm run deploy
```
This will call "slate-tools build && slate-tools deploy" command and uploads the dist folder to the Shopify store.

```
$ npm run zip
```
This will call ["slate-tools build && slate-tools zip"] command. Compiles the contents of the dist directory and creates a ZIP file in the root of the project.

## Theme Kit way


If you want to start Slate v0 with Theme Kit deploy, read these instructions. 

Your config file is config.yml file. [Here](https://shopify.github.io/themekit/configuration/) you csn find docs about it.

Commands:

```
$ theme download
```

If called without any arguments, it will download the entire theme, otherwise if you specify the files you want to download, then only those files will be retrieved. 

```
$ theme deploy
```
Deploy will completely replace what is on Shopify with what is in your current project directory. This means that any files that are on Shopify but are not on your local disk will be removed from Shopify. Any files that are both on your local disk and Shopify will be updated. Lastly any files that are only on your local disk will be upload to Shopify.

```
$ theme watch
```
Watch will start a process that will watch your directory for changes and upload them to Shopify.

## Gulp

Also you can use Gulp, for gathering and deploying assets to the Shopify store.
Your Gulp config file is gulpfile.js file. 