<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <l-textarea v-model="value" class="mt32rpx" label="标签文字" placeholder="设置最大字符个数，一个汉字表示两个字符" :maxcharacter="200" indicator />
</template>
