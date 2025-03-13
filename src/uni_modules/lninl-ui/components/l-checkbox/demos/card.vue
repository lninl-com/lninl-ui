<template>
  <l-checkbox-group class="theme-card" :default-value="['1', '2']">
    <l-checkbox value="1" label="多选" />
    <l-checkbox value="2" label="多选" />
    <l-checkbox value="3" label="多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行多选标题" />
  </l-checkbox-group>
</template>

<style scoped>
.theme-card {
  border-radius: 24rpx;
  margin: 0 32rpx;
  overflow: hidden;
}
</style>
