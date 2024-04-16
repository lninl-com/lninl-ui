<script setup>
import baseDemo from './base.vue'
import themeDemo from './theme.vue'
import sizeDemo from './size.vue'
</script>

<template>
  <h1 class="dh1">
    Badge 徽标
  </h1>
  <p class="dp">
    用于告知用户，该区域的状态变化或者待处理任务的数量。
  </p>

  <h2 class="dh2">
    01 组件类型
  </h2>
  <baseDemo />

  <h2 class="dh2">
    02 组件样式
  </h2>
  <themeDemo />

  <h2 class="dh2">
    03 组件尺寸
  </h2>
  <sizeDemo />
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
