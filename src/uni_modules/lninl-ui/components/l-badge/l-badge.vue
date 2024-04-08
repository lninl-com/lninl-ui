<script setup>
import { computed } from 'vue'

const props = defineProps({
  /** 颜色 */
  color: {
    type: String,
    default: '',
  },
  /** 徽标内容，示例：`content='自定义内容'`。也可以使用默认插槽定义 */
  content: {
    type: [String, Function],
    default: '',
  },
  /** 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。特殊：值为空表示使用插槽渲染 */
  count: {
    type: [String, Number, Function],
    default: 0,
  },
  /** 是否为红点 */
  dot: {
    type: Boolean,
    default: false,
  },
  /** 组件类名，分别用于设置外层元素、默认内容、右上角内容等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 封顶的数字值 */
  maxCount: {
    type: Number,
    default: 99,
  },
  /** 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem'] */
  offset: {
    type: Array,
  },
  /** 形状 */
  shape: {
    type: String,
    default: 'circle',
    validator(value) {
      return ['circle', 'square', 'bubble', 'ribbon'].includes(value)
    },
  },
  /** 当数值为 0 时，是否展示徽标 */
  showZero: {
    type: Boolean,
    default: false,
  },
  /** 尺寸 */
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['medium', 'large'].includes(value)
    },
  },
})
// 是否展示角标
const isShowBadge = computed(() => {
  if (props.dot)
    return true

  const count = Number(props.count)
  if (!props.showZero && count === 0)
    return false

  return props.count != null
})

function hasUnit(unit) {
  return unit.indexOf('px') > 0
    || unit.indexOf('rpx') > 0
    || unit.indexOf('em') > 0
    || unit.indexOf('rem') > 0
    || unit.indexOf('%') > 0
    || unit.indexOf('vh') > 0
    || unit.indexOf('vm') > 0
}

// 徽标自定义样式
const badgeStyles = computed(() => {
  if (!props.offset)
    return { background: props.color }

  let [xOffset = 0, yOffset = 0] = props.offset
  xOffset = hasUnit(xOffset.toString()) ? xOffset : `${xOffset}px`
  yOffset = hasUnit(yOffset.toString()) ? yOffset : `${yOffset}px`
  return {
    background: props.color,
    right: xOffset,
    top: yOffset,
  }
})

const badgeValue = computed(() => {
  if (props.dot)
    return ''

  const count = Number(props.count)
  if (Number.isNaN(count) || Number.isNaN(props.maxCount))
    return props.count

  return count > props.maxCount ? `${props.maxCount}+` : count
})
</script>

<template>
  <view
    class="class l-class l-badge l-badge inline-block relative v-top"
    :class="{
      'l-badge__ribbon-outer absolute top-0 right-0': props.shape === 'ribbon',
    }"
  >
    <view class="l-badge__content">
      <slot v-if="!props.content" />
      <text v-else class="l-badge__content-text block lh-48rpx">
        {{ props.content }}
      </text>
    </view>
    <view
      v-if="isShowBadge"
      class="l-badge--basic l-has-count fw-$l-badge-font-weight,600 px-[--l-badge-basic-padding,8rpx] py-0 b-rd-[--l-badge-border-radius,4rpx] lh-[--l-badge-basic-height,32rpx] text-center absolute h-[--l-badge-basic-height,32rpx] right-0 top-0 z-100 translate-x-50% translate-y--50% bg-[--l-badge-bg-color,theme(error-color)] font-size-[--l-badge-font-size,theme(font-size-xs)] c-[--l-badge-text-color,theme(font-white-1)]"
      :class="{
        'l-badge--dot h-[--l-badge-dot-size,16rpx] min-w-[--l-badge-dot-size,16rpx] b-rd-50% px-0 py-0': props.dot,
        'l-badge--${props.size} font-size-[--l-badge-large-font-size,theme(font-size-s)] h-[--l-badge-large-height,40rpx] min-w-[--l-badge-large-height,40rpx] lh-[--l-badge-large-height,40rpx] py-0 px-[--l-badge-large-padding,10rpx]':
          props.size === 'large',
        'l-badge--${props.shape} b-rd-[calc(var(--l-badge-large-height,40rpx)/2)]':
          props.size === 'large' && props.shape === 'circle',
        'l-badge--${props.shape} b-rd-[calc(var(--l-badge-basic-height,32rpx)/2)]': props.shape === 'circle',
        'l-badge--${props.shape} b-rd-[--l-badge-bubble-border-radius,20rpx,20rpx,20rpx,2rpx]':
          props.shape === 'bubble',
        'l-badge--${props.shape} inline-block rotate-45 b-rd-0': props.shape === 'ribbon',
        'l-badge--count min-w-[--l-badge-basic-width,32rpx] whitespace-nowrap box-border': !props.dot && props.count,
      }"
      :style="badgeStyles"
    >
      <view
        v-if="props.shape === 'ribbon'"
        class="l-badge__ribbon--before b-b-width-[--l-badge-basic-height,32rpx] b-l-width-[--l-badge-basic-height,32rpx] b-l-transparent b-b-solid b-l-solid content-empty absolute h-0 w-0 bottom-0 left-[calc(-1*var(--l-badge-basic-height,32rpx)+1rpx)] b-b-color-[--l-badge-bg-color,theme(error-color)]"
        :style="props.color ? `border-color: ${props.color}` : ''"
      />
      {{ badgeValue }}
      <view
        v-if="props.shape === 'ribbon'"
        class="l-badge__ribbon--after b-b-width-[--l-badge-basic-height,32rpx] b-l-width-[--l-badge-basic-height,32rpx] b-l-transparent b-b-solid b-l-solid content-empty absolute h-0 w-0 bottom-0 right-[calc(-1*var(--l-badge-basic-height,32rpx)+1rpx)] b-b-color-[--l-badge-bg-color,theme(error-color)]"
        :style="props.color ? `border-color: ${props.color}` : ''"
      />
    </view>
    <slot name="count" />
  </view>
</template>
