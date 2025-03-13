<script setup>
import { ref } from 'vue'

const value = ref([1, 2])
const value1 = ref([1, 2])
</script>

<template>
  <l-checkbox-group v-model:value="value">
    <div v-for="n in 3" :key="n" :class="`card ${value.indexOf(n) > -1 ? 'card--active' : value.indexOf(n)}`">
      <l-icon v-if="value.indexOf(n) > -1" name="check" class="card__icon" :aria-hidden="true" />
      <l-checkbox :value="n" label="多选" content="描述信息描述信息描述信息描述信息描述信息" icon="none" borderless />
    </div>
  </l-checkbox-group>

  <div class="tdesign-mobile-demo-block__summary" style="margin-left: 16px; margin-top: 24px">
    横向卡片多选框
  </div>

  <l-checkbox-group v-model:value="value1" class="horizontal-box">
    <div v-for="n in 3" :key="n" :class="`card ${value1.indexOf(n) > -1 ? 'card--active' : value1.indexOf(n)}`">
      <l-icon v-if="value1.indexOf(n) > -1" name="check" class="card__icon" :aria-hidden="true" />
      <l-checkbox :value="n" label="多选" icon="none" borderless />
    </div>
  </l-checkbox-group>
</template>

<style scoped>
.card {
  position: relative;
  margin: 32rpx;
  border-radius: 12rpx;
  overflow: hidden;
  box-sizing: border-box;
  border: 3rpx solid var(--td-bg-color-container, #fff);
}

.card--active {
  border-color: var(--td-brand-color, #0052d9);
}

.card--active::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  border: 14px solid var(--td-brand-color, #0052d9);
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.card__icon {
  color: var(--td-bg-color-container, #fff);
  position: absolute;
  left: 1.5px;
  top: 1.5px;
  z-index: 1;
}

/* 横向布局 */
.horizontal-box {
  width: calc(100% - 64rpx);
  display: flex;
  align-items: center;
  margin: 32rpx;
}

.horizontal-box .card {
  flex: 1;
  margin: 0;
}

.horizontal-box .card+.card {
  margin-left: 24rpx;
}

.horizontal-box .card::after {
  border-width: 12px;
}

.horizontal-box .card__icon {
  font-size: 12px;
}
</style>
