# This is advance tutorial on Backend from Hitesh Choudary

## How to store the the images in the the database

## Gitignore generators

Here is the link for generating a gitignore boilerplate for node https://www.toptal.com/developers/gitignore

## Configuring the dotenv modules

The environment variable is stored in .env file so that the crucial information like the mongodb url or the port name should not disclosed to the public

### How to use the the environmental variables in project files

To use the environmental variables in our files we need to install is package called dotenv then you have to configure it

If you are following the ES6 modules syntax then you have to follow the following steps

Import the dotenv in the main files here it is index.js
using the following code

`import dotenv from "dotenv"`

Copy the following code
`dotenv.config({ path: "./env"})`

This code will load and parse the following environment variables from the file into the process.env

The dotenv module follows the commonJs syntax so to allow the ES6 syntax you have to update your package.json file

```json
"scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"}`


Now you are good to go start you server and check if dotenv is working

### Note
Changes made inside the environment variables is not detected by the nodemon until we restart it again





```
