import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import { createI18n } from 'vue-i18n'
import App from './App'
import en from './locale/en.json'
import zhHans from './locale/zh-Hans.json'
import zhHant from './locale/zh-Hant.json'

import { config } from './custom/config'
import mixin from './custom/mixin'

import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  const messages = {
    'en': en,
    'zh-Hans': zhHans,
    'zh-Hant': zhHant,
  }
  const i18nConfig = {
    legacy: false,
    locale: uni.getLocale(), // 获取已设置的语言
    messages,
  }
  const i18n = createI18n(i18nConfig)
  app.use(i18n)

  const pinia = createPinia()
  pinia.use(createPersistedState({
    storage: {
      getItem: uni.getStorageSync,
      setItem: uni.setStorageSync,
    },
  }))
  app.use(pinia)

  config(app)

  app.mixin(mixin)

  return {
    app,
    pinia,
  }
}
