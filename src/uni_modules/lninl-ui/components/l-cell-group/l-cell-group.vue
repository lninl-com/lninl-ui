<script setup>
import { computed, ref } from 'vue'

// Props 定义
const props = defineProps({
  /** 是否显示组边框 */
  bordered: {
    type: Boolean,
    default: false,
  },
  /** 单元格组风格 */
  theme: {
    type: String,
    default: 'default',
    validator(val) {
      if (!val)
        return true
      return ['default', 'card'].includes(val)
    },
  },
  /** 单元格组标题 */
  title: {
    type: String,
    default: '',
  },
  /** 样式 */
  style: {
    type: String,
    default: '',
  },
  /** 自定义样式 */
  customStyle: {
    type: [Object, String],
    default: () => { return '' },
  },
})

const emits = defineEmits(['click'])
function click(e) {
  emits('click', e)
}
const computedStyle = computed(() => {
  return `${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle}`
})
</script>

<template>
  <view v-if="props.title" class="class l-cell-group__title l-class-title font-PingFangSC-Regular fz-[--l-cell-group-title-font-size,28rpx] pl-[--l-cell-group-title-padding-left,32rpx] lh-[--l-cell-group-title-line-height,90rpx] text-left bg-[--l-cell-group-title-bg-color,theme(bg-color-secondarycontainer)] color-[--l-cell-group-title-color,theme(font-gray-3)]">
    {{ props.title }}
  </view>
  <view
    :style="computedStyle" class="class l-class l-cell-group relative"
    :class="{
      'before:(absolute box-border content-empty pointer-events-none right-0 left-0 top-0 border-t-1px border-t-solid border-t-color-[--l-cell-group-border-color,theme(border-color)] scale-y-50 z-1) after:(absolute box-border content-empty pointer-events-none right-0 left-0 bottom-0 border-b-1px border-b-solid  border-b-color-[--l-cell-group-border-color,theme(border-color)] scale-y-50 z-1)': props.bordered,
      'mx-32rpx my-0 b-rd-[theme(radius-large)] overflow-hidden': props.card,
    }"
  >
    <slot />
  </view>
</template>
