const prompts = require("prompts");
const figures = require('prompts/dist/util/figures')

module.exports = function question(message) {
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
            throw new Error(figures.cross + ' Test creation stopped.');
        }

    });
}
