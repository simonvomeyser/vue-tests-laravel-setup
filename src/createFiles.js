const fs = require('fs');
const fsExtra = require('fs-extra');

const cwd = process.cwd();

module.exports = function createFiles() {

    copyStub('.babelrc', '/.babelrc');
    copyStub('jest.config.js', '/jest.config.js');

    mkdir('/tests/Vue')

    copyStub('Counter.spec.js', '/tests/Vue/Counter.spec.js');
    copyStub('setup.js', '/tests/Vue/setup.js');

    mkdir('/resources/js')
    copyStub('Counter.vue', '/resources/js/Counter.vue');
}

const copyStub = (stubName, where) => {
    fsExtra.copySync(__dirname  + '/stubs/' + stubName, cwd + where);
}


const mkdir = (name) => {
    fs.mkdirSync(cwd + name, {recursive: true})
}