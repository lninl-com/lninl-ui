<template>
  <view class="row">
    <l-button theme="primary" size="large">
      填充按钮
    </l-button>
    <l-button theme="primary" size="large" icon="search" shape="square" aria-label="搜索" />
    <l-button theme="primary" size="large" shape="round">
      填充按钮
    </l-button>
    <l-button theme="primary" size="large" icon="search" shape="circle" aria-label="搜索" />
  </view>
  <l-button theme="primary" size="large" block t-class="external-class">
    填充按钮
  </l-button>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  margin: 0 32rpx 32rpx;
}

.rectangle-button {
  border-radius: 0;
}
</style>
