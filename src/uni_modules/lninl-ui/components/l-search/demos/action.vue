<script setup>
import { ref } from 'vue'

function onChange(val) {
  console.log('change: ', val)
}
function onActionClick(val) {
  console.log('action-click: ', '点击了“取消”', val)
}

const value = ref('')
</script>

<template>
  <div class="bg-[--bg-color-demo,#fff] !block">
    <l-search placeholder="搜索预设文案" :center="true" :focus="true" action="取消" @change="onChange" @action-click="onActionClick" />
  </div>
</template>

<style scoped>
@import "../../lninl-ui/demo.css"
</style>
