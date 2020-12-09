const fs = require('fs');

module.exports = function exists(path) {
    return fs.existsSync(path);
}
