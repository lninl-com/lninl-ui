<template>
  <view class="input-demo">
    <view class="input-demo__summary">
      标签文字
    </view>
    <l-input class="custom-input" placeholder="请输入文字" borderless :suffix-icon="{ name: 'error-circle-filled', ariaLabel: '提示' } " />
  </view>
</template>

<style scoped>
.input-demo {
  --l-input-vertical-padding: 24rpx;
  background-color: var(--bg-color-demo, #fff);
  padding: 32rpx 32rpx 16rpx;
}

.input-demo__summary {
  color: var(--l-text-color-primary, rgba(0, 0, 0, 0.9));
  font-size: 24rpx;
  line-height: 40rpx;
  margin: 0 8rpx 16rpx;
}
</style>

<style>
/** 小程序下会有虚拟标签，需要用.custom-input .l-input的写法 */
.custom-input.l-input, .custom-input .l-input {
  border: 2rpx solid rgba(220, 220, 220, 1);
  border-radius: 12rpx;
}
</style>
