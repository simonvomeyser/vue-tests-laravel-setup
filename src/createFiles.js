const fs = require('fs');
const fsExtra = require('fs-extra');
const question = require('./question');
const success = require('./success');
const exists = require('./exists');

const cwd = process.cwd();

module.exports = async function  createFiles() {

    await copyStub('.babelrc', '/.babelrc');
    await copyStub('jest.config.js', '/jest.config.js');

    mkdir('/tests/Vue')

    await copyStub('Counter.spec.js', '/tests/Vue/Counter.spec.js');
    await copyStub('setup.js', '/tests/Vue/setup.js');
    mkdir('/resources/js')
    await copyStub('Counter.vue', '/resources/js/Counter.vue');
}

const copyStub = async (stubName, where) => {
    if (exists(cwd +where)) {
        await question('File ' + where + ' already exists, overwrite?')
    }
    fsExtra.copySync(__dirname  + '/stubs/' + stubName, cwd + where);
    return success('Created file ' + where )
}


const mkdir = (name) => {
    fs.mkdirSync(cwd + name, {recursive: true})
}