<template>
  <div>
    <div class="summary">Large</div>
    <div class="block">
      <l-avatar icon="user" size="large" :badge-props="{ count: 8, size: 'large', offset: [7, 7] }" />
    </div>

    <div class="summary">Middle</div>
    <div class="block">
      <l-avatar icon="user" :badge-props="{ count: 8, offset: [5, 5] }" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.block {
  padding: 32rpx 32rpx 48rpx 32rpx;
}

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
