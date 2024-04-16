<template>
  <h3 class="dh3">
    圆形徽标
  </h3>
  <p class="dp">
    <l-badge count="2" :offset="[-2, -2]">
      <l-icon name="notification" size="24" aria-label="通知" />
    </l-badge>
  </p>

  <h3 class="dh3">
    方形徽标
  </h3>
  <p class="dp">
    <l-badge count="2" shape="square" :offset="[-2, -2]">
      <l-icon name="notification" size="24" aria-label="通知" />
    </l-badge>
  </p>

  <h3 class="dh3">
    气泡徽标
  </h3>
  <p class="dp">
    <l-badge count="领积分" shape="bubble" aria-role="button">
      <l-button icon="shop" aria-label="商店" shape="square" size="large" />
    </l-badge>
  </p>

  <h3 class="dh3">
    角标
  </h3>
  <l-cell title="单行标题">
    <template #note>
      <l-badge count="New" :offset="[0, 0]" shape="ribbon" />
    </template>
  </l-cell>
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
