import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationBarTitleText: '%app.name%',
    navigationBarTextStyle: '@navigationBarTextStyle',
    navigationBarBackgroundColor: '@navigationBarBackgroundColor',
    backgroundColor: '@backgroundColor',
    backgroundTextStyle: '@backgroundTextStyle',
    backgroundColorTop: '@backgroundColorTop',
    backgroundColorBottom: '@backgroundColorBottom',
  },
})
