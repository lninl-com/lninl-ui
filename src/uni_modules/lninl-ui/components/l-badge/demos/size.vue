<template>
  <h3 class="dh3">
    Large
  </h3>
  <p class="p-32rpx pb-48rpx">
    <l-avatar icon="user" size="large" :badge-props="{ count: 8, size: 'large', offset: [7, 7] }" />
  </p>

  <h3 class="dh3">
    Middle
  </h3>
  <p class="p-32rpx pb-48rpx">
    <l-avatar icon="user" :badge-props="{ count: 8, offset: [5, 5] }" />
  </p>
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
