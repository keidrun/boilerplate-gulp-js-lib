# boilerplate-gulp-js-lib [![devDependency Status][depstat-image]][depstat-url]

Boilerplate of Javascript library development with Gulp to publish to NPM.

## Description

This boilerplate provides an automatic `Javascript(ES6/ES2015)` library
development environment with `Gulp` to publish your library to `NPM`.

## Automatic Settings

* lint (eslint)
* transpile (ES6->ES5)
* test (mocha and chai)
* coverage (istanbul)
* package (minify)

## Preconditions

* Installed `yarn` or `npm`.
* Installed `gulp` globally.
* (Optional) Had your account of `NPM`.

## Steps

1. Clone this repository via `git`.
1. Install modules via `yarn install` or `npm install`.
1. Start `gulp` and Enjoy developing your library.
1. Add it to `index.js` if you done
1. (Optional) Execute `npm publish` to publish it to NPM if you done.

## Note

* We must use 'gulp-mocha@^3.0.1' (not latest version) because of its issue. See [this](https://github.com/SBoudrias/gulp-istanbul/issues/115).

[depstat-url]: https://david-dm.org/keidrun/boilerplate-gulp-js-lib?type=dev
[depstat-image]: https://david-dm.org/keidrun/boilerplate-gulp-js-lib/dev-status.svg
