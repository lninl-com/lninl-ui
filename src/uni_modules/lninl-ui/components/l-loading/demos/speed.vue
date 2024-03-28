<script lang="ts" setup>
import { ref } from 'vue'

const loadingDuration = ref(5)
</script>

<template>
  <div class="loading-demo">
    <l-loading :duration="(1 / loadingDuration) * 3000" text="加载中..." />
  </div>

  <div class="slider-wrap">
    <t-slider v-model="loadingDuration" :min="0" :max="10" :label="false" />
  </div>
</template>

<style scoped>
.loading-demo {
  padding: 0 16px;
}

.slider-wrap {
  width: 100%;
  margin-top: 16px;
  padding: 20px 0;
}
</style>
