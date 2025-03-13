<script setup>
import { computed, ref, watch, watchEffect } from 'vue'

// Props 定义
const props = defineProps({
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: {
    type: Boolean,
    default: true,
  },
  /** 自动聚焦，拉起键盘 */
  autofocus: {
    type: Boolean,
    default: false,
  },
  /** 是否自动增高，值为 autosize 时，style.height 不生效 */
  autosize: {
    type: [Boolean, Object],
    default: false,
  },
  /** 超出 `maxlength` 或 `maxcharacter` 之后是否允许继续输入 */
  allowInputOverMax: {
    type: Boolean,
    default: false,
  },
  /** 点击键盘右下角按钮时是否保持键盘不收起点 */
  confirmHold: {
    type: Boolean,
    default: false,
  },
  /** 设置键盘右下角按钮的文字，仅在 type='text'时生效 */
  confirmType: {
    type: String,
    default: 'return',
  },
  /** 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离 */
  cursorSpacing: {
    type: Number,
    default: 0,
  },
  /** 是否禁用文本框 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 组件类名，分别用于表示组件外层元素、输入框、占位符、标签名等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 自动聚焦 */
  focus: {
    type: Boolean,
    default: false,
  },
  /** 左侧文本 */
  label: {
    type: String,
  },
  /** 名称，HTML 元素原生属性 */
  name: {
    type: String,
    default: '',
  },
  /** 标题输入框布局方式 */
  layout: {
    type: String,
    default: 'horizontal',
    validator(val) {
      if (!val)
        return true
      return ['vertical', 'horizontal'].includes(val)
    },
  },
  /** 如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true */
  fixed: {
    type: Boolean,
    default: false,
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的字符个数。默认为 -1，不限制输入长度 */
  maxlength: {
    type: Number,
    default: -1,
  },
  /** 指定 placeholder 的样式，目前仅支持 color ,font-size和font-weight */
  placeholder: {
    type: String,
    default: undefined,
  },
  /** 占位符样式 */
  placeholderStyle: {
    type: String,
    default: '',
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: false,
  },
  /** 输入框的值 */
  value: {
    type: [String, Number],
    default: undefined,
  },
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  /** 输入框的值，非受控属性 */
  defaultValue: {
    type: [String, Number],
    default: '',
  },
  /** 是否显示外边框 */
  bordered: {
    type: Boolean,
    default: false,
  },
  /**
   * 显示文本计数器，如 0/140。当 `maxlength < 0 && maxcharacter < 0` 成立时， indicator无效
   */
  indicator: {
    type: Boolean,
    default: false,
  },
  /** 指定focus时的光标位置 */
  cursor: {
    type: Number,
    default: -1,
  },
  /** 是否显示键盘上方带有”完成“按钮那一栏 */
  showConfirmBar: {
    type: Boolean,
    default: true,
  },
  /** 光标起始位置，自动聚集时有效，需与selection-end搭配使用 */
  selectionStart: {
    type: Number,
    default: -1,
  },
  /** 光标结束位置，自动聚集时有效，需与selection-start搭配使用 */
  selectionEnd: {
    type: Number,
    default: -1,
  },
  /** 是否去掉 iOS 下的默认内边距 */
  disableDefaultPadding: {
    type: Boolean,
    default: false,
  },
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard: {
    type: Boolean,
    default: false,
  },
  /** 类 */
  class: {
    type: String,
    default: '',
  },
  /** 样式 */
  style: {
    type: [String, Object],
    default: '',
  },
  /** 自定义样式 */
  customStyle: {
    type: [Object, String],
    default: () => { return '' },
  },
})
const emits = defineEmits(['update:value', 'update:modelValue', 'click-icon', 'click', 'enter', 'focus', 'blur', 'change', 'clear', 'keyboardheightchange', 'nicknamereview', 'linechange', 'line-change'])

const innerValueLength = ref(0)
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
const focused = ref(props.focus || props.autoFocus)
const holdKeyboard = ref(props.holdKeyboard)

const computedStyle = computed(() => {
  return `${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle}`
})

function handleClear(e) {
  innerValue.value = ''
  focused.value = true
  holdKeyboard.value = true // 点击清除按钮时，保持键盘不收起
  emits('clear', { e })
  emits('change', innerValue.value, e)
}
function handleFocus(e) {
  focused.value = true
  emits('focus', innerValue.value, { e })
}
function handleBlur(e) {
  focused.value = false
  holdKeyboard.value = props.holdKeyboard
  emits('blur', innerValue.value, { e })
}

function handleCompositionend(e) {
  return handleInput(e)
}

function handleLineChange(e) {
  emits('linechange', e) // 兼容原来的
  // eslint-disable-next-line vue/custom-event-name-casing
  emits('line-change', { ...e.detail })
}

function handleSuffixIconClick() {
  emits('click', { trigger: 'suffix-icon' })
}

function handleKeyboardHeightChange(e) {
  emits('keyboardheightchange', e.detail)
}

function handleNickNameReview(e) {
  emits('nicknamereview', e.detail)
}
function handleInput(e) {
  const { value } = e.detail
  if (!props.allowInputOverMax && props.maxlength && typeof props.maxlength === 'number' && props.maxlength > 0) {
    const str = String(value ?? '')
    const length = str.length > props.maxlength ? props.maxlength : str.length
    innerValue.value = str.slice(0, length)
    innerValueLength.value = length
  }
  else if (!props.allowInputOverMax && props.maxcharacter && typeof props.maxlength === 'number' && props.maxcharacter > 0) {
    const str = String(value ?? '')
    let characters = ''
    let len = 0
    for (let i = 0; i < str.length; i += 1) {
      let currentStringLength = 1
      if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94)
        currentStringLength = 2

      if (len + currentStringLength > props.maxcharacter) {
        characters = str.slice(0, i)
        break
      }
      len += currentStringLength
    }
    innerValue.value = characters || str
    innerValueLength.value = len
  }
  else {
    innerValue.value = value
    innerValueLength.value = value.length
  }
  emits('change', innerValue.value, e)
}
function handleConfirm(e) {
  emits('enter', e.detail)
}
</script>

