<script setup>
import { ref } from 'vue'

const radio = ref(0)
const radio1 = ref(0)

function onChange(value, context) {
  radio.value = value
}

function onChange1(value, context) {
  radio1.value = value
}
</script>

<template>
  <l-radio-group :value="radio" @change="onChange">
    <view v-for="(item, index) in 3" :key="index" :class="`card ${radio === index ? 'card--active' : ''}`">
      <l-icon v-if="radio === index" name="check" class="card__icon" />
      <l-radio :value="index" label="单选" content="描述信息描述信息描述信息描述信息描述信息" icon="none" borderless />
    </view>
  </l-radio-group>

  <view class="demo-desc" style="margin: 48rpx 32rpx 32rpx">
    横向卡片单选框
  </view>

  <l-radio-group class="horizontal-box" :value="radio1" @change="onChange1">
    <view v-for="(item, index) in 3" :key="index" :class="`card ${radio1 === index ? 'card--active' : ''}`">
      <l-icon v-if="radio1 === index" name="check" class="card__icon" />
      <l-radio :value="index" label="单选" icon="none" borderless />
    </view>
  </l-radio-group>
</template>

<style scoped>
.card {
  display: block;
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
  display: block;
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
</style>
