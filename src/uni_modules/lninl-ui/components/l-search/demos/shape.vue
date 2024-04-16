<script setup>
import { ref } from 'vue'

function onChange(val) {
  console.log('change: ', val)
}

const value = ref('')
</script>

<template>
  <p class="dp bg-[--bg-color-demo,#fff] !block">
    <l-search v-model="value" :clearable="true" shape="round" placeholder="请输入关键字" @change="onChange" />
  </p>
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
