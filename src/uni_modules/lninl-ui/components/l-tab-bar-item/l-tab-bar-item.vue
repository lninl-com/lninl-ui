<script setup>
import { computed, inject, onMounted, ref, watch } from 'vue'

const props = defineProps({
  /** 图标右上角提示信息 */
  badgeProps: {
    type: Object,
  },
  /** 图标名称 */
  icon: {
    type: [String, Function],
  },
  /** 二级菜单 */
  subTabBar: {
    type: Array,
  },
  /** 标识符 */
  value: {
    type: [String, Number],
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

let split = ref()
let shape = ref()
let theme = ref()
let defaultIndex = ref()
let activeValue = ref()
let itemCount = ref()
let updateChild = () => {};

// #ifndef MP-TOUTIAO || MP-LARK
({ split, shape, theme, defaultIndex, activeValue, itemCount, updateChild } = inject('tab-bar'))
// #endif

// #ifdef MP-TOUTIAO || MP-LARK
// 头条和飞书的provide/inject有bug，需要在onMounted中进行
onMounted(() => {
  const parent = inject('tab-bar')
  split.value = parent.split.value
  shape.value = parent.shape.value
  theme.value = parent.theme.value
  defaultIndex.value = parent.defaultIndex.value
  activeValue.value = parent.activeValue.value
  watch(parent.activeValue, (newValue, _oldValue) => {
    activeValue.value = newValue
  })
  itemCount.value = parent.itemCount.value
  updateChild = parent.updateChild
})
// #endif

const badgeProps = computed(() => props.badgeProps)

function getBadgeAriaLabel() {
  const options = badgeProps.value
  if (options?.dot || options?.count) {
    const maxCount = options.maxCount || 99
    if (options.dot)
      return '有新的消息'

    if (options.count === '...')
      return '有很多消息'

    const count = Number(options.count)
    if (Number.isNaN(count))
      return `${options.count}`

    const str1 = `有${maxCount}+条消息`
    const str2 = `有${options.count}条消息`
    return `${Number(options.count) > maxCount ? str1 : str2}`
  }
  return 'TabBar'
}
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-vars
const ariaLabel = ref(getBadgeAriaLabel())

const iconOnly = ref(false)

const textNode = ref()
watch(textNode, () => {
  const height = textNode.value?.clientHeight
  iconOnly.value = Number(height) === 0
})

const hasSubTabBar = computed(() => {
  return Array.isArray(props.subTabBar) && props.subTabBar.length > 0
})

const currentName = props.value ? props.value : defaultIndex.value++
const isChecked = computed(() => {
  if (hasSubTabBar.value && Array.isArray(activeValue.value))
    return activeValue.value.includes(currentName)

  return currentName === activeValue.value
})

const isSpread = ref(false)
watch(isChecked, (newValue) => {
  if (!newValue)
    isSpread.value = false
})

const crowded = ref(false)
watch(itemCount, () => {
  if (isChecked.value) {
    crowded.value = itemCount.value > 3
    isSpread.value = true
  }
})

const isToggleCurrent = computed(() => Array.isArray(activeValue.value) && activeValue.value[0] === currentName)

function toggle() {
  if (hasSubTabBar.value) {
    isSpread.value = !isSpread.value
    if (!isToggleCurrent.value) {
      updateChild([currentName])
      return
    }
  }
  updateChild(currentName)
}

const hasChildren = computed(() => {
  return Number(props.subTabBar?.length) > 0
})

function selectChild(childName) {
  if (!(Array.isArray(activeValue.value) && activeValue.value[1] === childName))
    updateChild([currentName, childName])

  isSpread.value = false
}
</script>

<template>
  <view
    class="class l-class l-tab-bar-item px-24rpx py-0 mx-0 my-16rpx flex-1 relative h-[--l-tab-bar-height,80rpx] select-none box-border bg-[--l-tab-bar-bg-color,theme(bg-color-container)]" :class="{
      'l-tab-bar-item--split before:(top-0 bottom-0 left-0 b-l-1px b-l-solid b-l-color-[--l-tab-bar-border-color,theme(border-color)] scale-x-50 absolute box-border content-empty pointer-events-none) before:(top-16rpx bottom-16rpx)':
        split,
      'l-tab-bar-item--text-only font-size-32rpx': !props.icon,
      'l-tab-bar-item--crowded px-16rpx py-0': crowded,
      'l-tab-bar-item--${shape} b-rd-99px': shape === 'round',
    }"
  >
    <view
      class="l-tab-bar-item__content b-rd-16rpx flex flex-col h-100% w-100% justify-center items-center" :class="{
        'l-tab-bar-item__content--tag b-rd-99px': theme === 'tag',
        'l-tab-bar-item__content--tag bg-[--l-tab-bar-active-bg,theme(brand-color-light)]': theme === 'tag' && isChecked,
        'l-tab-bar-item__content color-[--l-tab-bar-color,theme(text-color-primary)]': !isChecked,
        'l-tab-bar-item__content--checked fw-600 color-[--l-tab-bar-active-color,theme(brand-color)]': isChecked,
      }"
      :aria-selected="(!hasChildren || !isSpread) && isChecked"
      :aria-expanded="hasChildren && isSpread"
      :role="hasChildren ? 'button' : 'tab'"
      @click="toggle"
    >
      <view v-if="!!props.icon" class="l-tab-bar-item__icon" :style="{ height: `${iconOnly ? 48 : 40}rpx` }">
        <l-badge
          v-if="badgeProps?.dot || badgeProps?.count"
          :count="badgeProps?.count || 0"
          :max-count="badgeProps?.maxCount || 99"
          :dot="badgeProps?.dot || false"
          :content="badgeProps?.content || ''"
          :size="badgeProps?.size || 'medium'"
          :offset="badgeProps?.offset || [0, 0]"
        >
          <l-icon :aria-hidden="!iconOnly" :size="iconOnly ? 24 : 20" :name="props.icon" />
        </l-badge>
        <l-icon v-else :aria-hidden="!iconOnly" :size="iconOnly ? 24 : 20" :name="props.icon" />
      </view>
      <view
        ref="textNode"
        class="l-tab-bar-item__text flex items-center" :class="{
          'l-tab-bar-item__text--small text-20rpx lh-32rpx': !!props.icon,
        }"
      >
        <l-icon v-if="hasChildren && !props.icon" size="16" name="view-list" class="l-tab-bar-item__icon-menu mr-8rpx" />
        <slot />
      </view>
    </view>
    <view
      v-if="hasChildren && isSpread"
      role="menu"
      class="l-tab-bar-item__spread b-rd-12rpx absolute w-86% left-7% top-0 z-1 translate-x-0 translate-y-[calc(-100%-32rpx)] translate-z-0 transform-gpu before:(block b-16rpx b-t-16rpx b-transparent b-solid b-t-solid content-empty absolute h-0 w-0 bottom-0 left-50% translate-x--50% translate-y-30rpx translate-z-0 transform-gpu b-t-color-[--l-tab-bar-bg-color,theme(bg-color-container)]) bg-[--l-tab-bar-bg-color,theme(bg-color-container)] color-[--l-tab-bar-color,theme(text-color-primary)] shadow-[--l-tab-bar-spread-shadow,theme(shadow-3)]"
    >
      <view
        v-for="(child, index) in subTabBar"
        :key="index"
        role="tab"
        class="l-tab-bar-item__spread-item flex flex-col relative h-96rpx w-100% justify-start items-center active:(bg-[--l-tab-bar-hover-bg-color,theme(border-color)])"
        @click="selectChild(child.value || index)"
      >
        <view
          v-if="index !== 0"
          class="l-tab-bar-item__spread-item-split content-empty h-2rpx w-80% pointer-events-none box-border translate-y-0.5 bg-[--l-tab-bar-spread-border-color,theme(border-color)]"
        />
        <view class="l-tab-bar-item__spread-item-text pt-24rpx">
          {{ child.label }}
        </view>
      </view>
    </view>
  </view>
</template>

<style>
:host {
  flex: 1;
}
</style>
