module.exports = {
    "moduleFileExtensions": [
        "js",
        "json",
        "vue"
    ],
    "setupFilesAfterEnv": [
        "<rootDir>tests/Vue/setup.js"
    ],
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/resources/js/$1"
    },
    "roots": [
        "<rootDir>/tests/Vue"
    ],
    "transform": {
        ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    }
}
