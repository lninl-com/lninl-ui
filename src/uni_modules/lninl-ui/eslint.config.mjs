import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  unocss: true,
  vue: true,
  rules: {
    'no-console': 'warn',
  },
  languageOptions: {
    globals: {
      $t: true,
      App: true,
      Page: true,
      WechatMiniprogram: true,
      UniApp: true,
      getCurrentPages: true,
      swan: true,
      tt: true,
      uni: true,
      wx: true,
    },
  },
})
