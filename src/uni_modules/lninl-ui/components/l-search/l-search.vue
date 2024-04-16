<script setup>
import { computed, ref, watch, watchEffect } from 'vue'

// Props 定义
const props = defineProps({
  /** 值，搜索关键词。支持语法糖 v-model 或 v-model:value */
  value: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  /** 输入框的值，非受控属性 */
  defaultValue: {
    type: String,
    default: '',
  },
  /** 自定义右侧操作按钮文字 */
  action: {
    type: String,
    default: '',
  },
  /** 是否居中 */
  center: {
    type: Boolean,
    default: false,
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 组件外部样式类名，分别用于设置组件外层类名、输入框类名、输入框容器类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型 */
  externalClasses: {
    type: Array,
  },
  /** 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 */
  cursorSpacing: {
    type: Number,
    default: 0,
  },
  /** 是否聚焦 */
  focus: {
    type: Boolean,
    default: false,
  },
  /** 左侧文本 */
  label: {
    type: String,
    default: '',
  },
  /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxcharacter: {
    type: Number,
  },
  /** 用户最多可以输入的文本长度，一个中文等于一个计数长度，默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用 */
  maxlength: {
    type: Number,
    default: -1,
  },
  /** 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) */
  confirmType: {
    type: String,
    default: 'search',
  },
  /** 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效) */
  alwaysEmbed: {
    type: Boolean,
    default: false,
  },
  /** 点击键盘右下角按钮时是否保持键盘不收起 */
  confirmHold: {
    type: Boolean,
    default: false,
  },
  /** 指定focus时的光标位置 */
  cursor: {
    type: Number,
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
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition: {
    type: Boolean,
    default: true,
  },
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard: {
    type: Boolean,
    default: false,
  },
  /** 指定 placeholder 的样式 */
  placeholderStyle: {
    type: String,
    default: '',
  },
  /** 指定 placeholder 的样式类 */
  placeholderClass: {
    type: String,
    default: 'input-placeholder',
  },
  /** 左侧图标 */
  leftIcon: {
    type: String,
    default: 'search',
  },
  /** 占位符 */
  placeholder: {
    type: String,
    default: '',
  },
  /** 右侧图标 */
  rightIcon: {
    type: String,
    default: 'close-circle-filled',
  },
  /** 搜索框形状 */
  shape: {
    type: String,
    default: 'square',
  },
  /** 值 */
  default: {
    type: String,
    default: '',
  },
  /** 是否启用清除控件 */
  clearable: {
    type: Boolean,
    default: true,
  },
  /** 控制拉起的键盘类型 */
  type: {
    type: String,
    default: 'text',
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

const emits = defineEmits(['update:value', 'update:modelValue', 'action-click', 'blur', 'change', 'clear', 'submit', 'focus'])
const computedStyle = computed(() => {
  return [props.style, props.customStyle].filter(item => item != null && item !== '').join(' ')
})
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

function handleInput(e) {
  const { value } = e.detail
  if (props.maxlength && typeof props.maxlength === 'number' && props.maxlength > 0) {
    const str = String(value ?? '')
    const length = str.length > props.maxlength ? props.maxlength : str.length
    innerValue.value = str.slice(0, length)
  }
  else if (props.maxcharacter && typeof props.maxcharacter === 'number' && props.maxcharacter > 0) {
    const str = String(value ?? '')
    let characters = ''
    let len = 0
    for (let i = 0; i < str.length; i += 1) {
      let currentStringLength = 0
      if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94)
        currentStringLength = 2
      else
        currentStringLength = 1

      if (len + currentStringLength > props.maxcharacter) {
        characters = str.slice(0, i)
        break
      }
      len += currentStringLength
    }
    innerValue.value = characters
  }
  else {
    innerValue.value = value
  }
  emits('change', innerValue.value, e)
}

function handleFocus(e) {
  focused.value = true
  emits('focus', { value: innerValue.value, e })
}

function handleBlur(e) {
  focused.value = false
  holdKeyboard.value = props.holdKeyboard
  emits('blur', { value: innerValue.value, e })
}

function handleClear(e) {
  innerValue.value = ''
  focused.value = true
  holdKeyboard.value = true // 点击清除按钮时，保持键盘不收起
  emits('clear', { e })
  emits('change', innerValue.value, e)
}

function handleConfirm(e) {
  emits('submit', { value: innerValue.value, e })
}

function handleCompositionend(e) {
  return handleInput(e)
}

function handleActionClick(e) {
  // eslint-disable-next-line vue/custom-event-name-casing
  emits('action-click', { e })
}

function handleSearch(e) {
  // 如果按的是 enter 键, 13是 enter
  if (e.keyCode === 13) {
    e.preventDefault(e, false)
    emits('submit', { value: innerValue.value, e })
  }
}
</script>

<template>
  <view :style="computedStyle" class="class l-search l-class flex justify-between items-center">
    <view
      class="l-search__input-box l-class-input-container p-[--l-search-padding,16rpx_24rpx] border-2rpx border-solid flex flex-1 h-[--l-search-height,80rpx] items-center box-border bg-[--l-search-bg-color,theme(bg-color-secondarycontainer)] border-[--l-search-bg-color,theme(bg-color-secondarycontainer)]"
      :class="[
        focused ? 'l-is-focused b-color-[--l-search-bg-color,theme(bg-color-secondarycontainer)]' : 'l-not-focused',
        props.center ? 'l-search__input-box--center text-center' : '',
        props.shape === 'square' ? 'l-search__input-box--square rd-[--l-search-square-radius,theme(radius-default)]' : '',
        props.shape === 'round' ? 'l-search__input-box--round rd-[calc(var(--l-search-height,80rpx)/2)]' : '',
      ]"
    >
      <!-- <view v-if="props.label" class="l-search__label l-class-label color-[--l-search-label-color, theme(font-gray-1)] p-8rpx">
        {{ props.label }}
      </view>
      <slot name="label" /> -->
      <l-icon
        v-if="props.leftIcon" :name="props.leftIcon" size="24"
        class="l-icon l-class-left color-[--l-search-icon-color,theme(font-gray-3)]" :aria-hidden="props.true"
      />
      <slot v-else name="left-icon" />

      <input
        :type="props.type" name="input" :maxlength="props.maxlength" :maxcharacter="props.maxcharacter" :disabled="props.disabled"
        class="l-input__keyword l-class-input pl-10rpx inline-block lh-48rpx flex-1 min-h-48rpx font-size-[--l-search-font-size,theme(font-size-m)] color-[--l-search-text-color,theme(font-gray-1)]"
        :focus="focused" :value="innerValue" :confirm-type="props.confirmType" :confirm-hold="props.confirmHold"
        :cursor="props.cursor" :adjust-position="props.adjustPosition" :always-embed="props.alwaysEmbed"
        :selection-start="props.selectionStart" :selection-end="props.selectionEnd" :hold-keyboard="holdKeyboard"
        :cursor-spacing="props.cursorSpacing" :placeholder="props.placeholder"
        :placeholder-style="props.placeholderStyle"
        :placeholder-class="[props.placeholderClass, 'l-search__placeholder', props.center ? 'l-search__placeholder--center' : 'l-search__placeholder--normal'].join(' ')"
        @keypress="handleSearch" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @confirm="handleConfirm"
        @compositionend="handleCompositionend"
      >
      <view
        v-if="innerValue && props.clearable"
        class="l-search__clear l-class-clear ml-10px relative after:(block content-empty absolute bottom-0 left-0 right-0 top-0 scale-150) color-[--l-search-clear-icon-color,theme(font-gray-3)]"
        aria-role="button" aria-label="清除" @click="handleClear"
      >
        <l-icon name="close-circle-filled" size="24" />
      </view>
    </view>
    <view
      v-if="props.action && innerValue"
      class="l-search__search-action l-class-action ml-30rpx font-size-[--l-search-font-size,theme(font-size-m)] color-[--l-search-action-color,theme(brand-color)]"
      aria-role="button" @click="handleActionClick"
    >
      {{ props.action }}
    </view>
    <slot v-else name="action" />
  </view>
</template>

<style>
.l-search__placeholder.input-placeholder {
  @apply color-[--l-search-placeholder-color,theme(font-gray-3)]
}
.l-search__placeholder.l-search__placeholder--center {
  @apply text-center
}
</style>
