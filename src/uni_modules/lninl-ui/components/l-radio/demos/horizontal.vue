<script setup>
import { ref } from 'vue'

const radio = ref('3')
function groupChangeFn(value, context) {
  console.log(value, context)
}
</script>

<template>
  <l-radio-group :default-value="radio" borderless class="box" @change="groupChangeFn">
    <l-radio :block="false" name="radio" label="单选标题" value="1" />
    <l-radio :block="false" name="radio" label="单选标题" value="2" />
    <l-radio :block="false" name="radio" label="上限四字" value="3" />
  </l-radio-group>
</template>

<style>
.box {
  padding: 32rpx;
  display: flex;
  justify-content: space-between;
  background-color: var(--td-bg-color-container, #fff);
}
</style>
