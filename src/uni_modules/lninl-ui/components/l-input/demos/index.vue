<script setup>
import alignDemo from './align.vue'
import bannerDemo from './banner.vue'
import baseDemo from './base.vue'
import borderedDemo from './bordered.vue'
import customDemo from './custom.vue'
import labelDemo from './label.vue'
import layoutDemo from './layout.vue'
import maxlengthDemo from './maxLength.vue'
import prefixDemo from './prefix.vue'
import specialDemo from './special.vue'
import statusDemo from './status.vue'
import suffixDemo from './suffix.vue'
</script>

<template>
  <view class="bg-[#f6f6f6]">
    <h1 class="dh1">
      Input 输入框
    </h1>
    <p class="dp">
      用于单行文本信息输入。
    </p>

    <h2 class="dh2">
      01 组件类型
    </h2>

    <h3 class="dh3">
      基础输入框
    </h3>
    <baseDemo />

    <h3 class="dh3">
      带字数限制输入框
    </h3>
    <maxlengthDemo />

    <h3 class="dh3">
      带操作输入框
    </h3>
    <suffixDemo />

    <h3 class="dh3">
      带图标输入框
    </h3>
    <prefixDemo />

    <h3 class="dh3">
      特定类型输入框
    </h3>
    <specialDemo />

    <h2 class="dh2">
      02 组件状态
    </h2>

    <h3 class="dh3">
      输入框状态
    </h3>
    <statusDemo />

    <h3 class="dh3">
      信息超长状态
    </h3>
    <labelDemo />

    <h2 class="dh2">
      03 组件样式
    </h2>

    <h3 class="dh3">
      内容位置
    </h3>
    <alignDemo />

    <h3 class="dh3">
      竖排样式
    </h3>
    <layoutDemo />

    <h3 class="dh3">
      非通栏样式
    </h3>
    <bannerDemo />

    <h3 class="dh3">
      标签外置样式
    </h3>
    <borderedDemo />

    <h3 class="dh3">
      自定义样式输入框
    </h3>
    <customDemo />
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
