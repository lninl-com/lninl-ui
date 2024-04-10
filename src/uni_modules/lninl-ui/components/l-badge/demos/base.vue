<template>
  <h3> 红点徽标 </h3>
  <div>
    <l-badge dot :offset="[-4, 4]" class="mr-48rpx" content="消息" />
    <l-badge dot :offset="[1, -1]" class="mr-48rpx">
      <l-icon name="notification" size="24" aria-label="通知" />
    </l-badge>
    <l-badge dot :offset="[1, 1]" class="mr-48rpx">
      <l-button>按钮</l-button>
    </l-badge>
  </div>

  <h3> 数字徽标 </h3>
  <div>
    <l-badge count="8" content="消息" :offset="[-8, 0]" class="mr-48rpx" />
    <l-badge count="2" :offset="[-2, -2]" class="mr-48rpx">
      <l-icon name="notification" size="24" aria-label="通知" />
    </l-badge>
    <l-badge count="8" :offset="[2, 2]" class="mr-48rpx">
      <l-button>按钮</l-button>
    </l-badge>
  </div>

  <h3> 自定义徽标 </h3>
  <div>
    <l-badge count="NEW" :offset="[0, 2]" aria-role="button">
      <l-button icon="notification" aria-label="通知" shape="square" size="large" />
    </l-badge>
  </div>
</template>

<style scoped>
@import "../../lninl-ui/demo.css"
</style>
