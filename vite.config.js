import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    unocss(),
  ],
})
