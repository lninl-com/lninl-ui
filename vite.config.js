import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import Uni from '@dcloudio/vite-plugin-uni'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

function copyFile(src, dest) {
  return {
    enforce: 'post',
    async writeBundle() {
      await fs.copyFileSync(path.resolve(__dirname, src), path.join(__dirname, 'dist', process.env.NODE_ENV === 'production' ? 'build' : 'dev', process.env.UNI_PLATFORM, dest))
    },
  }
}
// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    plugins: [
      UniPages({ dir: '{src/pages,src/**/demos/**}' }), // UniPages({ dir: '{src/pages,src/**/demos/**}' }),自动生成pages.json配置。如果不想生成框架内组件的测试页面，可去掉“,src/**/demos/**”
      Uni.default(),
      UnoCSS(),
      copyFile('src/static/robots.txt', './robots.txt'),
      copyFile('src/static/sitemap.xml', './sitemap.xml'),
    ],
  }
})
