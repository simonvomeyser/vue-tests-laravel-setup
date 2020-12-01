const fs = require('fs');
const prompts = require('prompts');
const figures = require('prompts/dist/util/figures')

module.exports = async function checkEnvironment() {

    await checkPackageJson();
    await checkForGitRepo();
    await checkForLaravelApp();

}

function checkPackageJson() {
    if (exists('package.json')) {
        return success("Found a package.json");
    } else {
        return question('No package.json found. Are you running the command in your root directory?')
    }
}

function checkForLaravelApp() {
    if (exists('app') && exists('public') && exists('webpack.mix.js') && exists('tests')) {
        return success("Seems to be a Laravel App");
    } else {
        return question('It seems you are not running this command inside a Laravel app. Still continue?')
    }
}

function checkForGitRepo() {
    if (exists('.git/config')) {
        return success("It's a git repository");
    } else {
        return question('We will make changes to files, continue without git repo?')
    }
}

function exists(path) {
    return fs.existsSync(path);
}

function success(message) {
    console.log(figures.tick + " " + message);
}

function question(message) {
    return prompts(
        [{
            type: 'toggle',
            name: "value",
            message,
            initial: false,
            inactive: 'no',
            active: 'yes',
        }]).then(({value}) => {

        if (!value) {
            throw new Error('Test creation stopped.');
        }

    });
}
