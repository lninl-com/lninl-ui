<script setup>
function click(e) {
  // eslint-disable-next-line no-console
  console.log(e)
}
</script>

<template>
  <p class="dp">
    <l-button theme="primary" icon="app" content="填充按钮" size="large" class="margin" />
    <l-button theme="primary" size="large" loading class="margin">
      加载中
    </l-button>
    <l-button theme="primary" icon="search" shape="square" size="large" class="margin" aria-label="搜索" @tap="click" />
  </p>
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
