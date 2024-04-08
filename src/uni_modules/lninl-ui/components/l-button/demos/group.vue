<template>
  <div class="row">
    <l-button size="large" theme="light">
      填充按钮
    </l-button>
    <l-button size="large" theme="primary">
      填充按钮
    </l-button>
  </div>
</template>

<style scoped>
.row {
  margin: 0 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
</style>
