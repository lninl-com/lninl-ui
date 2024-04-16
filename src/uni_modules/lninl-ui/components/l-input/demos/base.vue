<template>
  <view class="bg-[#f6f6f6]">
    <l-input label="标签文字" placeholder="请输入文字" :clearable="true" :hold-keyboard="true" @change="onChange" />
    <l-input label="标签文字" placeholder="请输入文字(选填)" />
    <l-input placeholder="请输入文字" />
  </view>
</template>

<style>
.l-input {
  margin-bottom: 32rpx;
}
</style>
