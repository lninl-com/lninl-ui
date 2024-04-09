<script setup>
import BaseDemo from './base.vue';
import ThemeDemo from './theme.vue';
import SizeDemo from './size.vue';
</script>

<template>
  <view>
    <h1>Badge 徽标</h1>
    <p>
      用于告知用户，该区域的状态变化或者待处理任务的数量。
    </p>

    <h2>01 组件类型</h2>
    <div>
      <BaseDemo />
    </div>

    <h2>02 组件样式</h2>
    <div>
      <ThemeDemo />
    </div>

    <h2>03 组件尺寸</h2>
    <div>
      <SizeDemo />
    </div>
  </view>
</template>

<style scoped>
h1 {
  font-size: 48rpx;
  font-weight: 700;
  line-height: 64rpx;
  margin: 48rpx 32rpx 0 32rpx;
  color: var(--l-font-gray-1, rgba(0, 0, 0, 0.9));
}

h2 {
  margin: var(--l-spacer-4, 64rpx) 32rpx 0 32rpx;
  font-weight: 700;
  font-size: 18px;
  line-height: 52rpx;
}

h3 {
  margin: var(--td-spacer, 32rpx) 32rpx;
  font-size: var(--td-font-size-base, 14px);
  white-space: pre-line;
  color: var(--l-font-gray-2, rgba(0, 0, 0, 0.6));
  line-height: 44rpx;
}

p {
  font-size: 14px;
  color: var(--l-font-gray-2, rgba(0, 0, 0, 0.6));
  margin: 8px 32rpx 0;
  line-height: 22px;
}
</style>
