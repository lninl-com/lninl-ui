<script setup>
import baseDemo from './base.vue'
import maxlengthDemo from './maxlength.vue'
import actionDemo from './action.vue'
import shapeDemo from './shape.vue'
import otherDemo from './other.vue'
</script>

<template>
  <h1> Search 搜索框 </h1>
  <p> 用于用户输入搜索信息，并进行页面内容搜索。 </p>

  <h2>01 组件类型</h2>

  <h3>基础搜索框</h3>
  <baseDemo />

  <h3>字数限制</h3>
  <maxlengthDemo />

  <h3>输入值后显示取消按钮</h3>
  <actionDemo />

  <h2>02 组件样式</h2>

  <h3>搜索框形状</h3>
  <shapeDemo />

  <h2>03 组件状态</h2>

  <h3>默认状态其他对齐方式</h3>
  <otherDemo />
</template>

<style scoped>
@import "../../lninl-ui/demo.css"
</style>
