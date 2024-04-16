<script setup>
import { ref } from 'vue'

function onChange(val) {
  console.log('change: ', val)
}
function onBlur() {
  console.log('blur')
}
function onClear(e) {
  console.log('clear', e)
}
function onFocus() {
  console.log('handleInput')
}

function onSubmit() {
  console.log('submit')
}
function onActionClick() {
  console.log('action-click')
}
const value = ref('adsfd')
</script>

<template>
  <p class="dp bg-[--bg-color-demo,#fff] !block">
    <l-search placeholder="最大输入10个字符" :maxlength="10" />
  </p>
  <p class="dp bg-[--bg-color-demo,#fff] !block">
    <l-search placeholder="最大输入10个字符，汉字算两个" :maxcharacter="10" />
  </p>
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
