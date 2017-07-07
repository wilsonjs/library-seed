# TransferWise library seed

[![CircleCI](https://circleci.com/gh/transferwise/library-seed.svg?style=shield)](https://circleci.com/gh/transferwise/library-seed)

This repository contains a seed for creating TransferWise libraries.

## Usage

Fork the seed and replace the `library-seed` occurrences in `package.json` with your repository name and the values in curly braces in the `README-EXAMPLE.md` that will become the `README.md`.

## Setup

The seed comes with:
* [npm](https://www.npmjs.com/) as a package manager
* [webpack](https://webpack.js.org/) as a module bundler
* [Babel](https://babeljs.io/) as a compiler
* [ESLint](http://eslint.org/) with [Airbnb config](https://www.npmjs.com/package/eslint-config-airbnb-base) as a linting tool
* [Jest](https://facebook.github.io/jest/) as a testing utility

The seed is built for continuous integration with [CircleCI](https://circleci.com/).

CircleCI:
1. Builds the minified bundle
1. Pushes the `dist` folder contents to the `releases` branch
1. Bases a GitHub release off the `releases` branch automatically with
the help of [release-to-github-with-changelog](https://www.npmjs.com/package/release-to-github-with-changelog).

## Example README

An example README for the packages can be found [here](./README-EXAMPLE.md).

## Contributing

Feel free to contribute by making a Pull Request or creating an issue beforehand for discussion.
