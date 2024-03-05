import { defineConfig } from 'vite'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import uni from '@dcloudio/vite-plugin-uni'
import unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UniHelperPages(),
    uni(),
    unocss(),
  ],
})
