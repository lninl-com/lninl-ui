<script setup>
import { computed, getCurrentInstance, onMounted, provide, ref, toRefs, useSlots, watch, watchEffect } from 'vue'

/**
 * TabBar 标签栏
 * @description 用于在不同功能模块之间进行快速切换，位于页面底部。注意：头条和飞书的:host的写法不生效，需要的在子组件中添加{flex:1}的样式 <l-tab-bar-item style="flex: 1;" .../> 或 <l-tab-bar-item class="flex-1" .../>
 * @tutorial /components/tab-bar
 * @example <l-tab-bar :value="value2" :placeholder="false" @change="name => value2 = name" :fixed="false" :safeAreaInsetBottom="false"><l-tab-bar-item class="flex-1" text="首页" icon="home" dot ></l-tab-bar-item></l-tab-bar>
 */
const props = defineProps({
  /** 是否显示外边框 */
  bordered: {
    type: Boolean,
    default: true,
  },
  /** 是否固定在底部 */
  fixed: {
    type: Boolean,
    default: true,
  },
  /** 是否为 iPhoneX 留出底部安全距离 */
  safeAreaInsetBottom: {
    type: Boolean,
    default: true,
  },
  /** 标签栏的形状。可选项:normal/round */
  shape: {
    type: String,
    default: 'normal',
    required: false,
    validator(value) {
      return ['normal', 'round'].includes(value)
    },
  },
  /** 是否需要分割线 */
  split: {
    type: Boolean,
    default: true,
  },
  /** 选项风格。可选项:normal/tag */
  theme: {
    type: String,
    default: 'normal',
    validator(value) {
      return ['normal', 'tag'].includes(value)
    },
  },
  /** 当前选中标签的索引 */
  value: {
    type: [String, Number, Array],
    default: undefined,
  },
  modelValue: {
    type: [String, Number, Array],
    default: undefined,
  },
  /** 当前选中标签的索引，非受控属性 */
  defaultValue: {
    type: [String, Number, Array],
    default: undefined,
  },
  onChange: {
    type: Function,
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
/** 选中标签切换时触发 */
const emits = defineEmits(['update:value', 'update:modelValue', 'change'])
const defaultIndex = ref(-1)
const itemCount = ref(0)

const activeValue = ref(props.value || props.modelValue || props.defaultValue)
watch(
  () => activeValue.value,
  (value) => {
    if (props.value !== undefined) {
      emits('update:value', value)
    }
    if (props.modelValue !== undefined) {
      emits('update:modelValue', value)
    }
    emits('change', value)
  },
)
watchEffect(() => {
  if (props.value !== undefined)
    activeValue.value = props.value
  if (props.modelValue !== undefined)
    activeValue.value = props.modelValue
})

function updateChild(currentValue) {
  activeValue.value = currentValue
}
// updateChild(props.value)
const computedStyle = computed(() => {
  return `${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle}`
})
// #ifndef MP-TOUTIAO || MP-LARK
provide('tab-bar', {
  ...toRefs(props),
  defaultIndex,
  activeValue,
  itemCount,
  updateChild,
})
// #endif
onMounted(() => {
  // #ifdef MP-TOUTIAO || MP-LARK
  // 头条和飞书的provide/inject有bug，需要在onMounted中进行
  provide('tab-bar', {
    ...toRefs(props),
    defaultIndex,
    activeValue,
    itemCount,
    updateChild,
  })
  // #endif

  let count = 0
  // #ifdef WEB
  useSlots()
    .default()
    .forEach((child) => {
      if (child.children) {
        child.children.forEach((child1) => {
          if (child1.type.__name.includes('tab-bar-item'))
            count++
        })
      }
    })
  // #endif
  // #ifndef WEB
  getCurrentInstance().ctx.$children.forEach((child) => {
    if (child.$.type.__name.includes('tab-bar-item'))
      count++
  })
  // #endif

  itemCount.value = count
})
</script>

<template>
  <view
    :style="computedStyle"
    class="class l-class l-tab-bar fz-16px flex flex-nowrap items-center box-border bg-[--l-tab-bar-bg-color,theme(bg-color-container)]"
    :class="{
      'before:(z-1) before:(absolute box-border content-empty pointer-events-none) before:(scale-y-50 origin-[0_0] right-0 left-0 top-0 border-t-1px border-t-solid b-t-color-[--l-tab-bar-border-color,theme(border-color)])':
        props.shape === 'normal' && props.bordered,
      'fixed left-0 right-0': props.fixed,
      'relative': !props.fixed,
      'bottom-0 ': !(props.shape === 'round' && props.fixed && props.safeAreaInsetBottom),
      'bottom-[constant(safe-area-inset-bottom))] bottom-[env(safe-area-inset-bottom)] ': props.shape === 'round' && props.fixed && props.safeAreaInsetBottom,
      'pb-[constant(safe-area-inset-bottom)] pb-[env(safe-area-inset-bottom)]': props.shape === 'normal' && props.safeAreaInsetBottom,
      'ml-32rpx mr-32rpx rd-999px shadow-[--l-tab-bar-round-shadow,theme(shadow-3)]': props.shape === 'round',
    }" role="tablist"
  >
    <slot />
  </view>
</template>
