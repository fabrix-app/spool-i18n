# spool-i18n

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

[I18N](https://nodejs.org/api/i18n.html) Spool. Adds an interactive shell to your Fabrix app to help with
development and debugging. Saves command history between sessions.

## Usage
The i18n spool is loaded in your spool config per usual.

```js
// config/main.ts
import { I18nSpool } from '@fabrix/spool-i18n'
export const main = {
  // ...
  spools: [
    // ...
    I18nSpool
  ]
}
```

```js
// config/i18n.js
export const i18n = {
}
```

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/fabrix-app/fabrix/blob/master/.github/CONTRIBUTING.md) for more
information on how our projects are organized and how to get started.

## License
[MIT](https://github.com/fabrix-app/spool-i18n/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-i18n.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-i18n
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-i18n/nmaster.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-i18n/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-i18n.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-i18n
[codeclimate-image]: https://img.shields.io/codeclimate/github/fabrix-app/spool-i18n.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/fabrix-app/spool-i18n
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix

