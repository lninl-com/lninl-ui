<script lang="ts" setup>
import { ref } from 'vue'

const loadingDuration = ref(5)
</script>

<template>
  <p class="dp">
    <l-loading :duration="(1 / loadingDuration) * 3000" text="加载中..." />
  </p>

  <p class="dp">
    <l-slider v-model="loadingDuration" :min="0" :max="10" :label="false" />
  </p>
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
