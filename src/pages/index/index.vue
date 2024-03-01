<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { http } from '@/custom/config'

const { t } = useI18n()
const selected = ref()
const value = ref('shop')
const list = ref([
  { name: 'home', text: t('app.home'), icon: 'home', ariaLabel: '首页，有16个商品发布' },
  { name: 'shop', text: t('app.shop'), icon: 'app', badgeProps: { dot: true }, ariaLabel: '商城，有新的咨询' },
  { name: 'msg', text: t('app.msg'), icon: 'app', badgeProps: { count: 16 }, ariaLabel: '有16条消息' },
  {
    name: 'me',
    text: t('app.me'),
    icon: 'user',
    badgeProps: { count: '···' },
    ariaLabel: '我的，有很多消息',
    children: [
      {
        value: 'info',
        label: t('app.info'),
      },
      {
        value: 'my-home',
        label: t('app.my-home'),
      },
      {
        value: 'setting',
        label: t('app.setting'),
      },
    ],
  },
])
function change(changeValue) {
  selected.value = changeValue
  uni.setNavigationBarTitle({ title: t(`app.${Array.isArray(changeValue) && changeValue.length > 1 ? changeValue[1] : changeValue}`) })
}

// 测试get代码
http.get('/', { params: { userName: 'name', password: '123456' }, custom: { toast: false } }).then((res) => {
  console.log('get-res', res)
}).catch((err) => {
  console.log('get-err', err)
})

// 测试post代码
http.post('/home/data', { userName: 'name', password: '123456' }).then((res) => {
  console.log('post-res', res)
}).catch((err) => {
  console.log('post-err', err)
})
</script>

<template>
  <view class="content p32rpx">
    <view>{{ t('app.name') }}</view>
    <view>{{ t("index.selected", { tabbar: selected }) }}</view>
    <l-tab-bar :value="value" theme="tag" shape="normal" :split="false" @change="change">
      <l-tab-bar-item
        v-for="item in list" :key="item.name" style="flex: 1/*mp-toutiao 要有此行*/" :icon="item.icon" :value="item.name"
        :sub-tab-bar="item.children" :badge-props="item.badgeProps" :aria-label="item.ariaLabel"
      >
        {{ item.text }}
      </l-tab-bar-item>
    </l-tab-bar>
  </view>
</template>

<style>
page,:root {
  /* --l-tab-bar-active-bg: #f2f3df */
}
</style>
