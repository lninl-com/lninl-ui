import Request from 'luch-request'
import { useUserStore } from '../stores/user'

/**
 * 请在main.js中引用
 *
 * const app = createSSRApp(App)
 * const pinia = createPinia()
 * app.use(pinia)
 * ...
 * config(app) //尽量在app.use(pinia)之后引用
 * ...
 *
 */

// 网络
export const http = new Request()

// eslint-disable-next-line unused-imports/no-unused-vars
function requestInterceptors(vm) {
  http.interceptors.request.use((config) => {
    config.data = config.data || {}

    // 传入accessToken
    const userStore = useUserStore()
    if (userStore.accessToken)
      config.header.Authorization = `Bearer ${userStore.accessToken}`

    return config
  }, config =>
    Promise.reject(config))
}

// eslint-disable-next-line unused-imports/no-unused-vars
function responseInterceptors(vm) {
  http.interceptors.response.use((response) => { // response.statusCode===200
    const data = response.data
    if (data.code === 200) {
      // 根据业务调整
      return data || {}
    }

    return Promise.reject(response)
  }, (response) => { // response.statusCode!==200
    // 根据业务调整
    return Promise.reject(response)
  })
}

export function config(vm) {
  // 配置网络
  http.setConfig((config) => {
    config.baseURL = import.meta.env.VITE_BASE_URL
    return config
  })
  requestInterceptors(vm)
  responseInterceptors(vm)

  // 其他
}
