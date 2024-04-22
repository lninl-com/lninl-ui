<template>
  <div class="textarea-example">
    <l-textarea
      class="textarea"
      label="标签文字"
      placeholder="请输入文字"
      :maxlength="500"
      indicator
      layout="vertical"
    />
  </div>

  <div class="textarea-example">
    <div class="textarea-example__summary">
      卡片样式
    </div>
    <l-textarea class="textarea" label="标签文字" placeholder="请输入文字" custom-style="border-radius: 18rpx;" :maxlength="500" indicator />
  </div>
</template>

<style scoped>
.textarea-example {
  margin: 0 32rpx 48rpx;
  overflow: hidden;
}
.textarea-example__summary {
    font-size: 28rpx;
    color: rgba(0, 0, 0, 0.6);
    margin: 0 32rpx 48rpx 32rpx;
    line-height: 44rpx;

}

.card {
  border-radius: 18rpx;
  margin: 0 32rpx 48rpx 32rpx;
}
.textarea {
  height: 312rpx;
}
</style>
