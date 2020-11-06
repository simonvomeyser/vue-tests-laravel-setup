const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');

module.exports = {
  checkEnvironment: () => {
    console.log('Env Okay!')
  },
  run: () => {
    const cwd = process.cwd();

    fsExtra.copySync(cwd  +  '/stubs/.babelrc', cwd + '/.babelrc');

    fs.mkdirSync(cwd + '/tests/Vue', {recursive: true})

    fsExtra.copySync(cwd  +  '/stubs/Counter.spec.js', cwd + '/tests/Vue/ExampleCounter.spec.js');
    fsExtra.copySync(cwd  +  '/stubs/setup.js', cwd + '/tests/Vue/setup.js');

    fs.mkdirSync(cwd + '/resources/js', {recursive: true})
    fsExtra.copySync(cwd  +  '/stubs/Counter.vue', cwd + '/resources/js/ExampleCounter.vue');
  }
}
