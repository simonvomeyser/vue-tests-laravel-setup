#!/usr/bin/env node

// const App = require("./app.js");
const checkEnvironment = require("./checkEnvironment");

const [,, ...args] = process.argv;

checkEnvironment()
    .then(() => {
        console.log("run setup");
    })
    .catch((e) => {
        console.log(e.message);
    })

// App.run(args);
