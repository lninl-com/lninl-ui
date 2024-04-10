<script lang="ts" setup>
import { ref } from 'vue'

const loadingDuration = ref(5)
</script>

<template>
  <div>
    <l-loading :duration="(1 / loadingDuration) * 3000" text="加载中..." />
  </div>

  <div>
    <l-slider v-model="loadingDuration" :min="0" :max="10" :label="false" />
  </div>
</template>

<style scoped>
@import "../../lninl-ui/demo.css"
</style>
