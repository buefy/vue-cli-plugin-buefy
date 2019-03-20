# vue-cli-plugin-buefy

[![npm (scoped with tag)](https://img.shields.io/npm/v/vue-cli-plugin-buefy/latest.svg?style=flat-square)](https://npmjs.com/package/vue-cli-plugin-buefy)
[![npm](https://img.shields.io/npm/dt/vue-cli-plugin-buefy.svg?style=flat-square)](https://npmjs.com/package/vue-cli-plugin-buefy)
[![CircleCI](https://img.shields.io/circleci/project/github/buefy/vue-cli-plugin-buefy.svg?style=flat-square)](https://circleci.com/gh/buefy/vue-cli-plugin-buefy)
[![Codecov](https://img.shields.io/codecov/c/github/buefy/vue-cli-plugin-buefy.svg?style=flat-square)](https://codecov.io/gh/buefy/vue-cli-plugin-buefy)
[![Dependencies](https://david-dm.org/buefy/vue-cli-plugin-buefy/status.svg?style=flat-square)](https://david-dm.org/buefy/vue-cli-plugin-buefy)
[![js-standard-style](https://img.shields.io/badge/code_style-buefy-7957d5.svg?style=flat-square)](http://buefy.github.io)


[Vue CLI 3.x](https://github.com/vuejs/vue-cli) plugin to add buefy to your Vue Project

> Well, apparently you're an [adventurer](https://github.com/vuejs/vue-cli/blob/dev/README.md#status-beta). We are happy to see you here.

## Getting Started
If you don't have a project created with Vue CLI 3.x:

```sh
$ vue create my-vue-app
```

Install the plugin into your project:

```sh
$ cd my-vue-app
$ vue add buefy
```


## Global sass resources

You can do that using the css.loaderOptions option in `vue.config.js` to pass some shared global variables to all your Sass styles:

```js
// vue.config.js
const fs = require('fs')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/variables.scss', 'utf-8')
      }
    }
  }
}
```

## Changelog
Details of changes for each release are documented in the [CHANGELOG.md](https://github.com/buefy/vue-cli-plugin-buefy/blob/master/CHANGELOG.md).


## Issues
Please make sure to read the [Issue Reporting Checklist](https://github.com/buefy/vue-cli-plugin-buefy/blob/master/.github/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.


## Contribution
Please make sure to read the [Contributing Guide](https://github.com/buefy/vue-cli-plugin-buefy/blob/master/.github/CONTRIBUTING.md) before making a pull request.


## License

[MIT](http://opensource.org/licenses/MIT)
