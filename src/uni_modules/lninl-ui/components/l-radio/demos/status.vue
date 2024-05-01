<script setup>
import { ref } from 'vue'

const radio1 = ref('1')

const options = [
  {
    value: '1',
    disabled: false,
    label: '选项禁用-已选',
  },
  {
    value: '2',
    label: '选项禁用-默认',
  },
]
</script>

<template>
  <view class="bg-[#f6f6f6]">
    <l-radio-group v-model="radio1" disabled :options="options" class="radio-group-demo space" />
  </view>
</template>

<style scoped>
.radio-group-demo {
  background-color: #fff;
}
.space {
  margin-bottom: 16px;
}
</style>
