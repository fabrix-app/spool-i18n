import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import i18next from 'i18next'
import * as config from './config/index'
import * as pkg from '../package.json'

/**
 * @class I18n
 *
 * Provide i18n to a Fabrix Applicatoin
 *
 * @see {@link https://www.npmjs.com/package/i18n}
 */
export class I18nSpool extends ExtensionSpool {
  private _translate

  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: {}
    })

    this.extensions = {
      __ : {
        get: () => {
          return this.__
        },
        set: (newValue) => {
          throw new Error('__ can not be set through FabrixApp, check spool-i18n instead')
        },
        enumerable: true,
        configurable: true
      }
    }
    return this
  }

  async initI18n(i18nConfig) {
    return i18next.init(i18nConfig)
      .then(t => {
        this._translate = t
        return this._translate = t
      })
  }

  get __ () {
    if (this._translate) {
      return this._translate
    }
    else {
      throw new Error('i18n has not yet been initialized')
    }
  }

  validate() {

  }

  configure() {

  }

  async initialize() {
    await this.initI18n(this.app.config.get('i18n'))
  }

  async unload() {

  }

  async sanity() {

  }
}

