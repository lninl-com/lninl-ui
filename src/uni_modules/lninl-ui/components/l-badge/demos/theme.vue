<template>
  <div>
    <div class="summary">圆形徽标</div>
    <div class="badge-demo">
      <l-badge count="2" :offset="[-2, -2]">
        <l-icon name="notification" size="24" aria-label="通知" />
      </l-badge>
    </div>

    <div class="summary">方形徽标</div>
    <div class="badge-demo">
      <l-badge count="2" shape="square" :offset="[-2, -2]">
        <l-icon name="notification" size="24" aria-label="通知" />
      </l-badge>
    </div>

    <div class="summary">气泡徽标</div>
    <div class="badge-demo">
      <l-badge count="领积分" shape="bubble" aria-role="button">
        <l-button icon="shop" aria-label="商店" shape="square" size="large" />
      </l-badge>
    </div>

    <div class="summary" style="margin-bottom: 32rpx">角标</div>
    <l-cell title="单行标题">
      <template #note>
        <l-badge count="New" :offset="[0, 0]" shape="ribbon" slot="note" />
      </template>
    </l-cell>
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
