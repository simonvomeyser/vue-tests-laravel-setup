#!/usr/bin/env node

const App = require("./app.js");

const [,, ...args] = process.argv;

App.checkEnvironment();

App.run(args);
