<script setup>
import { ref } from 'vue'

const text1 = ref('已输入文字')
const text2 = ref('不可编辑文字')
</script>

<template>
  <view class="bg-[#f6f6f6]">
    <l-input v-model="text1" label="标签文字(清空)" placeholder="请输入文字" :clearable="true" status="error" tips="辅助说明" @change="(val) => console.log(val)" />
    <l-input v-model="text1" label="标签文字" placeholder="请输入文字" status="error" tips="辅助说明" @change="(val) => console.log(val)" />
    <l-input :value="text1" label="标签文字(value)" placeholder="请输入文字" status="error" tips="辅助说明" @change="(val) => console.log(val)" />
    <l-input :default-value="text1" label="标签文字(default-value)" placeholder="请输入文字" status="error" tips="辅助说明" @change="(val) => console.log(val)" />
    <l-input v-model="text2" label="不可编辑" disabled />
  </view>
</template>

<style>
.l-input {
  margin-top: 32rpx;
}
</style>
