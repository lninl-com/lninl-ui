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
  <div class="bg-[--bg-color-demo,#fff] !block">
    <l-search
      v-model="value"
      placeholder="请输入关键字"
      @change="onChange"
      @blur="onBlur"
      @clear="onClear"
      @focus="onFocus"
      @submit="onSubmit"
      @action-click="onActionClick"
    />
  </div>
</template>

<style scoped>
@import "../../lninl-ui/demo.css"
</style>
