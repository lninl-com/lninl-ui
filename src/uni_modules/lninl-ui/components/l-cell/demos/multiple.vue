<template>
  <l-cell title="单行标题" description="一段很长很长的内容文字" hover arrow />
  <l-cell title="单行标题" description="一段很长很长的内容文字" hover arrow required />
  <l-cell title="单行标题" description="一段很长很长的内容文字" hover arrow>
    <template #note>
      <l-badge :count="16" />
    </template>
  </l-cell>
  <l-cell title="单行标题" description="一段很长很长的内容文字" hover>
    <template #note>
      <!-- <l-switch :default-value="true" /> -->
    </template>
  </l-cell>
  <l-cell title="单行标题" description="一段很长很长的内容文字" note="辅助信息" hover arrow />
  <l-cell title="单行标题" description="一段很长很长的内容文字" left-icon="lock-on" hover arrow />
  <l-cell title="多行标题" description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容" hover />
  <l-cell title="多行带头像" description="一段很长很长很长的内容文字" hover arrow>
    <template #left-icon>
      <view class="avatar">
        <!-- <open-data type="userAvatarUrl" /> -->
      </view>
    </template>
  </l-cell>
  <l-cell
    title="多行带图片"
    description="一段很长很长的内容文字"
    align="top"
    image="https://tdesign.gtimg.com/mobile/demos/avatar1.png"
    hover
    :bordered="false"
  />
</template>

<style scoped>
@import "../../lninl-ui/demo.css";
</style>
