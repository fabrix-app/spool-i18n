const path = require('path')

const AppConfigLocales = {
  en: {
    helloworld: 'hello world',
    hello: {
      user: 'hello {{username}}'
    }
  },
  de: {
    helloworld: 'hallo Welt',
    hello: {
      user: 'hallo {{username}}'
    }
  }
}

module.exports = {
  pkg: {
    name: 'repl-spool-test'
  },
  api: {},
  config: {
    i18n: {
      lng: 'en',
      resources: {
        en: {
          translation: AppConfigLocales.en
        },
        de: {
          translation: AppConfigLocales.de
        }
      }
    },
    main: {
      spools: [
        require('../dist').I18nSpool
      ],
      paths: {
        temp: path.resolve(__dirname)
      }
    }
  },
  locales: AppConfigLocales
}

