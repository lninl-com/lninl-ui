<template>
  <div class="row">
    <l-button size="large">填充按钮</l-button>
    <l-button size="large" variant="outline">描边按钮</l-button>
    <l-button size="large" variant="text">文字按钮</l-button>
  </div>

  <div class="row">
    <l-button size="large" theme="primary">填充按钮</l-button>
    <l-button size="large" theme="primary" variant="outline">描边按钮</l-button>
    <l-button size="large" theme="primary" variant="text">文字按钮</l-button>
  </div>

  <div class="row">
    <l-button size="large" theme="danger">填充按钮</l-button>
    <l-button size="large" theme="danger" variant="outline">描边按钮</l-button>
    <l-button size="large" theme="danger" variant="text">文字按钮</l-button>
  </div>

  <div class="row">
    <l-button size="large" theme="light">填充按钮</l-button>
    <l-button size="large" theme="light" variant="outline">描边按钮</l-button>
    <l-button size="large" theme="light" variant="text">文字按钮</l-button>
  </div>
</template>

<style scoped>
.row {
  margin: 0 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.row:not(:last-child) {
  margin-bottom: 16px;
}
</style>
