<route type="page">
{
  style: { navigationBarTitleText: '组件类型' },
}
</route>

<template>
  <p class="dp">
    <l-loading class="mr-80rpx" />
    <l-loading class="mr-80rpx" reverse />
    <l-loading class="mr-80rpx" theme="spinner" :indicator="true" />
    <l-loading class="mr-80rpx" theme="dots" size="80rpx" />
  </p>
</template>

<style>
@import "../../lninl-ui/demo.css";
</style>
