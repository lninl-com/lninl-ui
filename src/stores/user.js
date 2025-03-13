import { http } from '@/custom/config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const tenantID = ref(1)
  const openID = ref('')
  const accessToken = ref('')
  const accessTokenExpireIn = ref(0)
  const refreshToken = ref('')
  const refreshTokenExpireIn = ref(0)
  const selectedRegionList = ref([])
  const $reset = () => {
    user.value = {}
    tenantID.value = 1
    openID.value = ''
    accessToken.value = ''
    accessTokenExpireIn.value = 0
    refreshToken.value = ''
    refreshTokenExpireIn.value = 0
  }

  const getUserInfo = () => {
    http.get('/auth/info').then((res) => {
      user.value = res
    }).catch((err) => {
      console.log(err)
    })
  }

  const checkAndLogin = () => {
    if (!(accessToken.value && (new Date().getTime() / 1000 + 30 * 60) < accessTokenExpireIn.value)) {
      uni.showModal({
        title: '您未登录!',
        content: '请先去登录',
        showCancel: false,
        confirmText: '去登录',
        success(_res) {
          uni.navigateTo({ url: `/pages/index/index` })
        },
      })
    }
  }

  return { user, openID, tenantID, accessToken, accessTokenExpireIn, refreshToken, refreshTokenExpireIn, selectedRegionList, getUserInfo, $reset, checkAndLogin }
}, { persist: true })
