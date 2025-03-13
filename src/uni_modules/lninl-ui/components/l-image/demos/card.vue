<template>
  <view class="bg-[#f6f6f6]">
    <l-radio-group t-class="theme-card" default-value="radio1">
      <l-radio label="单选" value="radio1" />
      <l-radio label="单选" value="radio2" />
      <l-radio label="单选标题多行单选标题多行单选标题多行单选标题多行单选标题多行" value="radio3" />
    </l-radio-group>
  </view>
</template>

<style>
.theme-card {
  border-radius: 24rpx;
  margin: 32rpx;
  overflow: hidden;
}
</style>
