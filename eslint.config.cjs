const antfu = require('@antfu/eslint-config').default

// https://github.com/antfu/eslint-config
module.exports = antfu({
  unocss: true,
  typescript: true,
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
  overrides: [
    {
      files: ['**/__test__/**'],
      env: {
        jest: true,
      },
    },
  ],
})
