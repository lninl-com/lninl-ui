<script setup>
import { ref } from 'vue'

const radio = ref(false)
</script>

<template>
  <l-radio value="radio1" label="单选" default-checked />
  <view class="block" />
  <l-radio value="radio2" label="单选" placement="right" default-checked />
</template>

<style>
.block {
  height: 32rpx;
}
</style>
