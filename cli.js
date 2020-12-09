#!/usr/bin/env node

const checkEnvironment = require("./src/checkEnvironment");
const createFiles = require("./src/createFiles");
const kleur = require("kleur");

const [, , ...args] = process.argv;

checkEnvironment()
    .then(() => {
        console.log('-------------')
        return createFiles();
    })
    .then(() => {
        console.log('-------------')
        console.log(kleur.bgGreen('Created your test scaffolding'))
        console.log('Try to run "node_modules/bin/jest"')
    })
    .catch((e) => {
        console.log(kleur.bgRed(e.message));
    })
