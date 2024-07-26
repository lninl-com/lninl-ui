<script setup>
import baseDemo from './base.vue'
import multipleDemo from './multiple.vue'
import themeDemo from './theme.vue'
</script>

<template>
  <h1 class="dh1">
    Cell 单元格
  </h1>
  <p class="dp">
    用于各个类别行的信息展示。
  </p>

  <h2 class="dh2">
    01 组件类型
  </h2>

  <h3 class="dh3">
    单行单元格
  </h3>
  <baseDemo />

  <h3 class="dh3">
    多行单元格
  </h3>
  <multipleDemo />

  <h2 class="dh2">
    02 组件样式
  </h2>

  <h3 class="dh3">
    卡片单元格
  </h3>
  <themeDemo />
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
