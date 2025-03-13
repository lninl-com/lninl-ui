<script setup>
import { computed, inject, ref, watch } from 'vue'

// Props 定义
const props = defineProps({
  /** 复选框和内容相对位置 */
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
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    default: true,
  },
  /** 是否选中 */
  checked: {
    type: Boolean,
    default: false,
  },
  /** 是否选中，非受控属性 */
  defaultChecked: {
    type: Boolean,
    default: false,
  },
  /** 单选内容 */
  content: {
    type: [String, Function],
  },
  /** 是否禁用组件内容（content）触发选中 */
  contentDisabled: {
    type: Boolean,
    default: false,
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: false,
  },
  /** 是否为禁用态 */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /** 组件类名，分别用于设置 组件外层、单选图标、主文案、内容 等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 circle 表示图标为填充型图标，值为 line 表示图标为描边型图标 */
  icon: {
    type: [String, Array],
    default: 'circle',
  },
  /** 主文案 */
  label: {
    type: [String, Function],
  },
  /** 内容最大行数限制 */
  maxContentRow: {
    type: Number,
    default: 5,
  },
  /** 主文案最大行数限制 */
  maxLabelRow: {
    type: Number,
    default: 3,
  },
  /** HTML 元素原生属性 */
  name: {
    type: String,
    default: '',
  },
  /** 单选按钮的值 */
  value: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /** 是否选中。支持语法糖 v-model 或 v-model:checked */
  checked: {
    type: Boolean,
    default: false,
  },
  /** 是否选中。支持语法糖 v-model 或 v-model:checked */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /** 是否选中。非受控属性 */
  defaultChecked: {
    type: Boolean,
    default: false,
  },
  /** 样式 */
  style: {
    type: String,
    default: '',
  },
  /** 类 */
  class: {
    type: String,
    default: '',
  },
  /** 自定义样式 */
  customStyle: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['update:checked', 'update:modelValue', 'click', 'enter', 'focus', 'blur', 'change', 'clear'])

const rootGroupProps = inject('rootGroupProps', {})
const rootGroupValue = inject('rootGroupValue', {})
const rootGroupChange = inject('rootGroupChange', () => { })

const innerValue = ref(props.checked || props.modelValue || props.defaultChecked)
watch(() => innerValue.value, (value) => {
  emits('update:modelValue', value)
  emits('update:checked', value)
})
watch(() => props.checked, (value) => {
  innerValue.value = value
})
watch(() => props.modelValue, (value) => {
  innerValue.value = value
})

const checked = computed(() => innerValue.value || (props.value && props.value === rootGroupValue.value))
const icon = computed(() => {
  const iconIndex = checked.value ? 0 : 1
  if (rootGroupProps && rootGroupProps.icon?.length === 2)
    return rootGroupProps.icon[iconIndex]
  else if (props.icon?.length === 2)
    return props.icon[iconIndex]

  return props.icon || rootGroupProps.icon
})

const computedStyle = computed(() => {
  return `${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle}`
})

const disabled = computed(() => {
  if (props.disabled === undefined)
    return rootGroupProps.disabled
  return props.disabled
})
const borderless = computed(() => {
  if (props.borderless == null)
    return rootGroupProps.borderless
  return props.borderless
})
const placement = computed(() => {
  if (props.placement == null)
    return rootGroupProps.placement
  return props.placement || 'left'
})
// input props attribute
const inputProps = computed(() => ({
  name: rootGroupProps.value?.name || props.name,
  checked: checked.value,
  disabled: disabled.value,
  value: props.value,
}))

function radioContentChange(e) {
  if (props.contentDisabled)
    return

  radioOrgChange(e)
}

function radioOrgChange(e) {
  if (disabled.value)
    return

  if (typeof rootGroupChange === 'function' && rootGroupChange.length !== 0) {
    rootGroupChange(props.allowUncheck && checked.value ? '' : props.value, e)
  }
  else {
    if (!props.allowUncheck)
      return

    innerValue.value = !checked.value
  }
}
</script>

