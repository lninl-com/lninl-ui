<script setup>
import { computed, ref } from 'vue'

// Props 定义
const props = defineProps({
  /** 内容的对齐方式，默认居中对齐 */
  align: {
    type: String,
    default: 'middle',
    validator(val) {
      if (!val)
        return true
      return ['top', 'middle', 'bottom'].includes(val)
    },
  },
  /** 是否显示右侧箭头 */
  arrow: Boolean,
  /** 是否显示下边框 */
  bordered: {
    type: Boolean,
    default: true,
  },
  /** 下方内容描述 */
  description: {
    type: [String, Function],
  },
  /** 是否开启点击反馈 */
  hover: Boolean,
  /** 主图 */
  image: {
    type: [String, Function],
  },
  /** 左侧图标，出现在单元格标题的左侧 */
  leftIcon: {
    type: [String, Function],
  },
  /** 和标题同行的说明文字 */
  note: {
    type: [String, Function],
  },
  /** 是否显示表单必填星号 */
  required: Boolean,
  /** 最右侧图标 */
  rightIcon: {
    type: [String, Function],
  },
  /** 标题 */
  title: {
    type: [String, Function],
  },
  /** 跳转类型，当为navigateBack时，url填写返回的返回的页面数，对应uni.navigateBack中的delta值 */
  jumpType: {
    type: String,
    default: 'navigateTo',
    validator(val) {
      if (!val)
        return true
      return ['switchTab', 'reLaunch', 'redirectTo', 'navigateTo', 'navigateBack'].includes(val)
    },
  },
  url: {
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
const isLastChild = ref(false)
function jumpLink(url, jumpType) {
  if (url) {
    if (jumpType === 'navigateBack')
      uni.navigateBack({ delta: url })
    else if (jumpType === 'reLaunch')
      uni.reLaunch({ url })
    else if (jumpType === 'redirectTo')
      uni.redirectTo({ url })
    else if (jumpType === 'switchTab')
      uni.switchTab({ url })
    else
      uni.navigateTo({ url })
  }
}

function click(e) {
  emits('click', e)
  jumpLink(props.url, props.jumpType)
}

const computedStyle = computed(() => {
  return `${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle}`
})
</script>

<template>
  <view
    :style="computedStyle"
    class="class l-class l-cell relative box-border h-[--l-cell-height,auto] w-[100%] flex overflow-hidden px-[--l-cell-horizontal-padding,32rpx] py-[--l-cell-vertical-padding,32rpx] lh-[--l-cell-line-height,48rpx] after:(pointer-events-none absolute bottom-0 left-[--l-cell-border-left-space,var(--l-cell-horizontal-padding,32rpx)] left-0 right-[--l-cell-border-right-space,0] right-0 box-border scale-y-50 b-b-width-[--l-cell-border-width,1px] b-b-solid content-empty b-b-color-[--l-cell-border-color,theme(component-stroke)]) bg-[--l-cell-bg-color,theme(bg-color-container)]"
    :class="{
      'l-cell--borderless after:(hidden)': !props.bordered || isLastChild.value,
      'l-cell--middle items-center': props.align === 'middle',
      'l-cell--top items-start': props.align === 'top',
      'l-cell--bottom items-end': props.align === 'bottom',
    }" :hover-class="props.hover ? 'l-cell--hover ' : ''" hover-stay-time="70"
    :aria-role="props.ariaRole || (props.arrow ? 'button' : '')" :aria-label="props.ariaLabel" @tap="click"
  >
    <view class="l-cell__left l-class-left flex items-center not-empty:(mr-[--l-spacer,16rpx])">
      <l-icon
        v-if="props.leftIcon"
        class="l-cell__left-icon l-class-left-icon font-size-[--l-cell-left-icon-font-size,48rpx] color-[--l-cell-left-icon-color,theme(brand-color)]"
        name="props.leftIcon.name"
      />
      <slot name="left-icon" />
      <l-image
        v-if="props.image" shape="round"
        t-class="l-cell__left-image l-class-image h-[--l-cell-image-height,96rpx] w-[--l-cell-image-width,96rpx]"
        :src="props.image"
      />
      <slot name="image" />
    </view>
    <view class="l-cell__title l-class-center flex-[1_1_auto] empty:(hidden)">
      <view
        class="l-class-title l-cell__title-text flex font-400 font-size-[--l-cell-title-font-size,theme(font-size-m)] color-[--l-cell-title-color,theme(font-gray-1)]"
      >
        <block v-if="props.title">
          {{ props.title }}
        </block>
        <slot name="title" />
        <block v-if="props.required">
          <text
            decode
            class="l-cell--required font-size-[--l-cell-required-font-size,theme(font-size-m)] color-[--l-cell-required-color,theme(error-color-6)]"
          >
            &nbsp;*
          </text>
        </block>
      </view>

      <view
        class="l-cell__description l-class-description lh-[--l-cell-description-line-height,44rpx] font-size-[--l-cell-description-font-size,theme(font-size-base)] color-[--l-cell-description-color,theme(font-gray-2)]"
      >
        <view v-if="props.description" class="l-cell__description-text mt-[calc(var(td-spacer,16rpx)/2)]">
          {{ props.description }}
        </view>
        <slot name="description" />
      </view>
    </view>

    <view
      class="l-cell__note l-class-note flex flex-[1_1_auto] items-center justify-end empty:(hidden) font-size-[--l-cell-note-font-size,theme(font-size-m)] color-[--l-cell-note-color,theme(font-gray-3)]"
    >
      <text v-if="props.note">
        {{ props.note }}
      </text>
      <slot name="note" />
    </view>

    <view class="l-cell__right l-class-right ml-[calc(var(--l-spacer,16rpx)/2)] flex items-center">
      <l-icon
        v-if="props.arrow"
        class="l-cell__right-icon l-class-right-icon font-size-[--l-cell-right-icon-font-size,48rpx] color-[--l-cell-right-icon-color,theme(font-gray-3)]"
        name="chevron-right"
      />
      <block v-else>
        <l-icon v-if="props.rightIcon" class="l-cell__right-icon l-class-right-icon" name="props.right.name" />
        <slot name="right-icon" />
      </block>
    </view>
  </view>
</template>

<style scoped>
.l-cell--hover {
  background-color: var(--l-cell-hover-color, var(--l-bg-color-secondarycontainer, var(--l-gray-color-1, #f3f3f3)));
}
</style>
