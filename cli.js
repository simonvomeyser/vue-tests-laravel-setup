#!/usr/bin/env node

const checkEnvironment = require("./src/checkEnvironment");
const createFiles = require("./src/createFiles");

const [, , ...args] = process.argv;

checkEnvironment()
    .then(() => {
        console.log('-------------')
        return createFiles();
    })
    .then(() => {
        console.log('-------------')
        console.log('Created your test scaffolding, now run:')
        console.log('node_modules/bin/jest')
    })
    .catch((e) => {
        console.log(e.message);
    })
