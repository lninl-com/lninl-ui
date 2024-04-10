<script setup>
import { ref } from 'vue'

function onChange(val) {
  console.log('change: ', val)
}

const value = ref('搜索预设文案')
</script>

<template>
  <div class="bg-[--bg-color-demo,#fff] !block">
    <l-search placeholder="搜索预设文案" center @change="onChange" />
  </div>
</template>

<style scoped>
@import "../../lninl-ui/demo.css"
</style>
