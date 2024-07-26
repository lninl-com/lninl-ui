import { defineConfig } from 'vite'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import Uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCSS = await import('unocss/vite').then(i => i.default)
  return {
    plugins: [
      UniHelperPages({ dir: '{src/pages,src/**/demos/**}' }), // 自动生成pages.json配置。如果不想生成框架内组件的测试页面，可去掉“,src/**/demos/**”
      Uni(),
      UnoCSS(),
    ],
  }
})
