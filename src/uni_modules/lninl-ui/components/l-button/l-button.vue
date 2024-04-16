<script setup>
import { computed, ref } from 'vue'

// Props 定义
const props = defineProps({
  /** 按钮id */
  tId: {
    type: String,
    default: '',
  },
  /** 是否为块级元素 */
  block: {
    type: Boolean,
    default: false,
  },
  /** 按钮内容 */
  content: {
    type: String,
  },
  /** 自定义 dataset，可通过 event.currentTarget.dataset.custom 获取 */
  customDataset: {
    type: null,
  },
  /** 禁用状态 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 组件类名 */
  externalClasses: {
    type: Array,
  },
  /** 是否为幽灵按钮（镂空按钮） */
  ghost: {
    type: Boolean,
    default: false,
  },
  /** 图标名称 */
  icon: {
    type: null,
  },
  /** 是否显示为加载状态 */
  loading: {
    type: Boolean,
    default: false,
  },
  /** 透传至 Loading 组件 */
  loadingProps: {
    type: Object,
    default: () => { return {} },
  },
  /** 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle */
  shape: {
    type: String,
    default: 'rectangle',
  },
  /** 组件尺寸。可选项：extra-small/small/medium/large。 */
  size: {
    type: String,
    default: 'medium',
  },
  /** 组件风格，依次为品牌色、危险色。可选项：default/primary/danger/light */
  theme: {
    type: String,
    default: 'default',
  },
  /** 同小程序的 formType */
  type: {
    type: String,
  },
  /** 按钮形式，基础、线框、文字。可选项：base/outline/dashed/text */
  variant: {
    type: String,
    default: 'base',
  },
  /** 微信开放能力。<br />具体释义：<br />`contact` 打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 @contact 回调中获得具体信息，<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html">具体说明</a> （*小程序插件中不能使用*）；<br />`share` 触发用户转发，使用前建议先阅读<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#使用指引">使用指引</a>；<br />`getPhoneNumber` 获取用户手机号，可以从 @getphonenumber 回调中获取到用户信息，<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html">具体说明</a> （*小程序插件中不能使用*）；<br />`getUserInfo` 获取用户信息，可以从 @getuserinfo 回调中获取到用户信息 （*小程序插件中不能使用*）；<br />`launchApp` 打开APP，可以通过 app-parameter 属性设定向 APP 传的参数<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html">具体说明</a>；<br />`openSetting` 打开授权设置页；<br />`feedback` 打开“意见反馈”页面，用户可提交反馈内容并上传<a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html">日志</a>，开发者可以登录<a href="https://mp.weixin.qq.com/">小程序管理后台</a>后进入左侧菜单“客服反馈”页面获取到反馈内容；<br />`chooseAvatar` 获取用户头像，可以从 @chooseavatar 回调中获取到头像信息。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) */
  openType: {
    type: String,
  },
  /** 指定按钮按下去的样式类，按钮不为加载或禁用状态时有效。当 `hover-class="none"` 时，没有点击态效果 */
  hoverClass: {
    type: String,
    default: '',
  },
  /** 指定是否阻止本节点的祖先节点出现点击态 */
  hoverStopPropagation: {
    type: Boolean,
    default: false,
  },
  /** 按住后多久出现点击态，单位毫秒 */
  hoverStartTime: {
    type: Number,
    default: 20,
  },
  /** 手指松开后点击态保留时间，单位毫秒 */
  hoverStayTime: {
    type: Number,
    default: 70,
  },
  /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。。<br />具体释义：<br />`en` 英文；<br />`zh_CN` 简体中文；<br />`zh_TW` 繁体中文。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) */
  lang: {
    type: String,
    default: 'en',
  },
  /** 会话来源，open-type="contact"时有效 */
  sessionFrom: {
    type: String,
    default: '',
  },
  /** 会话内消息卡片标题，open-type="contact"时有效 */
  sendMessageTitle: {
    type: String,
    default: '',
  },
  /** 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 */
  sendMessagePath: {
    type: String,
    default: '',
  },
  /** 会话内消息卡片图片，open-type="contact"时有效 */
  sendMessageImg: {
    type: String,
    default: '',
  },
  /** 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 */
  appParameter: {
    type: String,
    default: '',
  },
  /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 */
  showMessageCard: {
    type: Boolean,
    default: false,
  },
  /** 打开群资料卡时，传递的群号 open-type="openGroupProfile" 平台：QQ小程序 */
  groupId: {
    type: String,
    default: '',
  },
  /** 打开频道页面时，传递的频道号 open-type="openGuildProfile" 平台：QQ小程序 */
  guildId: {
    type: String,
    default: '',
  },
  /** 打开公众号资料卡时，传递的号码 open-type="openPublicProfile" 平台：QQ小程序 */
  publicId: {
    type: String,
    default: '',
  },
  /** 客服的抖音号 open-type="im" 平台：抖音小程序2.68.0版本+ */
  dataImId: {
    type: String,
    default: '',
  },
  /** IM卡片类型 open-type="im" 平台：抖音小程序2.80.0版本+ */
  dataImType: {
    type: String,
    default: '',
  },
  /** 商品的id，仅支持泛知识课程库和生活服务商品库中的商品 open-type="im" 平台：抖音小程序2.80.0版本+ */
  dataGoodsId: {
    type: String,
    default: '',
  },
  /** 订单的id，仅支持交易2.0订单 open-type="im" 平台：抖音小程序2.80.0版本+ */
  dataOrderId: {
    type: String,
    default: '',
  },
  /** 商品类型，“1”代表生活服务，“2”代表泛知识。 open-type="im" 平台：抖音小程序2.80.0版本+ */
  dataBizLine: {
    type: String,
    default: '',
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

const emits = defineEmits(['getuserinfo', 'contact', 'getphonenumber', 'error', 'opensetting', 'launchapp', 'chooseavatar', 'agreeprivacyauthorization', 'addgroupapp', 'chooseaddress', 'chooseinvoicetitle', 'subscribe', 'login', 'im', 'tap', 'click'])

const hover = ref(false)
function touchstart() {
  if (props.disabled)
    return
  setTimeout(() => {
    hover.value = true
  }, props.hoverStartTime)
}
function touchend() {
  if (props.disabled)
    return
  setTimeout(() => {
    hover.value = false
  }, props.hoverStayTime)
}

const computedStyle = computed(() => {
  return [props.style, props.customStyle].filter(Boolean).join(' ')
})

const isDisabledOrLoading = computed(() => {
  return props.disabled || props.loading
})

function getUserInfo(e) {
  emits('getuserinfo', e.detail)
}
function contact(e) {
  emits('contact', e.detail)
}
function getPhoneNumber(e) {
  emits('getphonenumber', e.detail)
}
function error(e) {
  emits('error', e.detail)
}
function openSetting(e) {
  emits('opensetting', e.detail)
}
function launchApp(e) {
  emits('launchapp', e.detail)
}
function chooseAvatar(e) {
  emits('chooseavatar', e.detail)
}
function agreePrivacyAuthorization(e) {
  emits('agreeprivacyauthorization', e.detail)
}

function addGroupApp(e) {
  emits('addgroupapp', e.detail)
}
function chooseAddress(e) {
  emits('chooseaddress', e.detail)
}
function chooseInvoiceTitle(e) {
  emits('chooseinvoicetitle', e.detail)
}
function subscribe(e) {
  emits('subscribe', e.detail)
}
function login(e) {
  emits('login', e.detail)
}
function im(e) {
  emits('im', e.detail)
}
function tap(e) {
  if (props.disabled || props.loading)
    return
  emits('tap', e)
}
</script>

<template>
  <button
    :id="tId"
    :style="computedStyle"
    :data-custom="props.customDataset"
    class="l-button touch-manipulation bg-none fw-$l-button-font-weight,600 bg-transparent text-center relative cursor-pointer v-top select-none whitespace-nowrap outline-none justify-center items-center transition-all duration-[0.3s] after:(block border-solid content-empty absolute h-[200%] w-[200%] left-0 top-0 box-border origin-[0_0] scale-50)"
    :class="{
      'l-button--size-extra-small font-size-[--l-button-extra-small-font-size,theme(font-size-base)] pl-[--l-button-extra-small-padding-horizontal,16rpx] pr-[--l-button-extra-small-padding-horizontal,16rpx] h-[--l-button-extra-small-height,56rpx] lh-[--l-button-extra-small-height,56rpx]': props.size === 'extra-small',
      'l-button--size-small font-size-[--l-button-small-font-size,theme(font-size-base)] pl-[--l-button-small-padding-horizontal,24rpx] pr-[--l-button-small-padding-horizontal,24rpx] h-[--l-button-small-height,64rpx] lh-[--l-button-small-height,64rpx]': props.size === 'small',
      'l-button--size-medium font-size-[--l-button-medium-font-size,theme(font-size-m)] pl-[--l-button-medium-padding-horizontal,32rpx] pr-[--l-button-medium-padding-horizontal,32rpx] h-[--l-button-medium-height,80rpx] lh-[--l-button-medium-height,80rpx]': props.size === 'medium',
      'l-button--size-large font-size-[--l-button-large-font-size,theme(font-size-m)] pl-[--l-button-large-padding-horizontal,40rpx] pr-[--l-button-large-padding-horizontal,40rpx] h-[--l-button-large-height,96rpx] lh-[--l-button-large-height,96rpx]': props.size === 'large',

      'l-button--base': props.variant === 'base',

      'l-button--text c-[--l-button-default-color,theme(font-gray-1)] bg-none after:(border-0)': props.variant === 'text',
      'l-button--text--hover after:(bg-[--l-button-default-text-active-bg-color,theme(bg-color-container-active)])': hover && props.variant === 'text',
      'l-button--text--disabled color-[--l-button-default-disabled-color,theme(font-gray-4)]': disabled && props.variant === 'text',
      'l-button--outline color-[--l-button-default-outline-color,theme(font-gray-1)] bg-transparent after:(b-color-[--l-button-default-outline-border-color,theme(component-border)] b-width-[--l-button-border-width,4rpx])': props.theme === 'default' && props.variant === 'outline',
      'l-button--outline--hover after:(bg-[--l-button-default-outline-active-bg-color,theme(bg-color-container-active)] b-color-[--l-button-default-outline-active-border-color,theme(component-border)])': hover && props.theme === 'default' && props.variant === 'outline',
      'l-button--outline--disabled color-[--l-button-default-outline-disabled-color,theme(component-border) after:(b-color-[--l-button-default-outline-disabled-color,theme(component-border)])': disabled && props.theme === 'default' && props.variant === 'outline',
      'l-button--dashed border-dashed bg-transparent': props.variant === 'dashed',
      'l-button--dashed--hover': hover && props.variant === 'dashed',
      'l-button--dashed--disabled': disabled && props.variant === 'dashed',
      'l-button--ghost bg-transparent after:(b-width-[--l-button-border-width,4rpx])': props.ghost,
      'l-button--ghost color-[--l-button-ghost-color,theme(bg-color-container)] after:(b-color-[--l-button-ghost-border-color,var(--l-button-ghost-color,theme(bg-color-container))])': props.theme === 'default' && props.ghost,
      'l-button--ghost--hover color-[--l-button-ghost-hover-color,theme(font-white-2)] after:(bg-none  b-color-[--l-button-ghost-hover-color,theme(font-white-2)])': props.theme === 'default' && hover && props.ghost,
      'l-button--ghost--disabled color-[--l-button-ghost-disabled-color,rgba(255,255,255,0.35)] after:(b-color-[--l-button-ghost-disabled-color,rgba(255,255,255,0.35)])': props.theme === 'default' && disabled && props.ghost,

      'l-button--disabled cursor-not-allowed': disabled,
      'l-button--hover after:(-z-1)': hover && !props.ghost,

      'l-button--default color-[--l-button-default-color,theme(font-gray-1)] bg-[--l-button-default-bg-color,theme(bg-color-component)] after:(b-width-[--l-button-border-width,4rpx] b-color-[--l-button-default-border-color,theme(bg-color-component)])': props.theme === 'default' && props.variant === 'base' && !props.ghost,
      'l-button--default--hover z-0 after:(bg-[--l-button-default-active-bg-color,theme(bg-color-component-active)] b-color-[--l-button-default-active-border-color,theme(bg-color-component-active)])': props.theme === 'default' && hover && props.variant === 'base' && !props.ghost,
      'l-button--default--disabled color-[--l-button-default-disabled-color,theme(font-gray-4)] bg-[--l-button-default-disabled-bg,theme(bg-color-component-disabled)] after:(b-color-[--l-button-default-disabled-border-color,theme(bg-color-component-disabled)])': props.theme === 'default' && disabled && props.variant === 'base' && !props.ghost,

      'l-button--primary color-[--l-button-primary-color,theme(font-white-1)] bg-[--l-button-primary-bg-color,theme(brand-color)] after:(b-width-[--l-button-border-width,4rpx] b-color-[--l-button-primary-border-color,theme(brand-color)])': props.theme === 'primary' && props.variant === 'base' && !props.ghost,
      'l-button--primary--hover z-0 after:(bg-[--l-button-primary-active-bg-color,theme(brand-color-active)] b-color-[--l-button-primary-active-border-color,theme(brand-color-active)])': props.theme === 'primary' && hover && props.variant === 'base' && !props.ghost,
      'l-button--primary--disabled color-[--l-button-primary-disabled-color,theme(font-white-1)] bg-[--l-button-primary-disabled-bg,theme(brand-color-disabled)] after:(b-color-[--l-button-primary-disabled-border-color,theme(brand-color-disabled)])': props.theme === 'primary' && disabled && props.variant === 'base' && !props.ghost,
      'l-button--primary--text color-[--l-button-primary-text-color,theme(brand-color)] bg-none': props.theme === 'primary' && props.variant === 'text' && !props.ghost,
      'l-button--primary--text--hover after:(bg-[--l-button-primary-text-active-bg-color,theme(bg-color-container-active)])': props.theme === 'primary' && hover && props.variant === 'text' && !props.ghost,
      'l-button--primary--text--disabled bg-none color-[--l-button-primary-text-disabled-color,theme(brand-color-disabled)]': props.theme === 'primary' && disabled && props.variant === 'text' && !props.ghost,
      'l-button--primary--outline color-[--l-button-primary-outline-color,theme(brand-color)] after:(b-color-[--l-button-primary-outline-border-color,var(--l-button-primary-outline-color,theme(brand-color))] b-width-[--l-button-border-width,4rpx])': props.theme === 'primary' && props.variant === 'outline',
      'l-button--primary--outline--hover color-[--l-button-primary-outline-active-border-color,theme(brand-color-active)] after:(bg-[--l-button-primary-outline-active-bg-color,theme(bg-color-container-active)] b-color-[--l-button-primary-outline-active-border-color,theme(brand-color-active)])': props.theme === 'primary' && hover && props.variant === 'outline',
      'l-button--primary--outline--disabled bg-transparent color-[--l-button-primary-outline-disabled-color,theme(brand-color-disabled) after:(b-color-[--l-button-primary-outline-disabled-color,theme(brand-color-disabled)])': props.theme === 'primary' && disabled && props.variant === 'outline',
      'l-button--primary--dashed color-[--l-button-primary-dashed-color,theme(brand-color)] after:(b-color-[--l-button-primary-dashed-border-color,var(--l-button-primary-dashed-color,theme(brand-color))])': props.theme === 'primary' && props.variant === 'dashed',
      'l-button--primary--dashed--hover': props.theme === 'primary' && hover && props.variant === 'dashed',
      'l-button--primary--dashed--disabled bg-transparent color-[--l-button-primary-dashed-disabled-color,theme(brand-color-disabled)] after:(b-color-[--l-button-primary-dashed-disabled-color,theme(brand-color-disabled)])': props.theme === 'primary' && disabled && props.variant === 'dashed',
      'l-button--primary--ghost color-[--l-button-ghost-primary-color,theme(brand-color)] after:(b-color-[--l-button-ghost-primary-border-color,theme(brand-color)])': props.theme === 'primary' && props.ghost,
      'l-button--primary--ghost--hover color-[--l-button-ghost-primary-hover-color,theme(brand-color-active)] after:(bg-none b-color-[--l-button-ghost-primary-hover-color,theme(brand-color-active)])': props.theme === 'primary' && hover && props.ghost,
      'l-button--primary--ghost--disabled': props.theme === 'primary' && disabled && props.ghost,

      'l-button--danger color-[--l-button-danger-color,theme(font-white-1)] bg-[--l-button-danger-bg-color,theme(error-color)] after:(b-width-[--l-button-border-width,4rpx] b-color-[--l-button-danger-border-color,theme(error-color)])': props.theme === 'danger' && props.variant === 'base' && !props.ghost,
      'l-button--danger--hover z-0 after:(bg-[--l-button-danger-active-bg-color,theme(error-color-7)] b-color-[--l-button-danger-active-border-color,theme(error-color-7)])': props.theme === 'danger' && hover && !props.ghost,
      'l-button--danger--disabled color-[--l-button-danger-disabled-color,theme(font-white-1)] bg-[--l-button-danger-disabled-bg,theme(error-color-3)] after:(b-color-[--l-button-danger-disabled-border-color,theme(error-color-3)])': props.theme === 'danger' && disabled && !props.ghost,
      'l-button--danger--text color-[--l-button-danger-text-color,theme(error-color)] bg-none': props.theme === 'danger' && props.variant === 'text',
      'l-button--danger--text--hover after:(bg-[--l-button-danger-text-active-bg-color,theme(bg-color-container-active)])': props.theme === 'danger' && hover && props.variant === 'text',
      'l-button--danger--text--disabled bg-none color-[--l-button-danger-text-disabled-color,var(--l-button-danger-disabled-color,theme(font-white-1))]': props.theme === 'danger' && disabled && props.variant === 'text',
      'l-button--danger--outline color-[--l-button-danger-outline-color,theme(error-color)] after:(b-color-[--l-button-danger-outline-border-color,var(--l-button-danger-outline-color,theme(error-color))] b-width-[--l-button-border-width,4rpx])': props.theme === 'danger' && props.variant === 'outline',
      'l-button--danger--outline--hover color-[--l-button-danger-outline-active-border-color,theme(error-color-7)] after:(bg-[--l-button-danger-outline-active-bg-color,theme(bg-color-container-active)] b-color-[--l-button-danger-outline-active-border-color,theme(error-color-7)])': props.theme === 'danger' && hover && props.variant === 'outline',
      'l-button--danger--outline--disabled bg-transparent color-[--l-button-danger-outline-disabled-color,theme(error-color-3) after:(b-color-[--l-button-danger-outline-disabled-color,theme(error-color-3)])': props.theme === 'danger' && disabled && props.variant === 'outline',
      'l-button--danger--dashed color-[--l-button-danger-dashed-color,theme(error-color)] after:(b-color-[--l-button-danger-dashed-border-color,var(--l-button-danger-dashed-color,theme(error-color))])': props.theme === 'danger' && props.variant === 'dashed',
      'l-button--danger--dashed--hover': props.theme === 'danger' && hover && props.variant === 'dashed',
      'l-button--danger--dashed--disabled bg-transparent color-[--l-button-danger-dashed-disabled-color,theme(font-white-1)] after:(b-color-[--l-button-danger-dashed-disabled-color,theme(font-white-1)])': props.theme === 'danger' && disabled && props.variant === 'dashed',
      'l-button--danger--ghost color-[--l-button-ghost-danger-color,theme(error-color)] after:(b-color-[--l-button-ghost-danger-border-color,theme(error-color)])': props.theme === 'danger' && props.ghost,
      'l-button--danger--ghost--hover color-[--l-button-ghost-danger-hover-color,theme(error-color-active)] after:(bg-none b-color-[--l-button-ghost-danger-hover-color,theme(error-color-active)])': props.theme === 'danger' && hover && props.ghost,
      'l-button--danger--ghost--disabled': props.theme === 'danger' && disabled && props.ghost,

      'l-button--light color-[--l-button-light-color,theme(brand-color)] bg-[--l-button-light-bg-color,theme(brand-color-light)] after:(b-width-[--l-button-border-width,4rpx] b-color-[--l-button-light-border-color,theme(brand-color-light)])': props.theme === 'light' && props.variant === 'base',
      'l-button--light--hover z-0 after:(bg-[--l-button-light-active-bg-color,theme(brand-color-light-active)] b-color-[--l-button-light-active-border-color,theme(brand-color-light-active)])': props.theme === 'light' && hover,
      'l-button--light--disabled color-[--l-button-light-disabled-color,theme(brand-color-disabled)] bg-[--l-button-light-disabled-bg,theme(brand-color-light)] after:(b-color-[--l-button-light-disabled-border-color,theme(brand-color-light)])': props.theme === 'light' && disabled,
      'l-button--light--text color-[--l-button-light-text-color,theme(brand-color)] bg-none': props.theme === 'light' && props.variant === 'text',
      'l-button--light--text--hover after:(bg-[--l-button-light-text-active-bg-color,theme(bg-color-container-active)])': props.theme === 'light' && hover && props.variant === 'text',
      'l-button--light--text--disabled': props.theme === 'light' && disabled && props.variant === 'text',
      'l-button--light--outline color-[--l-button-light-outline-color,theme(brand-color)] bg-[--l-button-light-outline-bg-color,theme(brand-color-light)] after:(b-color-[--l-button-light-outline-border-color,var(--l-button-light-outline-color,theme(brand-color))] b-width-[--l-button-border-width,4rpx])': props.theme === 'light' && props.variant === 'outline',
      'l-button--light--outline--hover color-[--l-button-light-outline-active-border-color,theme(brand-color-active)] after:(bg-[--l-button-light-outline-active-bg-color,theme(brand-color-light-active)] b-color-[--l-button-light-outline-active-border-color,theme(brand-color-active)])': props.theme === 'light' && hover && props.variant === 'outline',
      'l-button--light--outline--disabled bg-transparent color-[--l-button-light-outline-disabled-color,theme(brand-color-disabled) after:(b-color-[--l-button-light-outline-disabled-color,theme(brand-color-disabled)])': props.theme === 'light' && disabled && props.variant === 'outline',
      'l-button--light--dashed color-[--l-button-light-dashed-color,theme(brand-color)] after:(b-color-[--l-button-light-dashed-border-color,var(--l-button-light-dashed-color,theme(brand-color))])': props.theme === 'light' && props.variant === 'dashed',
      'l-button--light--dashed--hover': props.theme === 'light' && hover && props.variant === 'dashed',
      'l-button--light--dashed--disabled': props.theme === 'light' && disabled && props.variant === 'dashed',
      'l-button--light--ghost': props.theme === 'light' && props.ghost,
      'l-button--light--ghost--hover color-[--l-button-ghost-light-hover-color,theme(brand-color-active)] after:(bg-none b-color-[--l-button-ghost-light-hover-color,theme(brand-color-active)])': props.theme === 'light' && hover && props.ghost,
      'l-button--light--ghost--disabled': props.theme === 'light' && disabled && props.ghost,

      'l-button--rectangle': props.shape === 'rectangle',

      'l-button--square p-0': props.shape === 'square',
      'l-button--square w-[--l-button-large-height,96rpx]': props.shape === 'square' && props.size === 'large',
      'l-button--square w-[--l-button-medium-height,80rpx]': props.shape === 'square' && props.size === 'medium',
      'l-button--square w-[--l-button-small-height,64rpx]': props.shape === 'square' && props.size === 'small',
      'l-button--square w-[--l-button-extra-small-height,56rpx]': props.shape === 'square' && props.size === 'extra-small',

      'l-button--circle p-0 border-rd-[50%]': props.shape === 'circle',
      'l-button--circle w-[--l-button-large-height,96rpx] after:(border-rd-[50%])': props.shape === 'circle' && props.size === 'large',
      'l-button--circle w-[--l-button-medium-height,80rpx] after:(border-rd-[50%])': props.shape === 'circle' && props.size === 'medium',
      'l-button--circle w-[--l-button-small-height,64rpx] after:(border-rd-[50%])': props.shape === 'circle' && props.size === 'small',
      'l-button--circle w-[--l-button-extra-small-height,56rpx] after:(border-rd-[50%])': props.shape === 'circle' && props.size === 'extra-small',

      'l-button--round': props.shape === 'round',
      'l-button--round border-rd-[calc(var(--l-button-large-height,96rpx)/2)] after:(border-rd-[--l-button-large-height,96rpx])': props.shape === 'round' && props.size === 'large',
      'l-button--round border-rd-[calc(var(--l-button-medium-height,80rpx)/2)] after:(border-rd-[--l-button-medium-height,80rpx])': props.shape === 'round' && props.size === 'medium',
      'l-button--round border-rd-[calc(var(--l-button-small-height,64rpx)/2)] after:(border-rd-[--l-button-small-height,64rpx])': props.shape === 'round' && props.size === 'small',
      'l-button--round border-rd-[calc(var(--l-button-extra-small-height,56rpx)/2)] after:(border-rd-[--l-button-extra-small-height,56rpx])': props.shape === 'round' && props.size === 'extra-small',

      'l-button--block flex w-[100%]': props.block,
      'l-button--block inline-flex': !props.block,
      'l-button--loading flex items-center justify-center': props.loading,
    }"
    :form-type="isDisabledOrLoading ? '' : props.type"
    :open-type="isDisabledOrLoading ? '' : props.openType"
    :hover-stop-propagation="props.hoverStopPropagation"
    :hover-start-time="props.hoverStartTime"
    :hover-stay-time="props.hoverStayTime"
    :hover-class="props.disabled || props.loading ? '' : (props.hoverClass || 'l-button--hover')"
    :lang="props.lang"
    :session-from="props.sessionFrom"
    :aria-label="props.ariaLabel"
    :send-message-title="props.sendMessageTitle"
    :send-message-path="props.sendMessagePath"
    :send-message-img="props.sendMessageImg"
    :app-parameter="props.appParameter"
    :show-message-card="props.showMessageCard"
    :group-id="props.groupId"
    :guild-id="props.guildId"
    :public-id="props.publicId"
    :data-im-id="props.dataImId"
    :data-im-type="props.dataImType"
    :data-goods-id="props.dataGoodsId"
    :data-order-id="props.dataOrderId"
    :data-biz-line="props.dataBizLine"
    @tap="tap"
    @touchstart.passive="touchstart"
    @touchend.stop="touchend"
    @getuserinfo="getUserInfo"
    @contact="contact"
    @getphonenumber="getPhoneNumber"
    @error="error"
    @opensetting="openSetting"
    @launchapp="launchApp"
    @chooseavatar="chooseAvatar"
    @agreeprivacyauthorization="agreePrivacyAuthorization"
    @addgroupapp="addGroupApp"
    @chooseaddress="chooseAddress"
    @chooseinvoicetitle="chooseInvoiceTitle"
    @subscribe="subscribe"
    @login="login"
    @im="im"
  >
    <!-- Icon -->
    <template v-if="typeof props.icon === 'string' ? props.icon : false">
      <l-icon
        class="l-button__icon border-rd-[--l-button-icon-border-radius,8rpx]" :class="{
          'font-size-[--l-button-extra-small-icon-font-size,36rpx]': props.size === 'extra-small',
          'font-size-[--l-button-small-icon-font-size,36rpx]': props.size === 'small',
          'font-size-[--l-button-medium-icon-font-size,40rpx]': props.size === 'medium',
          'font-size-[--l-button-large-icon-font-size,48rpx]': props.size === 'large',
        }" l-class="l-class-icon" aria-hidden="true" :name="typeof props.icon === 'string' ? props.icon : false"
      />
    </template>

    <!-- Loading Indicator -->
    <l-loading
      v-if="loading"
      :delay="loadingProps.delay || 0"
      :duration="loadingProps.duration || 800"
      :indicator="loadingProps.indicator || true"
      :inherit-color="loadingProps.inheritColor || true"
      :layout="loadingProps.layout || 'horizontal'"
      :pause="loadingProps.pause || false"
      :progress="loadingProps.progress || 0"
      :reverse="loadingProps.reverse || false"
      :size="loadingProps.size || '40rpx'"
      :text="loadingProps.text || ''"
      :theme="loadingProps.theme || 'circular'"
      loading l-class="l-button__loading l-button__loading--wrapper"
      l-class-indicator="l-button__loading--indicator l-class-loading"
    />

    <!-- Content -->
    <view class="l-button__content">
      <slot name="content" />
      <template v-if="props.content">
        {{ props.content }}
      </template>
      <slot />
    </view>
    <slot name="suffix" />
  </button>
</template>
