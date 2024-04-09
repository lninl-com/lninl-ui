<template>
  <div>
    <div class="summary">红点徽标</div>
    <div class="badge-demo">
      <l-badge dot :offset="[-4, 4]" class="badge-item" content="消息" />
      <l-badge dot :offset="[1, -1]" class="badge-item">
        <l-icon name="notification" size="24" aria-label="通知" />
      </l-badge>
      <l-badge dot :offset="[1, 1]" class="badge-item">
        <l-button>按钮</l-button>
      </l-badge>
    </div>

    <div class="summary">数字徽标</div>
    <div class="badge-demo">
      <l-badge count="8" content="消息" :offset="[-8, 0]" class="badge-item" />
      <l-badge count="2" :offset="[-2, -2]" class="badge-item">
        <l-icon name="notification" size="24" aria-label="通知" />
      </l-badge>
      <l-badge count="8" :offset="[2, 2]" class="badge-item">
        <l-button>按钮</l-button>
      </l-badge>
    </div>

    <div class="summary">自定义徽标</div>
    <div class="badge-demo">
      <l-badge count="NEW" :offset="[0, 2]" aria-role="button">
        <l-button icon="notification" aria-label="通知" shape="square" size="large" />
      </l-badge>
    </div>
  </div>
</template>
<style scoped>
.badge-demo {
  display: flex;
  margin-top: 28px;
  margin-bottom: 24px;
  margin-left: 16px;
  align-items: center;

}

.badge-item {
  margin-right: 48px;
}
</style>
