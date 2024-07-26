<script setup></script>

<template>
  <h1 class="dh1">
    Cell-group 组合单元格
  </h1>
  <p class="dp">
    cell的组合单元格
  </p>

  <view>
    <t-cell-group title="01 基础用法">
      <t-cell title="单行标题" required />
      <t-cell title="单行标题" hover note="辅助信息" />
      <t-cell title="单行标题" hover arrow />
      <t-cell title="单行标题" hover note="辅助信息" arrow />
    </t-cell-group>
  </view>
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
