<script setup>
import { computed, ref, watch, watchEffect } from 'vue'

// Props 定义
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  /** 文本内容位置，居左/居中/居右 */
  align: {
    type: String,
    default: 'left',
  },
  /** 超出 `maxlength` 或 `maxcharacter` 之后是否允许继续输入 */
  allowInputOverMax: {
    type: Boolean,
    default: false,
  },
  /** 标题输入框布局方式 */
  layout: {
    type: String,
    default: 'horizontal',
  },
  /** 是否开启无边框模式 */
  borderless: {
    type: Boolean,
    default: false,
  },
  /** 是否可清空 */
  clearable: {
    type: null,
    default: false,
  },
  /** 清空图标触发方式 */
  clearTrigger: {
    type: String,
    default: 'always',
  },
  /** 是否禁用输入框 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 已废弃。错误提示文本，值为空不显示（废弃属性，如果需要，请更为使用 status 和 tips） */
  errorMessage: {
    type: String,
    default: '',
  },
  /** 组件类名，用于设置组件外层元素、输入框、占位符、错误信息等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 【开发中】指定输入框展示值的格式 */
  format: {
    type: null,
  },
  /** 左侧文本 */
  label: {
    type: String,
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
  /** 占位符 */
  placeholder: {
    type: String,
    default: undefined,
  },
  /** 组件前置图标，值为字符串则表示图标名称 */
  prefixIcon: {
    type: null,
    default: null,
  },
  /** 只读状态 */
  readonly: {
    type: Boolean,
    default: false,
  },
  /** 输入框尺寸 */
  size: {
    type: String,
    default: 'medium',
  },
  /** 输入框状态 */
  status: {
    type: String,
    default: 'default',
  },
  /** 后置图标前的后置内容 */
  suffix: {
    type: String,
  },
  /** 后置文本内容，值为字符串则表示图标名称 */
  suffixIcon: {
    type: null,
    default: null,
  },
  /** 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式 */
  tips: {
    type: String,
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
  /** input 的类型。<br />具体释义：<br />`text` 文本输入键盘；<br />`number` 数字输入键盘；<br />`idcard` 身份证输入键盘；<br />`digit` 带小数点的数字键盘；<br />`safe-password` 密码安全输入键盘 <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/safe-password.html">指引</a>；<br />`nickname` 昵称输入键盘。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) */
  type: {
    type: String,
    default: 'text',
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
  /** 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 */
  cursorSpacing: {
    type: Number,
    default: 0,
  },
  /** (即将废弃，请直接使用 focus )自动聚焦，拉起键盘 */
  autoFocus: {
    type: Boolean,
    default: false,
  },
  /** 获取焦点 */
  focus: {
    type: Boolean,
    default: false,
  },
  /** 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) */
  confirmType: {
    type: String,
    default: 'done',
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
  /** focus时，点击页面的时候不收起键盘。有清除按钮的时候，一般需要设置为true */
  holdKeyboard: {
    type: Boolean,
    default: false,
  },
  /** 安全键盘加密公钥的路径，只支持包内路径 */
  safePasswordCertPath: {
    type: String,
    default: '',
  },
  /** 安全键盘输入密码长度 */
  safePasswordLength: {
    type: Number,
  },
  /** 安全键盘加密时间戳 */
  safePasswordTimeStamp: {
    type: Number,
  },
  /** 安全键盘加密盐值 */
  safePasswordNonce: {
    type: String,
    default: '',
  },
  /** 安全键盘计算hash盐值，若指定custom-hash 则无效 */
  safePasswordSalt: {
    type: String,
    default: '',
  },
  /** 安全键盘计算hash的算法表达式，如 `md5(sha1('foo' + sha256(sm3(password + 'bar'))))` */
  safePasswordCustomHash: {
    type: String,
    default: '',
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
const emits = defineEmits(['update:value', 'update:modelValue', 'click-icon', 'click', 'enter', 'focus', 'blur', 'change', 'clear', 'keyboardheightchange', 'nicknamereview'])
const inputRef = ref()
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

function handleSuffixClick() {
  emits('click', { trigger: 'suffix' })
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
  }
  else if (!props.allowInputOverMax && props.maxcharacter && typeof props.maxcharacter === 'number' && props.maxcharacter > 0) {
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
    innerValue.value = characters || str
  }
  else {
    innerValue.value = value
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
    class="class l-class l-input flex flex-1 p-[--l-input-vertical-padding,32rpx] bg-[--l-input-bg-color,theme(bg-color-container)]"
    :class="{
      'l-input--layout-vertical flex-col items-start': props.layout === 'vertical',
      'l-input--layout-horizontal items-center': props.layout === 'horizontal',
      'l-input--size-small': props.size === 'small',
      'l-input--size-medium': props.size === 'medium',
      'l-input--center': props.align === 'center',
      'l-input--border relative after:(content-empty block absolute bottom-0 bg-[--l-input-border-color,theme(component-stroke)] h-1px left-0 right-0 scale-y-50)': !props.borderless,
    }"
    aria-describedby
  >
    <!-- aria-describedby用于关联该行设置了aria-hidden的元素最近的焦点，解决触发焦点过度上下偏移的问题 -->
    <view class="l-input__wrap--prefix flex">
      <view class="l-input__icon--prefix font-size-48rpx empty:hidden c-[--l-input-prefix-icon-color,theme(font-gray-1)]">
        <slot name="prefix-icon" />
        <l-icon
          v-if="props.prefixIcon"
          l-class="l-class-prefix-icon"
          :aria-hidden="true"
          :name="typeof props.prefixIcon === 'string' ? props.prefixIcon : props.prefixIcon.name"
        />
      </view>

      <view
        class="l-input__label l-class-label"
        :class="[
          props.label ? 'break-word c-[--l-input-label-text-color,theme(font-gray-1)] lh-48rpx mr-[theme(spacer-2)] max-w-[--l-input-label-max-width,5em] min-w-[--l-input-label-min-width,2em]' : '',
          props.prefixIcon && props.label ? 'pl-8rpx' : '',
          props.prefixIcon && !props.label ? 'mr-[--l-spacer-2,32rpx]' : '',
          props.layout === 'vertical' && props.label ? 'font-size-[--l-font-size-base,28rpx] pb-8rpx' : 'font-size-[theme(font-size-m)]',
        ]"
        aria-hidden="true"
      >
        <slot name="label" />
        <template v-if="props.label">
          {{ props.label }}
        </template>
      </view>
    </view>

    <view class="l-input__wrap w-[100%] flex flex-1 shrink-1 flex-col flex-wrap justify-center">
      <view
        class="l-input__content flex items-center font-size-[--l-font-size-m,32rpx] lh-48rpx"
        :class="{
          'l-input--default': props.status === 'default',
          'l-input--success': props.status === 'success',
          'l-input--warning': props.status === 'warning',
          'l-input--error': props.status === 'error',
        }"
      >
        <input
          ref="inputRef"
          class="l-class__control l-class-input m-0 box-border block min-h-48rpx min-w-0 w-[100%] resize-none border-0 bg-transparent p-0 font-size-inherit lh-inherit c-[--l-input-default-text-color,theme(font-gray-1)]"
          :class="{
            'l-input--left text-left': props.align === 'left',
            'l-input--center text-center': props.align === 'center',
            'l-input--right text-right': props.align === 'right',
            'l-input--default': props.status === 'default',
            'l-input--success': props.status === 'success',
            'l-input--warning': props.status === 'warning',
            'l-input--error': props.status === 'error',
            'l-input__control--disabled c-[--l-input-disabled-text-color,theme(text-color-disabled)] cursor-not-allowed op-100 -webkit-text-fill-color-[currentColor]': props.disabled,
            'l-input__control--read-only cursor-default': props.readonly,
          }"
          :value="innerValue"
          :name="props.name"
          :maxlength="props.maxlength"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          :placeholder-style="props.placeholderStyle"
          :placeholder-class="`l-input__placeholder ${props.placeholderClass}`"
          :password="props.type === 'password'"
          :type="props.type === 'password' ? 'text' : type"
          :focus="focused"
          :confirm-type="props.confirmType"
          :confirm-hold="props.confirmHold"
          :cursor="props.cursor"
          :cursor-spacing="props.cursorSpacing"
          :adjust-position="props.adjustPosition"
          :always-embed="props.alwaysEmbed"
          :selection-start="props.selectionStart"
          :selection-end="props.selectionEnd"
          :hold-keyboard="holdKeyboard"
          :safe-password-cert-path="props.safePasswordCertPath"
          :safe-password-length="props.safePasswordLength"
          :safe-password-time-stamp="props.safePasswordTimeStamp"
          :safe-password-nonce="props.safePasswordNonce"
          :safe-password-salt="props.safePasswordSalt"
          :safe-password-custom-hash="props.safePasswordCustomHash"
          aria-role="textbox"
          :aria-label="props.label"
          :aria-roledescription="props.label"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @confirm="handleConfirm"
          @keyboardheightchange="handleKeyboardHeightChange"
          @nicknamereview="handleNickNameReview"
        >
        <!--
          这里aria-role="textbox"和aria-label组合使用实现ios的聚合焦点播报效果。
          ios会播报aria-label，不会重复播报aria-roledescription的内容；
          安卓不会播报aria-label，会播报aria-roledescription的内容
        -->
        <view
          v-if="props.clearable && (innerValue.length > 0 || props.clearTrigger === 'always')"
          class="l-input__wrap--clearable-icon flex-[0_0_auto] pl-[--l-spacer-1,24rpx] text-48rpx empty:hidden c-[--l-input-suffix-icon-color,theme(font-gray-3)]"
          @touchend.prevent="handleClear"
        >
          <l-icon
            v-if="props.clearable"
            l-class="l-class-clearable"
            aria-role="button"
            aria-label="清除"
            :name="typeof props.clearable === 'boolean' ? 'close-circle-filled' : props.clearable.name"
          />
        </view>
        <view class="l-input__wrap--suffix l-class-suffix flex-[0_0_auto] pl-[--l-spacer-1,24rpx] font-size-[--l-font-size-m,32rpx] empty:hidden c-[--l-input-suffix-text-color,theme(font-gray-1)]" @tap="handleSuffixClick">
          <text v-if="props.suffix">
            {{ props.suffix }}
          </text>
          <slot name="suffix" />
        </view>
        <view class="l-input__wrap--suffix-icon flex-[0_0_auto] pl-[--l-spacer-1,24rpx] font-size-48rpx empty:hidden c-[--l-input-suffix-icon-color,theme(font-gray-3)]" @tap="handleSuffixIconClick">
          <slot name="suffix-icon" />
          <l-icon
            v-if="props.suffixIcon"
            l-class="l-class-suffix-icon"
            aria-role="button"
            :name="typeof props.suffixIcon === 'string' ? props.suffixIcon : props.suffixIcon.name"
          />
        </view>
      </view>
      <view
        v-if="props.tips && props.tips.length > 0"
        class="l-input__tips l-class-tips pt-8rpx font-size-[--l-font-size-s,24rpx] lh-40rpx empty:hidden"
        :class="{
          'l-input--left text-left': props.align === 'left',
          'l-input--center text-center': props.align === 'center',
          'l-input--right text-right': props.align === 'right',
          'l-input--default color-[--l-input-default-tips-color,theme(font-gray-3)]': props.status === 'default',
          'l-input--success color-[--l-input-success-tips-color,theme(success-color)]': props.status === 'success',
          'l-input--warning color-[--l-input-warning-tips-color,theme(warning-color)]': props.status === 'warning',
          'l-input--error color-[--l-input-error-tips-color,theme(error-color)]': props.status === 'error',
        }"
      >
        {{ props.tips }}
      </view>
      <slot name="tips" />
    </view>
  </view>
</template>

<style>
.l-input__placeholder.input-placeholder {
  @apply color-[--l-input-placeholder-text-color,theme(text-color-placeholder)] font-size-[--l-font-size-m,32rpx]
}
</style>
