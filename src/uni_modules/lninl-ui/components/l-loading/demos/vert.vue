<route type="page">
{
  style: { navigationBarTitleText: '组件类型' },
}
</route>

<script lang="ts" setup></script>

<template>
  <div class="container">
    <l-loading text="加载中" layout="vertical" />
    <l-loading theme="spinner" text="加载中..." layout="vertical" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.l-loading {
  margin-right: 64px;
}
</style>
