<script lang="ts" setup></script>

<template>
  <div class="loading-demo">
    <div class="loading-demo__summary mb-16">
      大尺寸
    </div>
    <l-loading size="26px" text="加载中..." />
  </div>
  <div class="loading-demo">
    <div class="loading-demo__summary mb-16 mt-24">
      中尺寸
    </div>
    <l-loading size="22px" text="加载中..." />
  </div>
  <div class="loading-demo">
    <div class="loading-demo__summary mb-16 mt-24">
      小尺寸
    </div>
    <l-loading size="20px" text="加载中..." />
  </div>
</template>

<style scoped>
.loading-demo {
  padding: 0 16px;
}

.loading-demo__summary {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  /* margin: 8px 16px 0; */
  line-height: 22px;
}
.mt-24 {
  margin-top: 24px;
}

.mb-16 {
  margin-bottom: 16px;
}
</style>
