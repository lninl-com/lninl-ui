<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <l-textarea v-model="value" name="标签文字" label="标签文字" placeholder="设置最大字符个数" :maxlength="200" indicator :disable-default-padding="true" />
</template>
