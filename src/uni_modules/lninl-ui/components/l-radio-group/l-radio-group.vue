<script setup>
import { computed, provide, ref, watch, watchEffect } from 'vue'

// Props 定义
const props = defineProps({
  /** 复选框和内容相对位置；仅在使用 options 时生效 */
  placement: {
    type: String,
    default: 'left',
    validator(val) {
      if (!val)
        return true
      return ['left', 'right'].includes(val)
    },
  },
  /** 是否允许取消选中 */
  allowUncheck: {
    type: Boolean,
    default: false,
  },
  /** 是否开启无边框模式 */
  borderless: {
    type: Boolean,
    default: false,
  },
  /** 是否禁用全部子单选框 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 circle 表示图标为填充型图标，值为 line 表示图标为描边型图标；仅在使用 options 时生效 */
  icon: {
    type: [String, Array],
    default: 'circle',
  },
  /** 用来定义 value / label 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** HTML 元素原生属性 */
  name: {
    type: String,
    default: '',
  },
  /** 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同 */
  options: {
    type: Array,
  },
  /** 选中的值 */
  value: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /** 选中的值，非受控属性 */
  defaultValue: {
    type: [String, Number, Boolean],
  },
  /** 样式 */
  style: {
    type: String,
    default: '',
  },
  /** 自定义样式 */
  customStyle: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['update:value', 'update:modelValue', 'click-icon', 'click', 'enter', 'focus', 'blur', 'change', 'clear', 'keyboardheightchange', 'nicknamereview'])
const innerValue = ref(props.value || props.modelValue || props.defaultValue)
watch(
  () => innerValue.value,
  (value) => {
    emits('update:modelValue', value)
  },
)
watchEffect(() => {
  if (props.value !== undefined)
    innerValue.value = props.value
  if (props.modelValue !== undefined)
    innerValue.value = props.modelValue
})

const computedStyle = computed(() => {
  return `${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle}`
})

const groupOptions = computed(() => {
  return props.options?.map((option) => {
    let opt = option
    if (typeof option === 'string' || typeof option === 'number')
      opt = { value: option, label: option.toString() }

    return opt
  })
})

function handleRadioChange(val, e) {
  if (props.allowUncheck && val === innerValue.value) {
    // todo
    innerValue.value = ''
    emits('change', val, e)
  }
  else {
    innerValue.value = val
    emits('change', val, e)
  }
}
// #ifndef MP-TOUTIAO || MP-LARK
provide('rootGroupProps', props)
provide('rootGroupValue', innerValue)
provide('rootGroupChange', handleRadioChange)
// #endif
// #ifdef MP-TOUTIAO || MP-LARK
onMounted(() => {
  // 头条和飞书的provide/inject有bug，需要在onMounted中进行
  provide('rootGroupProps', props)
  provide('rootGroupValue', innerValue)
  provide('rootGroupChange', handleRadioChange)
})
// #endif
</script>

<template>
  <view :style="computedStyle" class="class l-class l-radio-group" aria-role="radiogroup">
    <slot />
    <template v-if="props.options">
      <l-radio
        v-for="(item, index) in groupOptions" :key="index"
        class="l-radio-option"
        :block="item.block || true"
        :label="item.label || ''"
        :value="item.value"
        :checked="item.checked || false"
        :content="item.content || ''"
        :allow-uncheck="item.allowUncheck || false"
        :content-disabled="item.contentDisabled || false"
        :readonly="item.readonly || false"
        :disabled="item.disabled || props.disabled || false"
        :icon="props.icon"
        :placement="item.placement || 'left'"
        :max-content-row="item.maxContentRow || 5"
        :max-label-row="item.maxLabelRow || 3"
        :name="props.name"
        :borderless="props.borderless"
        @change="handleRadioChange"
      />
    </template>
  </view>
</template>
