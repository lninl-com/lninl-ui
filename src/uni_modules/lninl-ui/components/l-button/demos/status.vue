<template>
  <div class="row">
    <l-button size="large" disabled theme="primary">
      填充按钮
    </l-button>
    <l-button size="large" disabled theme="light">
      填充按钮
    </l-button>
    <l-button size="large" disabled>
      填充按钮
    </l-button>
  </div>
  <div class="row">
    <l-button size="large" disabled theme="primary" variant="outline">
      描边按钮
    </l-button>
    <l-button size="large" disabled theme="primary" variant="text">
      文字按钮
    </l-button>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  padding: 0 16px;
}

.row + .row {
  margin-top: 16px;
}

.l-button + .l-button {
  margin-left: 16px;
}
</style>
