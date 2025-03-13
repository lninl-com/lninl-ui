<script setup>
const activeImage = 'https://tdesign.gtimg.com/miniprogram/checkbox-checked.png'
const inActiveImage = 'https://tdesign.gtimg.com/miniprogram/checkbox.png'
</script>

<template>
  <l-checkbox label="多选" icon="line" default-checked />
  <div style="height: 16px" />
  <l-checkbox label="多选" icon="rectangle" default-checked />
  <div style="height: 16px" />
  <l-checkbox value="checkbox1" label="图片图标" :icon="[activeImage, inActiveImage]" />
</template>
