<script setup>
import { computed, ref, watch } from 'vue'

// Props 定义
const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 800,
  },
  indicator: {
    type: Boolean,
    default: true,
  },
  inheritColor: {
    type: Boolean,
    default: false,
  },
  layout: {
    type: String,
    default: 'horizontal',
  },
  loading: {
    type: Boolean,
    default: true,
  },
  pause: {
    type: Boolean,
    default: false,
  },
  progress: Number,
  reverse: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '40rpx',
  },
  text: {
    type: [String, Function],
    default: '',
  },
  theme: {
    type: String,
    default: 'circular',
  },
  /** 样式 */
  style: {
    type: Object,
    default: () => { return {} },
  },
  /** 自定义样式 */
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
    :style="computedStyle"
    class="l-loading inline-flex items-center justify-center font-size-[--l-loading-size,20px] color-[--l-loading-color,theme(brand-color)]"
    :class="[
      props.layout === 'vertical' ? 'flex-col' : '',
      props.layout === 'horizontal' ? 'flex-row v-top' : '',
      show ? '' : 'hidden',
    ]"
  >
    <!-- Indicator -->
    <view
      v-if="props.indicator"
      class="l-loading__spinner relative box-border h-[100%] max-h-[100%] max-w-[100%] w-[100%] animate-spin" :class="[
        props.indicator ? '' : 'hidden',
        props.reverse ? 'animate-reverse' : '',
        props.theme === 'spinner' ? 'color-[theme(font-gray-1)]' : 'color-[--l-loading-color,theme(brand-color)]',
        props.theme === 'dots' ? 'flex justify-between items-center animate-none' : '',
      ]" :style="[
        props.theme === 'spinner' ? 'animation-timing-function: steps(12)' : '',
        props.size ? { width: props.size, height: props.size } : '',
        props.inheritColor ? { color: 'inherit' } : '',
        props.duration ? `animation-duration: ${props.duration / 1000}s;` : '',
        `animation-play-state:${props.pause}` ? 'paused' : 'running',
      ]"
    >
      <!-- Different indicators based on theme -->
      <template v-if="props.theme === 'spinner'">
        <view
          v-for="n in 12" :key="n"
          class="l-loading__dot absolute left-0 top-0 h-[100%] w-[100%] before:(mx-auto my-0 block h-[25%] w-5rpx border-rd-[40%] bg-[currentColor] content-empty)"
          :style="{
            transform: `rotate(${n * 30}deg)`,
            opacity: (1 / 12) * (n - 1),
          }"
        />
      </template>
      <view
        v-else-if="props.theme === 'circular'" class="l-loading__circular h-[100%] w-[100%] border-rd-[100%]" style="background: conic-gradient(from 180deg at 50% 50%,rgba(255, 255, 255, 0) 0deg,rgba(255, 255, 255, 0) 60deg,currentColor 330deg,rgba(255, 255, 255, 0) 360deg);
mask: radial-gradient(transparent calc(50% - 1rpx), #fff 50%);
-webkit-mask: radial-gradient(transparent calc(50% - 1rpx), #fff 50%);"
      />
      <template v-else-if="props.theme === 'dots'">
        <view
          v-for="n in 3" :key="n"
          class="l-loading__dot animate-dotting h-[20%] w-[20%] animate-ease-linear animate-both animate-iteration-infinite border-rd-[50%] bg-[currentColor]"
          :style="[
            props.duration ? { animationDuration: `${props.duration / 1000}s`,
                               animationDelay: `${(props.duration * n) / 3000}s` } : '',
            { animationPlayState: props.pause ? 'paused' : 'running' },
          ]"
        />
      </template>
      <slot name="indicator" />
    </view>
    <!-- Text -->
    <view
      v-if="props.text || $slots.text"
      class="font-size-[--l-loading-text-font-size,24rpx] color-[--l-loading-text-color,inherit] line-height-[--l-loading-text-line-height,40rpx]"
      :class="[
        props.layout === 'vertical' ? 'mt-12rpx' : '',
        props.layout === 'horizontal' ? 'ml-16rpx' : '',
      ]"
    >
      <template v-if="props.text">
        {{ props.text }}
      </template>
      <slot name="text" />
      <slot />
    </view>
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