<template>
  <view
    :style="computedStyle"
    class="class l-class l-textarea box-border flex flex-col px-32rpx py-32rpx bg-[--l-textarea-background-color,theme(bg-color-container)]"
    :class="{
      'l-textarea--border rd-[--l-textarea-border-radius,theme(radius-default)] b-2rpx b-solid b-color-[--l-textarea-border-color,#dcdcdc]': props.bordered,
    }"
  >
    <view class="l-class-label l-textarea__label not-empty:(shrink-0 overflow-hidden text-ellipsis whitespace-nowrap pb-[--l-spacer,16rpx] font-size-[--l-font-size-base,28rpx] lh-44rpx c-[--l-textarea-label-color,theme(font-gray-1)])">
      <template v-if="props.label">
        {{ props.label }}
      </template>
      <slot name="label" />
    </view>
    <view class="l-textarea__wrapper w-[100%] flex flex-[1_1_auto] flex-col overflow-hidden">
      <textarea
        class="l-textarea__wrapper-inner l-class-textarea m-0 box-border min-h-20px min-w-0 w-inherit flex-[1_1_auto] resize-none border-[0] bg-transparent p-0 text-left font-size-[--l-font-size-m,32rpx] lh-48rpx c-[--l-textarea-text-color,theme(font-gray-1)]"
        :class="{
          'l-is-disabled c-[--l-textarea-disabled-text-color,theme(font-gray-4)]': props.disabled,
        }"
        :style="computedStyle"
        :name="props.name"
        :readonly="props.readonly"
        :maxlength="props.maxlength"
        :disabled="props.disabled"
        :placeholder="props.placeholder"
        :placeholder-class="`l-textarea__placeholder ${props.placeholderClass}`"
        :placeholder-style="props.placeholderStyle"
        :value="innerValue"
        :auto-height="!!props.autosize"
        :auto-focus="props.autofocus"
        :fixed="props.fixed"
        :focus="props.focus"
        :cursor="props.cursor"
        :cursor-spacing="props.cursorSpacing"
        :adjust-position="props.adjustPosition"
        :confirm-type="props.confirmType"
        :confirm-hold="props.confirmHold"
        :disable-default-padding="props.disableDefaultPadding"
        :show-confirm-bar="props.showConfirmBar"
        :selection-start="props.selectionStart"
        :selection-end="props.selectionEnd"
        :hold-keyboard="props.holdKeyboard"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @confirm="handleConfirm"
        @linechange="handleLineChange"
        @keyboardheightchange="handleKeyboardHeightChange"
        @compositionend="handleCompositionend"
      />
      <view
        v-if="props.indicator && (props.maxcharacter > 0 || props.maxlength > 0)"
        class="l-textarea__indicator l-class-indicator not-empty:(pt-[--l-spacer,16rpx] text-right font-size-[--l-spacer-1,24rpx] lh-40rpx c-[--l-textarea-indicator-text-color,theme(font-gray-3)])"
      >
        {{ innerValueLength }} / {{ props.maxcharacter || props.maxlength }}
      </view>
    </view>
  </view>
</template>

<style>
.l-textarea__placeholder {
  @apply color-[--l-textarea-placeholder-text-color,theme(font-gray-3)] font-size-[--l-font-size-m,32rpx]
}
</style>
