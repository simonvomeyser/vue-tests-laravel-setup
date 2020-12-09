const figures = require('prompts/dist/util/figures')

module.exports = function success(message) {
    console.log(figures.tick + " " + message);
}
