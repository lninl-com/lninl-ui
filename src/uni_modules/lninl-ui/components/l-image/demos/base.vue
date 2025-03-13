<script setup>
import { ref } from 'vue'

const radio = ref('3')
function groupChangeFn(value, context) {
  console.log(value, context)
}
</script>

<template>
  <view class="bg-[#f6f6f6]">
    <l-radio-group :default-value="radio" class="radio-group-demo" @change="groupChangeFn">
      <l-radio name="radio" value="1" label="单选" />
      <l-radio name="radio" value="2" label="单选" />
      <l-radio
        name="radio"
        value="3"
        label="单选单选单选单选单选单选单选单选单选单选单选单选单选单选单选单选单选单选"
      />
      <l-radio
        name="radio"
        value="4"
        label="单选"
        content="描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
      />
    </l-radio-group>
  </view>
</template>

<style>
.radio-group-demo {
  background: #fff;
}
</style>
