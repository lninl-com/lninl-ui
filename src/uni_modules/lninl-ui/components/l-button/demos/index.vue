<script setup>
import baseBtn from './base.vue'
import iconBtn from './icon.vue'
import ghost from './ghost.vue'
import group from './group.vue'
import block from './block.vue'
import status from './status.vue'
import size from './size.vue'
import shape from './shape.vue'
import theme from './theme.vue'
</script>

<template>
  <view>
    <h1>
      Button 按钮
    </h1>
    <div>
      用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。
    </div>
    <h2>
      01 组件类型
    </h2>
    <h3>基础按钮</h3>
    <div><base-btn /></div>
    <h3>图标按钮</h3>
    <div><icon-btn /></div>
    <h3>幽灵按钮</h3>
    <div><ghost /></div>
    <h3>组合按钮</h3>
    <div><group /></div>
    <h3>通栏按钮</h3>
    <div><block /></div>
    <h2>02 组件状态</h2>
    <h3>按钮禁用态</h3>
    <div><status /></div>

    <h2>03 组件样式</h2>
    <h3>按钮尺寸</h3>
    <div><size /></div>
    <h3>按钮形状</h3>
    <div><shape /></div>
    <h3>按钮主题</h3>
    <div><theme /></div>
  </view>
</template>
