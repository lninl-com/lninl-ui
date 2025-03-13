<script setup>
import { ref } from 'vue'

const demoCheckboxMax = ref(['checkbox1', 'checkbox2'])

function checkboxGroupChange(value, context) {
  console.log('value:', value)
  console.log('Event:', context)
}
</script>

<template>
  <l-checkbox-group class="box" borderless :default-value="demoCheckboxMax" @change="checkboxGroupChange">
    <l-checkbox :block="false" value="checkbox1" label="多选标题" />
    <l-checkbox :block="false" value="checkbox2" label="多选标题" />
    <l-checkbox :block="false" value="checkbox3" label="上限四字" />
  </l-checkbox-group>
</template>

<style scoped>
.box {
  padding: 32rpx;
  display: flex;
  justify-content: space-between;
  background-color: var(--td-bg-color-demo, #fff);
}
</style>
