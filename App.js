const fs = require('fs');
const fsExtra = require('fs-extra');

module.exports = {
  checkEnvironment: () => {
    console.log('Env Okay!')
  },
  run: () => {
    const cwd = process.cwd();

    fsExtra.copySync(__dirname  +  '/stubs/.babelrc', cwd + '/.babelrc');
    fsExtra.copySync(__dirname  +  '/stubs/jest.config.js', cwd + '/jest.config.js');

    fs.mkdirSync(cwd + '/tests/Vue', {recursive: true})

    fsExtra.copySync(__dirname  +  '/stubs/Counter.spec.js', cwd + '/tests/Vue/Counter.spec.js');
    fsExtra.copySync(__dirname  +  '/stubs/setup.js', cwd + '/tests/Vue/setup.js');

    fs.mkdirSync(cwd + '/resources/js', {recursive: true})
    fsExtra.copySync(__dirname  +  '/stubs/Counter.vue', cwd + '/resources/js/Counter.vue');
  }
}
