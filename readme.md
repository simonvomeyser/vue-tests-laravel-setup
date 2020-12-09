# Simpler Vue.js tests in Laravel with Jest

This package aims to provide an easy, reusable way to set up Vue.js tests in Laravel.

The necessary config files will be created with one line of code, as well as an example `Counter` component with it's corresponding test.

I've written quite an [extensive blogpost](https://simple-web.dev/vue-testing-in-laravel) about the setup, if you want to do the setup yourself.

## What's to do

Run the following commands in the root of the project you want to add tests to: 

Create the necessary files:

```bash
npx vue-tests-laravel-setup
```

Make sure you've installed the necessary dependencies.

```bash
npm install -—save-dev jest vue-jest @vue/test-utils babel-core@bridge
```

Now you should be able to run your test via `node_modules/.bin/jest tests/Vue/Counter.spec.js` 

## Troubleshooting

Javascript libraries change all the time, so there is a lot that could go wrong. Make sure you:

- Remove all parts of a former test configuration that is maybe broken
- You use Vue.js 2.* (As soon as 3.0 is better integrated into Laravel Mix is will take a look) 
- You actually have vue and vue-template compiler installed

The last resort would be to install the specific (major) versions that worked for me:

```bash
npm i @vue/test-utils@^1.1.1 babel-core@^7.0.0-bridge.0 jest@^26.6.3 vue-jest@^3.0.7
```

Again, make sure vue is installed too:

```bash
npm install vue@^2.0 vue-template-compiler
```