<template>
  <view
    :style="computedStyle"
    class="class l-class l-radio relative v-middle font-size-[--l-radio-font-size,32rpx] bg-[--l-radio-bg-color,theme(bg-color-container)] focus:(outline-0)"
    :class="{
      'l-radio--left': placement === 'left',
      'l-radio--right flex-row-reverse': placement === 'right',
      'l-radio--block flex p-[--l-radio-vertical-padding,32rpx]': block,
      'inline-flex': !block,
    }" :disabled="disabled" aria-role="radio" :aria-checked="checked" :aria-label="props.label"
    :aria-disabled="disabled" :tabindex="props.tabindex" @tap="radioContentChange"
  >
    <!-- <input type="radio" class="l-radio__original" v-bind="inputProps"> -->
    <view
      class="l-radio__icon l-class-icon relative mt-[calc((var(--l-radio-label-line-height,48rpx)-var(--l-radio-icon-size,48rpx))/2)] h-[--l-radio-icon-size,48rpx] w-[--l-radio-icon-size,48rpx] overflow-hidden font-size-[--l-radio-icon-size,48rpx] empty:hidden"
      :class="[
        {
          'l-radio__icon--right': placement === 'right',
          'l-radio__icon--left mr-16rpx': placement === 'left',
          'l-radio__icon--disabled cursor-not-allowed c-[--l-radio-icon-disabled-color,theme(brand-color-disabled)]': disabled,
        },
        checked ? 'l-radio__icon--checked c-[--l-radio-icon-checked-color,theme(brand-color)]' : 'c-[--l-radio-icon-color,theme(component-border)]',
      ]"
    >
      <slot v-if="props.icon === 'slot'" name="icon" />
      <view
        v-else-if="rootGroupProps.icon?.length === 2 || props.icon?.length === 2"
        class="l-radio__image lh-[--l-radio-icon-size,48rpx]"
      >
        <image
          :src="icon" class="l-radio-icon__image h-[--l-radio-icon-size,48rpx] w-[--l-radio-icon-size,48rpx] v-sub"
          webp
        />
      </view>
      <template v-else>
        <l-icon
          v-if="checked && (icon === 'circle' || icon === 'line')"
          :name="props.icon === 'circle' ? 'check-circle-filled' : 'check'" class="l-radio__icon-wrap"
        />
        <view
          v-if="checked && icon === 'dot'"
          class="l-radio__icon-dot absolute left-[50%] top-[50%] box-border h-84rpx w-84rpx flex translate-[-50%,-50%] scale-50 items-center justify-center b-3px rd-[50%] b-solid after:(block h-48rpx w-48rpx rd-[50%] content-empty bg-[--l-radio-icon-checked-color,theme(brand-color)]) b-[--l-radio-icon-checked-color,theme(brand-color)]"
          :class="{ 'l-radio__icon-dot--disabled b-[--l-radio-icon-disabled-color,theme(brand-color-disabled)] after:(bg-[--l-radio-icon-disabled-color,theme(brand-color-disabled)])': disabled }"
        />
        <view
          v-if="!checked && (icon === 'circle' || icon === 'dot')"
          class="l-radio__icon-circle box-border h-[--l-radio-icon-size,48rpx] w-[--l-radio-icon-size,48rpx] after:(absolute left-[50%] top-[50%] box-border h-[calc(200%-6rpx)] w-[calc(200%-6rpx)] translate-[-50%,-50%] scale-50 b-3px rd-[50%] b-solid content-empty b-[--l-radio-icon-color,theme(component-border)])"
          :class="{ 'l-radio__icon-circle--disabled after:bg-[--l-radio-icon-disabled-bg-color,theme(bg-color-component-disabled)]': disabled }"
        />
        <!-- line && unchecked 为空 需要展位元素 -->
        <view v-if="!checked && icon === 'line'" class="placeholder" />
      </template>
    </view>

    <view class="l-radio__content flex-1 empty:hidden" data-target="text" @tap="radioContentChange">
      <view
        class="l-class-label l-radio__title -webkit-box-orient-[vertical] display-[-webkit-box] overflow-hidden lh-[--l-radio-label-line-height,48rpx]"
        :class="{
          'l-radio__title--checked c-[--l-radio-label-checked-color,theme(font-gray-1)]': checked,
          'c-[--l-radio-label-color,theme(font-gray-1)] ': !checked,
          'l-radio__title--disabled cursor-not-allowed c-[--l-radio-label-disabled-color,theme(font-gray-4)]': disabled,
        }" :style="`-webkit-line-clamp:${props.maxLabelRow}`"
      >
        {{ props.label }}
        <slot />
        <slot name="label" />
      </view>

      <view
        class="l-radio__description l-class-content display-[-webkit-box] overflow-hidden font-size-[--l-radio-content-font-size,28rpx] lh-[--l-radio-content-line-height,44rpx] invalid:mt-8rpx empty:hidden"
        :class="{
          'l-radio__description--checked c-[--l-radio-content-checked-color,theme(font-gray-2)]': checked && !disabled,
          'c-[--l-radio-content-color,theme(font-gray-2)] ': !checked,
          'l-radio__description--disabled cursor-not-allowed c-[--l-radio-content-disabled-color,theme(font-gray-4)]': disabled,
        }" :style="`-webkit-box-orient:vertical;-webkit-line-clamp:${props.maxLabelRow}`"
      >
        {{ props.content }}
        <slot name="content" />
      </view>
    </view>

    <view
      v-if="!borderless"
      class="l-radio__border l-class-border absolute bottom-0 left-96rpx right-0 h-1px scale-y-50 bg-[--l-radio-border-color,theme(component-stroke)]"
      :class="{
        'l-radio__border--left': placement === 'left',
        'l-radio__border--right left-32rpx': placement === 'right',
      }"
    />
  </view>
</template>
