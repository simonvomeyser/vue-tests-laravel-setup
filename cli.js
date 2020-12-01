#!/usr/bin/env node

// const App = require("./app.js");
const checkEnvironment = require("./src/checkEnvironment");
const createFiles = require("./src/createFiles");

const [,, ...args] = process.argv;

checkEnvironment()
    .then(() => {
        createFiles();
    })
    .catch((e) => {
        console.log(e.message);
    })
