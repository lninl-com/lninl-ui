<route type="page">
{
  style: { navigationBarTitleText: '延时' },
}
</route>

<script setup>
import { ref } from 'vue'

const showLoading = ref(false)
function onChangeLoading(value) {
  showLoading.value = value
}
</script>

<template>
  <div class="switch-wrap color-rgba(0,0,0,0.7) mb-10px text-14px flex items-center">
    <l-switch @change="onChangeLoading" />
    <view>{{ showLoading ? '请求发起，延迟显示loading' : '请求结束，隐藏loading' }}</view>
  </div>
  <l-loading :delay="1000" :loading="showLoading" text="加载中..." />
</template>

<style scoped>
@import "../../lninl-ui/demo.css"
</style>
