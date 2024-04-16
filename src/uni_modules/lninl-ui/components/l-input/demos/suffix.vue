<template>
  <view class="bg-[#f6f6f6]">
    <l-input label="标签文字" placeholder="请输入文字" suffix-icon="{ name: 'error-circle-filled', ariaLabel: '提示' }" />
    <l-input label="标签文字" placeholder="请输入手机号码">
      <template #suffix>
        <l-button theme="primary" size="extra-small">
          操作按钮
        </l-button>
      </template>
    </l-input>
    <l-input label="标签文字" placeholder="请输入文字" suffix-icon=" { name: 'user-avatar', ariaLabel: '通讯录' }" />
  </view>
</template>

<style>
.l-input {
  margin-top: 32rpx;
}
</style>
