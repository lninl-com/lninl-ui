import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [{ path: 'pages/index/index' }],
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
