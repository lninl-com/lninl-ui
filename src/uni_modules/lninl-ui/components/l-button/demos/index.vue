<script setup>
import baseDemo from './base.vue'
import iconDemo from './icon.vue'
import ghostDemo from './ghost.vue'
import groupDemo from './group.vue'
import blockDemo from './block.vue'
import statusDemo from './status.vue'
import sizeDemo from './size.vue'
import shapeDemo from './shape.vue'
import themeDemo from './theme.vue'
</script>

<template>
  <h1> Button 按钮 </h1>
  <p> 用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。 </p>

  <h2> 01 组件类型 </h2>

  <h3>基础按钮</h3>
  <baseDemo />

  <h3>图标按钮</h3>
  <iconDemo />

  <h3>幽灵按钮</h3>
  <ghostDemo />

  <h3>组合按钮</h3>
  <groupDemo />

  <h3>通栏按钮</h3>
  <blockDemo />

  <h2>02 组件状态</h2>

  <h3>按钮禁用态</h3>
  <statusDemo />

  <h2>03 组件样式</h2>

  <h3>按钮尺寸</h3>
  <sizeDemo />

  <h3>按钮形状</h3>
  <shapeDemo />

  <h3>按钮主题</h3>
  <themeDemo />
</template>

<style scoped>
@import "../../lninl-ui/demo.css"
</style>
