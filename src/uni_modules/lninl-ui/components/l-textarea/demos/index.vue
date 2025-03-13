<script setup>
import autosizeDemo from './autosize.vue'
import baseDemo from './base.vue'
import cardDemo from './card.vue'
import customDemo from './custom.vue'
import disabledDemo from './disabled.vue'
import labelDemo from './label.vue'
import maxCharacterDemo from './maxCharacter.vue'
import maxLengthDemo from './maxLength.vue'
</script>

<template>
  <view class="bg-[#f6f6f6]">
    <h1 class="dh1">
      Textarea 多行文本框
    </h1>
    <p class="dp">
      用于多行文本信息输入。
    </p>

    <h2 class="dh2">
      01 组件类型
    </h2>

    <h3 class="dh3">
      基础多行文本框
    </h3>
    <baseDemo />

    <h3 class="dh3">
      带标题多行文本框
    </h3>
    <labelDemo />

    <h3 class="dh3">
      自动增高多行文本框
    </h3>
    <autosizeDemo />

    <h3 class="dh3">
      设置字符数限制
    </h3>
    <maxLengthDemo />
    <maxCharacterDemo />

    <h2 class="dh2">
      02 组件状态
    </h2>

    <h3 class="dh3">
      禁用状态
    </h3>
    <disabledDemo />
    <h2 class="dh2">
      03 组件样式
    </h2>

    <h3 class="dh3">
      竖排样式
    </h3>
    <cardDemo />
    <h2 class="dh2">
      04 特殊样式
    </h2>

    <h3 class="dh3">
      标签外置输入框
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
