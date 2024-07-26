<template>
  <l-cell title="单行标题" hover arrow />
  <l-cell title="单行标题" hover required arrow />
  <l-cell title="单行标题" hover arrow aria-label="单行标题，有16条消息">
    <template #note>
      <l-badge :count="16" />
    </template>
  </l-cell>
  <l-cell title="单行标题" hover>
    <template #note>
      <!--  <l-switch :default-value="true" /> -->
    </template>
  </l-cell>
  <l-cell title="单行标题" hover note="辅助信息" arrow />
  <l-cell title="单行标题" hover arrow left-icon="lock-on" :bordered="false" />
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
