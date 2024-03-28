<script setup>
import { computed, getCurrentInstance, ref, toRefs, watch } from 'vue'
const props = defineProps({
  /** 子元素 */
  content: {
    type: [String, Function],
  },
  /** 子元素，同 content */
  default: {
    type: [String, Function],
  },
  /** 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 */
  delay: {
    type: Number,
    default: 0,
  },
  /** 加载动画执行完成一次的时间，单位：毫秒 */
  duration: {
    type: Number,
    default: 800,
  },
  /** 加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符 */
  indicator: {
    type: [Boolean, Function],
    default: true,
  },
  /** 是否继承父元素颜色 */
  inheritColor: Boolean,
  /** 对齐方式 */
  layout: {
    type: String,
    default: 'horizontal',
    validator(val) {
      if (!val)
        return true
      return ['horizontal', 'vertical'].includes(val)
    },
  },
  /** 是否处于加载状态 */
  loading: {
    type: Boolean,
    default: true,
  },
  /** 是否暂停动画 */
  pause: Boolean,
  /** 加载动画是否反向 */
  reverse: Boolean,
  /** 尺寸，示例：20px */
  size: {
    type: String,
    default: '20px',
  },
  /** 加载提示文案 */
  text: {
    type: [String, Function],
  },
  /** 加载组件类型 */
  theme: {
    type: String,
    default: 'circular',
    validator(val) {
      if (!val)
        return true
      return ['circular', 'spinner', 'dots'].includes(val)
    },
  },
})
const internalInstance = getCurrentInstance()
const delayShowLoading = ref(false)
const { pause } = toRefs(props)

function countDelay() {
  delayShowLoading.value = false
  const timer = setTimeout(() => {
    delayShowLoading.value = true
    clearTimeout(timer)
  }, props.delay)
}

const realLoading = computed(() => (!props.delay || delayShowLoading.value) && props.loading)

watch(
  () => props.loading,
  (value) => {
    if (value)
      props.delay && countDelay()
  },
  {
    immediate: true,
  },
)

const rootClass = computed(() => [name, { [`${name}--vertical`]: props.layout === 'vertical' }])

const textClass = computed(() => [
  `${name}__text`,
  {
    [`${name}__text--only`]: !props.indicator,
  },
])

const textContent = computed(() => renderTNode(internalInstance, 'text'))

const defaultContent = computed(() => renderContent(internalInstance, 'default', 'content'))

const rootStyle = computed(() => {
  const style = []
  if (props.inheritColor)
    style.push('color: inherit')

  if (props.size)
    style.push(`font-size: ${props.size};`)

  return style.join(';')
})

const defaultIndicator = {
  circular: GradientIcon,
  spinner: SpinnerIcon,
}

const dotsLoading = computed(() => {
  setBlockTracking(-1)
  const node = h(
    'div',
    {
      class: `${name}__dots`,
      style: {
        animationPlayState: props.pause ? 'paused' : '',
        animationDirection: props.reverse ? 'reverse' : '',
        animationDuration: `${props.duration}ms`,
        width: props.size,
        height: props.size,
      },
    },
    [
      Array.from({ length: 3 }).map((val, i) => {
        return h('div', {
          class: `${name}__dot`,
          style: props.duration
            ? `animation-duration: ${props.duration / 1000}s; animation-delay: ${(props.duration * i) / 3000}s`
            : '',
        })
      }),
    ],
  )
  setBlockTracking(1)
  return node
})

const defaultLoading = computed(() => {
  setBlockTracking(-1)
  const node = h(defaultIndicator[props.theme || 'circular'], {
    style: {
      animationPlayState: props.pause ? 'paused' : '',
      animationDirection: props.reverse ? 'reverse' : '',
      animationDuration: `${props.duration}ms`,
      width: props.size,
      height: props.size,
    },
  })
  setBlockTracking(1)
  return node
})

const indicatorContent = computed(() => {
  return renderTNode(internalInstance, 'indicator', {
    defaultNode: props.theme === 'dots' ? dotsLoading.value : defaultLoading.value,
  })
})
</script>

<template>
  <div :class="rootClass" :style="rootStyle">
    <t-node v-if="indicator && realLoading && indicatorContent" :content="indicatorContent" />
    <span
      v-if="textContent && realLoading" :class="[
        `${name}__text`,
        {
          [`${name}__text--only`]: !props.indicator,
        },
      ]"
    >
      <t-node :content="textContent" />
    </span>
    <t-node :content="defaultContent" />
  </div>
</template>

<style scoped></style>
