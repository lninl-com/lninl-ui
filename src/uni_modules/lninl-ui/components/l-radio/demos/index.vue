<script setup>
import baseDemo from './base.vue'
import horizontalDemo from './horizontal.vue'
import themeDemo from './theme.vue'
import cardDemo from './card.vue'
import specialDemo from './special.vue'
import statusDemo from './status.vue'
import alignDemo from './align.vue'
</script>

<template>
  <view class="bg-[#f6f6f6]">
    <h1 class="dh1">
      Radio 单选框
    </h1>
    <p class="dp">
      用于在预设的一组选项中执行单项选择，并呈现选择结果。
    </p>

    <h2 class="dh2">
      01 组件类型
    </h2>

    <h3 class="dh3">
      纵向单选框
    </h3>
    <baseDemo />

    <h3 class="dh3">
      横向单选框
    </h3>
    <horizontalDemo />

    <h2 class="dh2">
      02 组件状态
    </h2>

    <h3 class="dh3">
      单选框状态
    </h3>
    <statusDemo />

    <h2 class="dh2">
      03 组件样式
    </h2>

    <h3 class="dh3">
      勾选样式
    </h3>
    <themeDemo />

    <h3 class="dh3">
      勾选显示位置
    </h3>
    <alignDemo />

    <h3 class="dh3">
      非通栏单选样式
    </h3>
    <cardDemo />

    <h2 class="dh2">
      03 特殊样式
    </h2>

    <h3 class="dh3">
      纵向卡片单选框
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
