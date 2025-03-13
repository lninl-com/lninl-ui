<script setup>
import { computed, ref, watch } from 'vue'

// Props 定义
const props = defineProps({
  /** 遮罩层的背景色 */
  backgroundColor: {
    type: String,
    default: '',
  },
  /** 背景色过渡时间，单位毫秒 */
  duration: {
    type: Number,
    default: 300,
  },
  /** 是否阻止背景滚动，阻止时蒙层里的内容也将无法滚动 */
  preventScrollThrough: {
    type: Boolean,
    default: true,
  },
  /** 是否展示 */
  visible: Boolean,
  /** 遮罩的层级 */
  zIndex: {
    type: Number,
    default: 1000,
  },
  /** 样式 */
  style: {
    type: Object,
    default: () => { return {} },
  },
  /** 遮罩层自定义样式。优先级低于其他属性 */
  customStyle: {
    type: [Object, String],
    default: () => { return '' },
  },
})

const show = ref(true)
function countDelay() {
  show.value = false
  const timer = setTimeout(() => {
    show.value = true
    clearTimeout(timer)
  }, props.delay)
}
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
const computedStyle = computed(() => {
  return `${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle};${!props.text ? `width: ${props.size};height: ${props.size};` : ''}${props.inheritColor ? 'color: inherit;' : ''}`
})
</script>

<template>
  <view
    v-if="{{realVisible && preventScrollThrough}}"
    class="class l-overlay {{transitionClass}}"
    style="{{_._style(['--td-overlay-transition-duration:' + duration + 'ms', 'z-index:' + _zIndex, 'top:' + distanceTop + 'px', computedStyle, style, customStyle])}}"
    catchtouchmove="noop"
    bind:transitionend="onTransitionEnd"
    aria-role="{{ ariaRole || 'button' }}"
    aria-label="{{ ariaLabel || '关闭' }}"
    @click="handleClick"
  >
    <slot />
  </view>
  <view
    v-else-if="{{realVisible}}"
    class="{{transitionClass}} class {{prefix}}-overlay"
    style="{{_._style(['z-index:' + _zIndex, computedStyle, style, customStyle])}}"
    aria-role="{{ ariaRole || 'button' }}"
    aria-label="{{ ariaLabel || '关闭' }}"
    @click="handleClick"
    @transitionend="onTransitionEnd"
  >
    <slot />
  </view>
</template>

<style scoped>
.animate-dotting {
  animation-name: dotting;
}

@keyframes dotting {
  0% {
    opacity: 0.15;
  }

  1%,
  33% {
    opacity: 0.8;
  }

  34%,
  100% {
    opacity: 0.15;
  }
}
</style>
