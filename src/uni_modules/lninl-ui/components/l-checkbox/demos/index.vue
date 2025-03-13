<script setup>
import allDemo from './all.vue'
import baseDemo from './base.vue'
import cardDemo from './card.vue'
import horizontalDemo from './horizontal.vue'
import rightDemo from './right.vue'
import specialDemo from './special.vue'
import statusDemo from './status.vue'
import typeDemo from './type.vue'
</script>

<template>
  <view class="bg-[#f6f6f6]">
    <h1 class="dh1">
      Checkbox 多选框
    </h1>
    <p class="dp">
      用于预设的一组选项中执行多项选择，并呈现选择结果。
    </p>

    <h2 class="dh2">
      01 组件类型
    </h2>

    <h3 class="dh3">
      纵向多选框
    </h3>
    <baseDemo />

    <h3 class="dh3">
      横向多选框
    </h3>
    <horizontalDemo />

    <h3 class="dh3">
      带全选多选框
    </h3>
    <allDemo />

    <h2 class="dh2">
      02 组件状态
    </h2>

    <h3 class="dh3">
      多选框状态
    </h3>
    <statusDemo />

    <h2 class="dh2">
      03 组件样式
    </h2>

    <h3 class="dh3">
      勾选样式
    </h3>
    <typeDemo />

    <h3 class="dh3">
      勾选显示位置
    </h3>
    <rightDemo />

    <h3 class="dh3">
      非通栏样式
    </h3>
    <cardDemo />

    <h2 class="dh2">
      04 组件规格
    </h2>

    <h3 class="dh3">
      多选框尺寸规格
    </h3>
    <specialDemo />
  </view>
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>

<style>
.l-input {
  margin-bottom: 32rpx;
}

.custom-input.l-input, .custom-input .l-input {
  border: 2rpx solid rgba(220, 220, 220, 1);
  border-radius: 12rpx;
}
</style>
