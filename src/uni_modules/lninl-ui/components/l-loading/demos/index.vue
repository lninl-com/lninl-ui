<script setup>
import baseDemo from './base.vue'
import horizDemo from './horiz.vue'
import vertDemo from './vert.vue'
import sizeDemo from './size.vue'
import pureTextDemo from './pure-text.vue'
import speedDemo from './speed.vue'
</script>

<template>
  <h1>Loading 加载</h1>
  <p>用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感，由一个或一组反馈动效组成。</p>

  <h2>01 组件类型</h2>

  <h3>纯图标</h3>
  <baseDemo />
  <h3>图标加文字横向</h3>
  <horizDemo />
  <h3>图标加文字竖向</h3>
  <vertDemo />
  <h3>纯文字</h3>
  <pureTextDemo />

  <h2>02 组件尺寸</h2>
  <sizeDemo />

  <h2>03 加载速度</h2>

  <h3>加载速度调整</h3>
  <speedDemo />
</template>

<style scoped>
@import "../../lninl-ui/demo.css"
</style>
