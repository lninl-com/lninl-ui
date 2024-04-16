<template>
  <view class="bg-[#f6f6f6]">
    <l-input label="标签文字" placeholder="请输入文字" :maxlength="10" tips="最大输入10个字符" />
    <l-input label="标签文字" placeholder="请输入文字" :maxcharacter="10" tips="最大输入10个字符，汉字算两个" />
  </view>
</template>

<style>
.l-input {
  margin-bottom: 32rpx;
}
</style>
