import { defineConfig } from 'vite'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UniHelperPages({ dir: '{src/pages,src/**/demos/**}' }), // 自动生成pages.json配置。如果不想生成框架内组件的测试页面，可去掉src/**/demos/**
    uni(),
    UnoCSS(),
  ],
  build: {
    watch: {
      exclude: ['node_modules/**', '/__uno.css'], // 解决mp-weixin下 “Error: EBUSY: resource busy or locked, lstat”崩溃问题
    },
  },
})
