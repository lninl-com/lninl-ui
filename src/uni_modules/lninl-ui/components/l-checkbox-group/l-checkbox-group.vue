<script setup>
import { computed, getCurrentInstance, provide, ref, useSlots, watch, watchEffect } from 'vue'

// Props 定义
const props = defineProps({
  /** 是否开启无边框模式 */
  borderless: {
    type: Boolean,
    default: false,
  },
  /** 是否禁用组件，默认为 false。CheckboxGroup.disabled 优先级低于 Checkbox.disabled */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 支持最多选中的数量 */
  max: {
    type: Number,
    default: undefined,
  },
  /** 统一设置内部复选框 HTML 属性 */
  name: {
    type: String,
    default: '',
  },
  /** 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」 */
  options: {
    type: Array,
  },
  /** 选中的值 */
  value: {
    type: Array,
    default: undefined,
  },
  modelValue: {
    type: Array,
    default: undefined,
  },
  /** 选中的值，非受控属性 */
  defaultValue: {
    type: Array,
    default: () => [],
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
const emits = defineEmits(['update:value', 'update:modelValue', 'change'])
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

const optionList = ref()
watch(props.options, (options) => {
  if (!options)
    return []
  optionList.value = options.map((item) => {
    let r = {}
    if (typeof item !== 'object') {
      r = { label: String(item), value: item }
    }
    else {
      r = { ...item }
      r.disabled = r.disabled === undefined ? props.disabled : r.disabled
    }
    return r
  })
}, { immediate: true })

const checkedOptionList = []
// #ifdef WEB
const slots = useSlots()
if (slots.default) {
  slots.default().forEach((child) => {
    if (child.children) {
      const arr = []
      child.children.forEach((child1) => {
        if (child1.type.__name.includes('checkbox')) {
          if (child1?.props['check-all'] === '' || child1?.props['check-all'] === true)
            child1.props.checkAll = true
        }
        child1.props && arr.push(option)
      })
    }
  })
}
// #endif
// #ifndef WEB
getCurrentInstance().ctx.$children.forEach((child) => {
  if (child.$.type.__name.includes('checkbox'))
    count++
})
// #endif

const checkedSet = computed(() => {
  if (isArray(innerValue.value))
    return new Set(innerValue.value)

  return new Set()
})
const checkAllStatus = setCheckAllStatus(optionList, innerValue, checkedSet)
const maxExceeded = computed(() => {
  return props.max !== undefined && innerValue.value.length === props.max
})

function onCheckedChange(p) {
  const { checked, checkAll, e } = p
  if (checkAll)
    onCheckAllChange(checked, { e })
  else
    handleCheckboxChange(p)
}

const computedStyle = computed(() => {
  return `${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle}`
})

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
  <view class="class l-class l-checkbox-group" :style="computedStyle">
    <slot v-if="!(options && options.length)" />
    <template v-else>
      <l-checkbox
        v-for="(item, idx) in optionList"
        :key="idx"
        :name="item.name || ''"
        :label="item.label || item.text || ''"
        :value="item.value"
        :check-all="item.checkAll"
        :block="item.block || true"
        :checked="item.checked || false"
        :content="item.content || ''"
        :content-disabled="item.contentDisabled || false"
        :icon="item.icon || 'circle'"
        :indeterminate="item.indeterminate || false"
        :disabled="item.disabled"
        :max-content-row="item.maxContentRow || 5"
        :max-label-row="item.maxLabelRow || 3"
        :borderless="item.borderless"
        :readonly="item.readonly || false"
        :placement="item.placement || 'left'"
        @change="handleInnerChildChange"
      />
    </template>
  </view>
</template>
