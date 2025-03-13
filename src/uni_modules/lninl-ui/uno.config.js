import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { defaultRules, extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()
const transformRules = {
  ...defaultRules,
  '\\': '_bs_',
}
export default defineConfig({
  presets: [
    presetWeapp({ transformRules }),
    presetWeappAttributify(),
    presetIcons(),
  ],
  shortcuts: [],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify(),
    transformerClass({ exclude: '.git', transformRules }),
  ],
  theme: {
    // 公共前缀
    'prefix': 'l',

    'brand-color-1': 'var(--l-brand-color-1, #f2f3ff)',
    'brand-color-2': 'var(--l-brand-color-2, #d9e1ff)',
    'brand-color-3': 'var(--l-brand-color-3, #b5c7ff)',
    'brand-color-4': 'var(--l-brand-color-4, #8eabff)',
    'brand-color-5': 'var(--l-brand-color-5, #618dff)',
    'brand-color-6': 'var(--l-brand-color-6, #366ef4)',
    'brand-color-7': 'var(--l-brand-color-7, #0052d9)',
    'brand-color-8': 'var(--l-brand-color-8, #003cab)',
    'brand-color-9': 'var(--l-brand-color-9, #002a7c)',
    'brand-color-10': 'var(--l-brand-color-10, #001a57)',

    'error-color-1': 'var(--l-error-color-1, #fff0ed)',
    'error-color-2': 'var(--l-error-color-2, #ffd8d2)',
    'error-color-3': 'var(--l-error-color-3, #ffb9b0)',
    'error-color-4': 'var(--l-error-color-4, #ff9285)',
    'error-color-5': 'var(--l-error-color-5, #f6685d)',
    'error-color-6': 'var(--l-error-color-6, #d54941)',
    'error-color-7': 'var(--l-error-color-7, #ad352f)',
    'error-color-8': 'var(--l-error-color-8, #881f1c)',
    'error-color-9': 'var(--l-error-color-9, #68070a)',
    'error-color-10': 'var(--l-error-color-10, #490002)',

    'warning-color-1': 'var(--l-warning-color-1, #fff1e9)',
    'warning-color-2': 'var(--l-warning-color-2, #ffd9c2)',
    'warning-color-3': 'var(--l-warning-color-3, #ffb98c)',
    'warning-color-4': 'var(--l-warning-color-4, #fa9550)',
    'warning-color-5': 'var(--l-warning-color-5, #e37318)',
    'warning-color-6': 'var(--l-warning-color-6, #be5a00)',
    'warning-color-7': 'var(--l-warning-color-7, #954500)',
    'warning-color-8': 'var(--l-warning-color-8, #713300)',
    'warning-color-9': 'var(--l-warning-color-9, #532300)',
    'warning-color-10': 'var(--l-warning-color-10, #3b1700)',

    'success-color-1': 'var(--l-success-color-1, #e3f9e9)',
    'success-color-2': 'var(--l-success-color-2, #c6f3d7)',
    'success-color-3': 'var(--l-success-color-3, #92dab2)',
    'success-color-4': 'var(--l-success-color-4, #56c08d)',
    'success-color-5': 'var(--l-success-color-5, #2ba471)',
    'success-color-6': 'var(--l-success-color-6, #008858)',
    'success-color-7': 'var(--l-success-color-7, #006c45)',
    'success-color-8': 'var(--l-success-color-8, #005334)',
    'success-color-9': 'var(--l-success-color-9, #003b23)',
    'success-color-10': 'var(--l-success-color-10, #002515)',

    'gray-color-1': 'var(--l-gray-color-1, #f3f3f3)',
    'gray-color-2': 'var(--l-gray-color-2, #eeeeee)',
    'gray-color-3': 'var(--l-gray-color-3, #e7e7e7)',
    'gray-color-4': 'var(--l-gray-color-4, #dcdcdc)',
    'gray-color-5': 'var(--l-gray-color-5, #c5c5c5)',
    'gray-color-6': 'var(--l-gray-color-6, #a6a6a6)',
    'gray-color-7': 'var(--l-gray-color-7, #8b8b8b)',
    'gray-color-8': 'var(--l-gray-color-8, #777777)',
    'gray-color-9': 'var(--l-gray-color-9, #5e5e5e)',
    'gray-color-10': 'var(--l-gray-color-10, #4b4b4b)',
    'gray-color-11': 'var(--l-gray-color-11, #383838)',
    'gray-color-12': 'var(--l-gray-color-12, #2c2c2c)',
    'gray-color-13': 'var(--l-gray-color-13, #242424)',
    'gray-color-14': 'var(--l-gray-color-14, #181818)',

    'font-gray-1': 'var(--l-font-gray-1, rgba(0, 0, 0, 0.9))',
    'font-gray-2': 'var(--l-font-gray-2, rgba(0, 0, 0, 0.6))',
    'font-gray-3': 'var(--l-font-gray-3, rgba(0, 0, 0, 0.4))',
    'font-gray-4': 'var(--l-font-gray-4, rgba(0, 0, 0, 0.26))',

    'font-white-1': 'var(--l-font-white-1, rgba(255, 255, 255, 1))',
    'font-white-2': 'var(--l-font-white-2, rgba(255, 255, 255, 0.55))',
    'font-white-3': 'var(--l-font-white-3, rgba(255, 255, 255, 0.35))',
    'font-white-4': 'var(--l-font-white-4, rgba(255, 255, 255, 0.22))',

    // 边框色
    'border-color': 'var(--l-border-color, var(--l-gray-color-3, #e7e7e7))',

    // Spacer
    'spacer': 'var(--l-spacer, 16rpx)',
    'spacer-1': 'var(--l-spacer-1, 24rpx)', // 间距-小-x
    'spacer-2': 'var(--l-spacer-2, 32rpx)', // 间距-小
    'spacer-3': 'var(--l-spacer-3, 48rpx)', // 间距-中
    'spacer-4': 'var(--l-spacer-4, 64rpx)', // 间距-大
    'spacer-5': 'var(--l-spacer-5, 96rpx)', // 间距-大-x
    'spacer-6': 'var(--l-spacer-6, 160rpx)', // 间距-大-xx

    // Font
    'font-size': 'var(--l-font-size, 20rpx)',
    'font-size-xs': 'var(--l-font-size-xs, var(--l-font-size, 20rpx))', // 字号-一级字号
    'font-size-s': 'var(--l-font-size-s, 24rpx)', // 字号-二级字号
    'font-size-base': 'var(--l-font-size-base, 28rpx)', // 字号-三级字号
    'font-size-m': 'var(--l-font-size-m, 32rpx)', // 字号-二级字号
    'font-size-l': 'var(--l-font-size-l, 40rpx)', // 字号-四级字号
    'font-size-xl': 'var(--l-font-size-xl, 72rpx)', // 字号-五级字号

    'font-family': 'var(--l-font-family, PingFang SC, Microsoft YaHei, Arial Regular)', // 字体-磅数-常规
    'font-family-medium': 'var(--l-font-family-medium, PingFang SC, Microsoft YaHei, Arial Medium)', // 字体-磅数-粗体

    // 圆角
    'radius-small': 'var(--l-radius-small, 6rpx)',
    'radius-default': 'var(--l-radius-default, 12rpx)',
    'radius-large': 'var(--l-radius-large, 18rpx)',
    'radius-extra-large': 'var(--l-radius-extra-large, 24rpx)',
    'radius-round': 'var(--l-radius-round, 999px)',
    'radius-circle': 'var(--l-radius-circle, 50%)',

    // 阴影
    'shadow-1':
      'var(--l-shadow-1,0 1px 10px rgba(0, 0, 0, 5%),0 4px 5px rgba(0, 0, 0, 8%),0 2px 4px -1px rgba(0, 0, 0, 12%))',
    'shadow-2':
      'var(--l-shadow-2,0 3px 14px 2px rgba(0, 0, 0, 5%),0 8px 10px 1px rgba(0, 0, 0, 6%),0 5px 5px -3px rgba(0, 0, 0, 10%))',
    'shadow-3':
      'var(--l-shadow-3,0 6px 30px 5px rgba(0, 0, 0, 5%),0 16px 24px 2px rgba(0, 0, 0, 4%),0 8px 10px -5px rgba(0, 0, 0, 8%))',
    'shadow-4': 'var(--l-shadow-4, 0 2px 8px 0 rgba(0, 0, 0, 0.06))',

    // 动画
    'anim-time-fn-easing': 'var(--l-anim-time-fn-easing, cubic-bezier(0.38, 0, 0.24, 1))',
    'anim-time-fn-ease-out': 'var(--l-anim-time-fn-ease-out, cubic-bezier(0, 0, 0.15, 1))',
    'anim-time-fn-ease-in': 'var(--l-anim-time-fn-ease-in, cubic-bezier(0.82, 0, 1, 0.9))',
    'anim-duration-base': 'var(--l-anim-duration-base, 0.2s)',
    'anim-duration-moderate': 'var(--l-anim-duration-moderate, 0.24s)',
    'anim-duration-slow': 'var(--l-anim-duration-slow, 0.28s)',

    // 容器
    'bg-color-page': 'var(--l-bg-color-page, var(--l-gray-color-1, #f3f3f3))', // 色彩 - page
    'bg-color-container': 'var(--l-bg-color-container, var(--l-font-white-1, rgba(255, 255, 255, 1)))', // 色彩 - 容器
    'bg-color-container-active': 'var(--l-bg-color-container-active, var(--l-gray-color-3, #e7e7e7))', // 色彩 - 容器 - active

    'bg-color-secondarycontainer': 'var(--l-bg-color-secondarycontainer, var(--l-gray-color-1, #f3f3f3))', // 色彩 - 次级容器
    'bg-color-secondarycontainer-active':
      'var(--l-bg-color-secondarycontainer-active, var(--l-gray-color-4, #dcdcdc))', // 色彩 - 次级容器 - active

    'bg-color-component': 'var(--l-bg-color-component, var(--l-gray-color-3, #e7e7e7))', // 色彩  - 组件
    'bg-color-component-active': 'var(--l-bg-color-component-active, var(--l-gray-color-6, #a6a6a6))', // 色彩 - 组件 - active
    'bg-color-component-disabled': 'var(--l-bg-color-component-disabled, var(--l-gray-color-2, #eeeeee))', // 色彩 - 组件 - disabled

    'bg-color-secondarycomponent': 'var(--l-bg-color-secondarycomponent, var(--l-gray-color-4, #dcdcdc))',
    'bg-color-secondarycomponent-active':
      'var(--l-bg-color-secondarycomponent-active, var(--l-gray-color-6, #a6a6a6))',

    'component-stroke': 'var(--l-component-stroke, var(--l-gray-color-3, #e7e7e7))',
    'component-border': 'var(--l-component-border, var(--l-gray-color-4, #dcdcdc))',

    // 主题
    'brand-color': 'var(--l-brand-color, var(--l-brand-color-7, #0052d9))',
    'brand-color-active': 'var(--l-brand-color-active, var(--l-brand-color-8, #003cab))',
    'brand-color-disabled': 'var(--l-brand-color-disabled, var(--l-brand-color-3, #b5c7ff))',
    'brand-color-focus': 'var(--l-brand-color-focus, var(--l-brand-color-1, #f2f3ff))',
    'brand-color-light': 'var(--l-brand-color-light, var(--l-brand-color-1, #f2f3ff))',
    'brand-color-light-active': 'var(--l-brand-color-light-active, var(--l-brand-color-2, #d9e1ff))',

    'error-color': 'var(--l-error-color, var(--l-error-color-6, #d54941))',
    'error-color-active': 'var(--l-error-color-active, var(--l-error-color-7, #ad352f))',
    'error-color-disabled': 'var(--l-error-color-disabled, var(--l-error-color-3, #ffb9b0))',
    'error-color-focus': 'var(--l-error-color-focus, var(--l-error-color-2, #ffd8d2))',
    'error-color-light': 'var(--l-error-color-light, var(--l-error-color-1, #fff0ed))',

    'warning-color': 'var(--l-warning-color, var(--l-warning-color-5, #e37318))',
    'warning-color-active': 'var(--l-warning-color-active,var(--l-warning-color-6, #be5a00))',
    'warning-color-disabled': 'var(--l-warning-color-disabled, var(--l-warning-color-3, #ffb98c))',
    'warning-color-focus': 'var(--l-warning-color-focus, var(--l-warning-color-2, #ffd9c2))',
    'warning-color-light': 'var(--l-warning-color-light, var(--l-warning-color-1, #fff1e9))',

    'success-color': 'var(--l-success-color, var(--l-success-color-5, #2ba471))',
    'success-color-active': 'var(--l-success-color-active, var(--l-success-color-6, #008858))',
    'success-color-disabled': 'var(--l-success-color-disabled, var(--l-success-color-3, #92dab2))',
    'success-color-focus': 'var(--l-success-color-focus, var(--l-success-color-2, #c6f3d7))',
    'success-color-light': 'var(--l-success-color-light, var(--l-success-color-1, #e3f9e9))',

    // 文字
    'text-color-primary': 'var(--l-text-color-primary, var(--l-font-gray-1, rgba(0, 0, 0, .9)))', // 色彩-文字-主要
    'text-color-secondary': 'var(--l-text-color-secondary, var(--l-font-gray-2, rgba(0, 0, 0, .6)))', // 色彩-文字-次要
    'text-color-placeholder': 'var(--l-text-color-placeholder, var(--l-font-gray-3, rgba(0, 0, 0, .4)))', // 色彩-文字-占位符/说明
    'text-color-disabled': 'var(--l-text-color-disabled, var(--l-font-gray-4, rgba(0, 0, 0, .26)))', // 色彩-文字-禁用
    'text-color-anti': 'var(--l-text-color-anti, var(--l-font-white-1, rgba(255, 255, 255, 1)))', // 色彩-文字-反色
    'text-color-brand': 'var(--l-text-color-brand, var(--l-brand-color, var(--l-brand-color-7, #0052d9)))', // 色彩-文字-品牌
    'text-color-link': 'var(--l-text-color-link, var(--l-brand-color, var(--l-brand-color-7, #0052d9)))', // 色彩-文字-链接

    // 定位
    'position-fixed-top': 'var(--l-position-fixed-top, 0)',
  },
})
