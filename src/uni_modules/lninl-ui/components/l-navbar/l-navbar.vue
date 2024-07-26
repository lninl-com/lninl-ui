<!-- eslint-disable vue/custom-event-name-casing -->
<script setup>
import { computed, ref } from 'vue'

// Props 定义
const props = defineProps({
  /** 是否添加动画效果 */
  animation: {
    type: Boolean,
    default: true,
  },
  delta: {
    type: Number,
    value: 1,
  },
  /** 左侧胶囊区域 */
  capsule: {
    type: Function,
  },
  /** 是否固定在顶部 */
  fixed: {
    type: Boolean,
    default: true,
  },
  /** 左侧区域 */
  left: {
    type: Function,
  },
  /** 是否展示左侧箭头 */
  leftArrow: {
    type: Boolean,
    default: false,
  },
  /** 右侧区域 */
  right: {
    type: Function,
  },
  /** 页面标题 */
  title: {
    type: [String, Function],
  },
  /** 标题文字最大长度，超出的范围使用 `...` 表示 */
  titleMaxLength: {
    type: Number,
  },
  /** 是否显示 */
  visible: {
    type: Boolean,
    default: true,
  },
  /** 样式 */
  style: {
    type: Object,
    default: () => { return {} },
  },
  /** 自定义样式 */
  customStyle: {
    type: Object,
    default: () => { return {} },
  },
})

const emits = defineEmits(['go-back', 'fail', 'complete', 'success', 'left-click', 'right-click'])

const boxStyle = ref()
uni.getSystemInfo({
  success: (res) => {
    const boxStyleList = []
    const statusBarHeight = res.statusBarHeight

    boxStyleList.push(`--l-navbar-padding-top: ${statusBarHeight}px`)

    if (uni.getMenuButtonBoundingClientRect) {
      // 场景值为1177（视频号直播间）和1175 （视频号profile页）时，小程序禁用了 wx.getMenuButtonBoundingClientRect
      const rect = uni.getMenuButtonBoundingClientRect()
      if (rect && res?.windowWidth) {
        boxStyleList.push(`--l-navbar-right: ${res.windowWidth - rect.left}px`) // 导航栏右侧小程序胶囊按钮宽度
      }
      boxStyleList.push(`--l-navbar-capsule-height: ${rect.height}px`) // 胶囊高度
      boxStyleList.push(`--l-navbar-capsule-width: ${rect.width}px`) // 胶囊宽度
      boxStyleList.push(`--l-navbar-height: ${(rect.top - statusBarHeight) * 2 + rect.height}px`)
    }

    boxStyle.value = `${boxStyleList.join(';')}`
  },
  fail: (err) => {
    console.error('navbar 获取系统信息失败', err)
  },
})
const computedStyle = computed(() => {
  return `${boxStyle.value};${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle}`
})

const showTitle = ref()
if (props.title) {
  showTitle.value = props.title.length <= props.titleMaxLength ? props.title : `${props.title.slice(0, props.titleMaxLength)}...`
}

function goBack() {
  const delta = props.delta
  emits('go-back')
  if (delta > 0) {
    uni.navigateBack({
      delta,
      fail(e) {
        emits('fail', e)
      },
      complete(e) {
        emits('complete', e)
      },
      success(e) {
        emits('success', e)
      },
    })
  }
}

function handleLeftClick(e) {
  emits('left-click', e)
}

function handleRightClick(e) {
  emits('right-click', e)
}
</script>

<!-- todo fix right -->
<template>
  <view
    class="l-navbar class l-class" :class="{
      'l-navbar--fixed': props.fixed,
      'l-navbar--relative': !props.fixed,
      'l-navbar--visible': props.visible,
      'l-navbar--hide hidden': !props.visible,
      'l-navbar--visible-animation op-100': props.visible && props.animation,
      'l-navbar--hide-animation op-0': !props.visible && props.animation,
    }" :style="computedStyle"
  >
    <view
      v-if="props.fixed"
      class="l-navbar__placeholder box-content pt-[--l-navbar-padding-top,0] relative h-[--l-navbar-height,96rpx] invisible"
    />
    <view
      class="l-navbar__content pr-[--l-navbar-right,190rpx] pt-[--l-navbar-padding-top,0] flex h-[--l-navbar-height,96rpx] w-[calc(100%-var(--l-navbar-right,190rpx))] items-center z-1 bg-[--l-navbar-bg-color,theme(bg-color-container)] color-[--l-navbar-color,theme(font-gray-1)]"
      :class="{
        'fixed top-0 left-0 z-5001': props.fixed,
        'relative': !props.fixed,
      }"
    >
      <view
        class="l-navbar__left l-class-left ml-[--l-spacer-1,24rpx] flex relative items-center box-border"
        @click="handleLeftClick"
      >
        <view v-if="props.leftArrow" class="l-navbar__btn" aria-role="button" aria-label="返回" @click="goBack">
          <l-icon name="chevron-left" class="l-navbar__left-arrow font-size-[--l-navbar-left-arrow-size,48rpx]" />
        </view>
        <slot name="left" />
        <view
          class="l-navbar__capsule l-class-capsule before:origin-0-0 flex h-[--l-navbar-capsule-height,64rpx] w-[--l-navbar-capsule-width,176rpx] items-center box-border empty:(hidden) before:(border-[2rpx_solid_var(--l-navbar-capsule-border-color,#e3e6ea)] border-rd-[calc(var(--l-navbar-capsule-border-radius,32rpx))*2] content-empty absolute h-[200%] w-[200%] left-0 top-0 z--1 box-border scale-50)"
        >
          <slot name="capsule" />
        </view>
      </view>
      <view
        class="l-navbar__center l-class-center font-size-36rpx lh-[--l-navbar-height,96rpx] text-center flex flex-1 absolute h-[--l-navbar-height,96rpx] w-[calc(100%-var(--l-navbar-right,190rpx))] overflow-hidden justify-center items-center left-[--l-navbar-right,190rpx] empty:(hidden)"
      >
        <slot name="title" />
        <text
          v-if="props.title"
          class="l-navbar__center-title l-class-title font-weight-[--l-navbar-title-font-weight,600] font-size-[--l-navbar-title-font-size,36rpx] text-ellipsis whitespace-nowrap overflow-hidden"
        >
          {{ showTitle }}
        </text>
      </view>
      <view
        v-if="props.right"
        class="l-navbar__right l-class-right flex absolute items-center bottom-0 right-0 top-0 box-border mr-[theme(spacer-1)]"
        @click="handleRightClick"
      >
        <slot name="right" />
      </view>
    </view>
  </view>
</template>

<style>
.l-navbar--visible-animation,
.l-navbar--hide-animation {
  transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>
