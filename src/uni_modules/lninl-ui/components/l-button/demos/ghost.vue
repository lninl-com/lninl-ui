<template>
  <div class="row">
    <l-button size="large" ghost theme="primary">
      幽灵按钮
    </l-button>
    <l-button size="large" ghost theme="danger">
      幽灵按钮
    </l-button>
    <l-button size="large" ghost>
      幽灵按钮
    </l-button>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  padding: 16px;
  background-color: #181818;
}

.l-button + .l-button {
  margin-left: 16px;
}
</style>
