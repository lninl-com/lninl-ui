<route type="page">
{
  style: { navigationBarTitleText: '组件类型' },
}
</route>

<template>
  <l-loading />
  <l-loading reverse />
  <l-loading theme="spinner" :indicator="true" />
  <l-loading theme="dots" size="80rpx" />
</template>

<style scoped>
.l-loading {
  margin-right: 64px;
}
</style>
