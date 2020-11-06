const fs = require('fs');
const fsExtra = require('fs-extra');
const path = require('path');

module.exports = {
  checkEnvironment: () => {
    console.log('Env Okay!')
  },
  run: () => {
    fs.mkdirSync(process.cwd() + '/tests/Vue', {recursive: true})
    fsExtra.copySync(path.resolve(__dirname, './stubs/Counter.spec.js'), '/tests/ExampleCounter.spec.js');
  }
}
