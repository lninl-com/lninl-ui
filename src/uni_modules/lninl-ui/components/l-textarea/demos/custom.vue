<template>
  <div class="textarea-example">
    <text class="textarea-example__label">
      标签文字
    </text>
    <l-textarea class="textarea" placeholder="请输入文字" :maxlength="100" indicator bordered :disable-default-padding="true" custom-style="height:248rpx" />
  </div>
</template>

<style scoped>
.textarea-example {
  padding: 32rpx 32rpx 48rpx;
  background-color: var(--bg-color-demo, #fff);
}
.textarea-example__label {
  display: block;
  color: var(--l-text-color-primary, rgba(0, 0, 0, 0.9));
  font-size: 24rpx;
  line-height: 40rpx;
  padding-bottom: 16rpx;
}
.textarea {
  padding-top: 24rpx;
  padding-bottom: 24rpx;
}
</style>
