<script setup>
import { computed } from 'vue'

const props = defineProps({
  /** 图标颜色 */
  color: {
    type: String,
    default: '',
  },
  /** 图标名称 */
  name: {
    type: String,
    default: '',
    required: true,
  },
  /** 图标尺寸，支持 'small', 'medium', 'large'，'35px', '3em' 等 */
  size: {
    type: [String, Number],
    default: '',
  },
  /** 自定义图标前缀 */
  prefix: {
    type: String,
    default: undefined,
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
const emits = defineEmits(['click'])
const sizeWithUnit = computed(() => {
  return /^\d+(\.\d+)?$/.test(String(props.size)) ? `${props.size}px` : props.size
})
const computedStyle = computed(() => {
  return `${Object.keys(props.style).map(key => [key, props.style[key]].join(':')).join(';')};${props.customStyle};width:${sizeWithUnit.value};height:${sizeWithUnit.value};font-size:${sizeWithUnit.value};color:${props.color}`
})
const isImage = computed(() => {
  return props.name && props.name.includes('/')
})
function click(e) {
  emits('click', e.detail)
}
</script>

<template>
  <view
    :style="computedStyle"
    class="class l-class l"
    aria-hidden="ariaHidden"
    aria-label="ariaLabel"
    aria-role="ariaRole"
    @click="click"
  >
    <view v-if="isImage" class="l-icon--image h-1em w-1em">
      <image :src="props.name" mode="aspectFit" class="l-icon__image h-100% w-100% v-top" />
    </view>
    <label
      v-else
      class="l-icon l-icon-base variant-normal block font-normal lh-100% normal-case text-center font-not-italic antialiased"
      :class="`l-icon-${props.name}`"
    />
  </view>
</template>

<style scoped>
@font-face {
  font-family: l;
  font-style: normal;
  font-weight: normal;
  src:
    url('https://tdesign.gtimg.com/icon/0.2.0/fonts/t.eot'),
    url('https://tdesign.gtimg.com/icon/0.2.0/fonts/t.eot?#iefix')
      format('ded-opentype'),
    url('https://tdesign.gtimg.com/icon/0.2.0/fonts/t.woff') format('woff'),
    url('https://tdesign.gtimg.com/icon/0.2.0/fonts/t.ttf') format('truetype'),
    url('https://tdesign.gtimg.com/icon/0.2.0/fonts/t.svg') format('svg');
}

.l-icon {
  font-family: l !important;
}

.l-icon-activity::before {
  content: '\E001';
}

.l-icon-add-and-subtract::before {
  content: '\E002';
}

.l-icon-add-circle::before {
  content: '\E003';
}

.l-icon-add-rectangle::before {
  content: '\E004';
}

.l-icon-add::before {
  content: '\E005';
}

.l-icon-address-book::before {
  content: '\E006';
}

.l-icon-adjustment::before {
  content: '\E007';
}

.l-icon-airplay-wave::before {
  content: '\E008';
}

.l-icon-alarm-add::before {
  content: '\E009';
}

.l-icon-alarm-off::before {
  content: '\E00A';
}

.l-icon-alarm::before {
  content: '\E00B';
}

.l-icon-align-top::before {
  content: '\E00C';
}

.l-icon-align-vertical::before {
  content: '\E00D';
}

.l-icon-alpha::before {
  content: '\E00E';
}

.l-icon-analytics::before {
  content: '\E00F';
}

.l-icon-anchor::before {
  content: '\E010';
}

.l-icon-angry::before {
  content: '\E011';
}

.l-icon-animation-1::before {
  content: '\E012';
}

.l-icon-animation::before {
  content: '\E013';
}

.l-icon-anticlockwise::before {
  content: '\E014';
}

.l-icon-api::before {
  content: '\E015';
}

.l-icon-app::before {
  content: '\E016';
}

.l-icon-apple::before {
  content: '\E017';
}

.l-icon-application::before {
  content: '\E018';
}

.l-icon-architecture-hui-style::before {
  content: '\E019';
}

.l-icon-archway-1::before {
  content: '\E01A';
}

.l-icon-archway::before {
  content: '\E01B';
}

.l-icon-arrow-down-circle::before {
  content: '\E01C';
}

.l-icon-arrow-down-rectangle::before {
  content: '\E01D';
}

.l-icon-arrow-down::before {
  content: '\E01E';
}

.l-icon-arrow-left-circle::before {
  content: '\E01F';
}

.l-icon-arrow-left-down-circle::before {
  content: '\E020';
}

.l-icon-arrow-left-down::before {
  content: '\E021';
}

.l-icon-arrow-left-right-1::before {
  content: '\E022';
}

.l-icon-arrow-left-right-2::before {
  content: '\E023';
}

.l-icon-arrow-left-right-3::before {
  content: '\E024';
}

.l-icon-arrow-left-right-circle::before {
  content: '\E025';
}

.l-icon-arrow-left-up-circle::before {
  content: '\E026';
}

.l-icon-arrow-left-up::before {
  content: '\E027';
}

.l-icon-arrow-left::before {
  content: '\E028';
}

.l-icon-arrow-right-circle::before {
  content: '\E029';
}

.l-icon-arrow-right-down-circle::before {
  content: '\E02A';
}

.l-icon-arrow-right-down::before {
  content: '\E02B';
}

.l-icon-arrow-right-up-circle::before {
  content: '\E02C';
}

.l-icon-arrow-right-up::before {
  content: '\E02D';
}

.l-icon-arrow-right::before {
  content: '\E02E';
}

.l-icon-arrow-triangle-down-filled::before {
  content: '\E02F';
}

.l-icon-arrow-triangle-down::before {
  content: '\E030';
}

.l-icon-arrow-triangle-up-filled::before {
  content: '\E031';
}

.l-icon-arrow-triangle-up::before {
  content: '\E032';
}

.l-icon-arrow-up-circle::before {
  content: '\E033';
}

.l-icon-arrow-up-down-1::before {
  content: '\E034';
}

.l-icon-arrow-up-down-2::before {
  content: '\E035';
}

.l-icon-arrow-up-down-3::before {
  content: '\E036';
}

.l-icon-arrow-up-down-circle::before {
  content: '\E037';
}

.l-icon-arrow-up::before {
  content: '\E038';
}

.l-icon-artboard::before {
  content: '\E039';
}

.l-icon-article::before {
  content: '\E03A';
}

.l-icon-assignment-checked::before {
  content: '\E03B';
}

.l-icon-assignment-code::before {
  content: '\E03C';
}

.l-icon-assignment-error::before {
  content: '\E03D';
}

.l-icon-assignment-user::before {
  content: '\E03E';
}

.l-icon-assignment::before {
  content: '\E03F';
}

.l-icon-attach::before {
  content: '\E040';
}

.l-icon-attic-1::before {
  content: '\E041';
}

.l-icon-attic::before {
  content: '\E042';
}

.l-icon-audio::before {
  content: '\E043';
}

.l-icon-awkward::before {
  content: '\E044';
}

.l-icon-backtop-rectangle::before {
  content: '\E045';
}

.l-icon-backtop::before {
  content: '\E046';
}

.l-icon-backup::before {
  content: '\E047';
}

.l-icon-backward::before {
  content: '\E048';
}

.l-icon-bad-laugh::before {
  content: '\E049';
}

.l-icon-bamboo-shoot::before {
  content: '\E04A';
}

.l-icon-banana::before {
  content: '\E04B';
}

.l-icon-barbecue::before {
  content: '\E04C';
}

.l-icon-barcode-1::before {
  content: '\E04D';
}

.l-icon-barcode::before {
  content: '\E04E';
}

.l-icon-base-station::before {
  content: '\E04F';
}

.l-icon-battery-add::before {
  content: '\E050';
}

.l-icon-battery-charging::before {
  content: '\E051';
}

.l-icon-battery-low::before {
  content: '\E052';
}

.l-icon-battery::before {
  content: '\E053';
}

.l-icon-bean::before {
  content: '\E054';
}

.l-icon-beer::before {
  content: '\E055';
}

.l-icon-beta::before {
  content: '\E056';
}

.l-icon-bifurcate::before {
  content: '\E057';
}

.l-icon-bill::before {
  content: '\E058';
}

.l-icon-blockchain::before {
  content: '\E059';
}

.l-icon-bluetooth::before {
  content: '\E05A';
}

.l-icon-bone::before {
  content: '\E05B';
}

.l-icon-book-open::before {
  content: '\E05C';
}

.l-icon-book::before {
  content: '\E05D';
}

.l-icon-bookmark-add::before {
  content: '\E05E';
}

.l-icon-bookmark-checked::before {
  content: '\E05F';
}

.l-icon-bookmark-double::before {
  content: '\E060';
}

.l-icon-bookmark-minus::before {
  content: '\E061';
}

.l-icon-bookmark::before {
  content: '\E062';
}

.l-icon-braces::before {
  content: '\E063';
}

.l-icon-brackets::before {
  content: '\E064';
}

.l-icon-bread::before {
  content: '\E065';
}

.l-icon-bridge-1::before {
  content: '\E066';
}

.l-icon-bridge-2::before {
  content: '\E067';
}

.l-icon-bridge-3::before {
  content: '\E068';
}

.l-icon-bridge-4::before {
  content: '\E069';
}

.l-icon-bridge-5::before {
  content: '\E06A';
}

.l-icon-bridge-6::before {
  content: '\E06B';
}

.l-icon-bridge::before {
  content: '\E06C';
}

.l-icon-brightness-1::before {
  content: '\E06D';
}

.l-icon-brightness::before {
  content: '\E06E';
}

.l-icon-broccoli::before {
  content: '\E06F';
}

.l-icon-browse-gallery::before {
  content: '\E070';
}

.l-icon-browse-off::before {
  content: '\E071';
}

.l-icon-browse::before {
  content: '\E072';
}

.l-icon-brush::before {
  content: '\E073';
}

.l-icon-bug-report::before {
  content: '\E074';
}

.l-icon-bug::before {
  content: '\E075';
}

.l-icon-building-1::before {
  content: '\E076';
}

.l-icon-building-2::before {
  content: '\E077';
}

.l-icon-building-3::before {
  content: '\E078';
}

.l-icon-building-4::before {
  content: '\E079';
}

.l-icon-building-5::before {
  content: '\E07A';
}

.l-icon-building::before {
  content: '\E07B';
}

.l-icon-bulletpoint::before {
  content: '\E07C';
}

.l-icon-button::before {
  content: '\E07D';
}

.l-icon-cabbage::before {
  content: '\E07E';
}

.l-icon-cake::before {
  content: '\E07F';
}

.l-icon-calculation-1::before {
  content: '\E080';
}

.l-icon-calculation::before {
  content: '\E081';
}

.l-icon-calculator-1::before {
  content: '\E082';
}

.l-icon-calculator::before {
  content: '\E083';
}

.l-icon-calendar-1::before {
  content: '\E084';
}

.l-icon-calendar-2::before {
  content: '\E085';
}

.l-icon-calendar-edit::before {
  content: '\E086';
}

.l-icon-calendar-event::before {
  content: '\E087';
}

.l-icon-calendar::before {
  content: '\E088';
}

.l-icon-call-1::before {
  content: '\E089';
}

.l-icon-call-cancel::before {
  content: '\E08A';
}

.l-icon-call-forwarded::before {
  content: '\E08B';
}

.l-icon-call-incoming::before {
  content: '\E08C';
}

.l-icon-call-off::before {
  content: '\E08D';
}

.l-icon-call::before {
  content: '\E08E';
}

.l-icon-calm-1::before {
  content: '\E08F';
}

.l-icon-calm::before {
  content: '\E090';
}

.l-icon-camera-1::before {
  content: '\E091';
}

.l-icon-camera-2::before {
  content: '\E092';
}

.l-icon-camera-off::before {
  content: '\E093';
}

.l-icon-camera::before {
  content: '\E094';
}

.l-icon-candy::before {
  content: '\E095';
}

.l-icon-card::before {
  content: '\E096';
}

.l-icon-cardmembership::before {
  content: '\E097';
}

.l-icon-caret-down-small::before {
  content: '\E098';
}

.l-icon-caret-down::before {
  content: '\E099';
}

.l-icon-caret-left-small::before {
  content: '\E09A';
}

.l-icon-caret-left::before {
  content: '\E09B';
}

.l-icon-caret-right-small::before {
  content: '\E09C';
}

.l-icon-caret-right::before {
  content: '\E09D';
}

.l-icon-caret-up-small::before {
  content: '\E09E';
}

.l-icon-caret-up::before {
  content: '\E09F';
}

.l-icon-cart-add::before {
  content: '\E0A0';
}

.l-icon-cart::before {
  content: '\E0A1';
}

.l-icon-cast::before {
  content: '\E0A2';
}

.l-icon-castle-1::before {
  content: '\E0A3';
}

.l-icon-castle-2::before {
  content: '\E0A4';
}

.l-icon-castle-3::before {
  content: '\E0A5';
}

.l-icon-castle-4::before {
  content: '\E0A6';
}

.l-icon-castle-5::before {
  content: '\E0A7';
}

.l-icon-castle-6::before {
  content: '\E0A8';
}

.l-icon-castle-7::before {
  content: '\E0A9';
}

.l-icon-castle::before {
  content: '\E0AA';
}

.l-icon-cat::before {
  content: '\E0AB';
}

.l-icon-catalog::before {
  content: '\E0AC';
}

.l-icon-cd::before {
  content: '\E0AD';
}

.l-icon-celsius::before {
  content: '\E0AE';
}

.l-icon-center-focus-strong::before {
  content: '\E0AF';
}

.l-icon-centimeter::before {
  content: '\E0B0';
}

.l-icon-certificate-1::before {
  content: '\E0B1';
}

.l-icon-certificate::before {
  content: '\E0B2';
}

.l-icon-chart-3d::before {
  content: '\E0B3';
}

.l-icon-chart-add::before {
  content: '\E0B4';
}

.l-icon-chart-analytics::before {
  content: '\E0B5';
}

.l-icon-chart-area-multi::before {
  content: '\E0B6';
}

.l-icon-chart-area::before {
  content: '\E0B7';
}

.l-icon-chart-bar::before {
  content: '\E0B8';
}

.l-icon-chart-bubble::before {
  content: '\E0B9';
}

.l-icon-chart-colum::before {
  content: '\E0BA';
}

.l-icon-chart-combo::before {
  content: '\E0BB';
}

.l-icon-chart-line-data-1::before {
  content: '\E0BC';
}

.l-icon-chart-line-data::before {
  content: '\E0BD';
}

.l-icon-chart-line-multi::before {
  content: '\E0BE';
}

.l-icon-chart-line::before {
  content: '\E0BF';
}

.l-icon-chart-maximum::before {
  content: '\E0C0';
}

.l-icon-chart-median::before {
  content: '\E0C1';
}

.l-icon-chart-minimum::before {
  content: '\E0C2';
}

.l-icon-chart-pie::before {
  content: '\E0C3';
}

.l-icon-chart-radar::before {
  content: '\E0C4';
}

.l-icon-chart-radial::before {
  content: '\E0C5';
}

.l-icon-chart-ring-1::before {
  content: '\E0C6';
}

.l-icon-chart-ring::before {
  content: '\E0C7';
}

.l-icon-chart-scatter::before {
  content: '\E0C8';
}

.l-icon-chart-stacked::before {
  content: '\E0C9';
}

.l-icon-chart::before {
  content: '\E0CA';
}

.l-icon-chat-add::before {
  content: '\E0CB';
}

.l-icon-chat-bubble-1::before {
  content: '\E0CC';
}

.l-icon-chat-bubble-add::before {
  content: '\E0CD';
}

.l-icon-chat-bubble-error::before {
  content: '\E0CE';
}

.l-icon-chat-bubble-help::before {
  content: '\E0CF';
}

.l-icon-chat-bubble-history::before {
  content: '\E0D0';
}

.l-icon-chat-bubble-locked::before {
  content: '\E0D1';
}

.l-icon-chat-bubble-smile::before {
  content: '\E0D2';
}

.l-icon-chat-bubble::before {
  content: '\E0D3';
}

.l-icon-chat-checked::before {
  content: '\E0D4';
}

.l-icon-chat-clear::before {
  content: '\E0D5';
}

.l-icon-chat-double::before {
  content: '\E0D6';
}

.l-icon-chat-error::before {
  content: '\E0D7';
}

.l-icon-chat-heart::before {
  content: '\E0D8';
}

.l-icon-chat-message::before {
  content: '\E0D9';
}

.l-icon-chat-off::before {
  content: '\E0DA';
}

.l-icon-chat-poll::before {
  content: '\E0DB';
}

.l-icon-chat-setting::before {
  content: '\E0DC';
}

.l-icon-chat::before {
  content: '\E0DD';
}

.l-icon-check-circle-filled::before {
  content: '\E0DE';
}

.l-icon-check-circle::before {
  content: '\E0DF';
}

.l-icon-check-double::before {
  content: '\E0E0';
}

.l-icon-check-rectangle-filled::before {
  content: '\E0E1';
}

.l-icon-check-rectangle::before {
  content: '\E0E2';
}

.l-icon-check::before {
  content: '\E0E3';
}

.l-icon-cheese::before {
  content: '\E0E4';
}

.l-icon-cherry::before {
  content: '\E0E5';
}

.l-icon-chevron-down-circle::before {
  content: '\E0E6';
}

.l-icon-chevron-down-double-s::before {
  content: '\E0E7';
}

.l-icon-chevron-down-double::before {
  content: '\E0E8';
}

.l-icon-chevron-down-rectangle::before {
  content: '\E0E9';
}

.l-icon-chevron-down-s::before {
  content: '\E0EA';
}

.l-icon-chevron-down::before {
  content: '\E0EB';
}

.l-icon-chevron-left-circle::before {
  content: '\E0EC';
}

.l-icon-chevron-left-double-s::before {
  content: '\E0ED';
}

.l-icon-chevron-left-double::before {
  content: '\E0EE';
}

.l-icon-chevron-left-rectangle::before {
  content: '\E0EF';
}

.l-icon-chevron-left-s::before {
  content: '\E0F0';
}

.l-icon-chevron-left::before {
  content: '\E0F1';
}

.l-icon-chevron-right-circle::before {
  content: '\E0F2';
}

.l-icon-chevron-right-double-s::before {
  content: '\E0F3';
}

.l-icon-chevron-right-double::before {
  content: '\E0F4';
}

.l-icon-chevron-right-rectangle::before {
  content: '\E0F5';
}

.l-icon-chevron-right-s::before {
  content: '\E0F6';
}

.l-icon-chevron-right::before {
  content: '\E0F7';
}

.l-icon-chevron-up-circle::before {
  content: '\E0F8';
}

.l-icon-chevron-up-double-s::before {
  content: '\E0F9';
}

.l-icon-chevron-up-double::before {
  content: '\E0FA';
}

.l-icon-chevron-up-rectangle::before {
  content: '\E0FB';
}

.l-icon-chevron-up-s::before {
  content: '\E0FC';
}

.l-icon-chevron-up::before {
  content: '\E0FD';
}

.l-icon-chicken::before {
  content: '\E0FE';
}

.l-icon-chili::before {
  content: '\E0FF';
}

.l-icon-chimney-1::before {
  content: '\E100';
}

.l-icon-chimney-2::before {
  content: '\E101';
}

.l-icon-chimney::before {
  content: '\E102';
}

.l-icon-chinese-cabbage::before {
  content: '\E103';
}

.l-icon-church::before {
  content: '\E104';
}

.l-icon-circle::before {
  content: '\E105';
}

.l-icon-city-1::before {
  content: '\E106';
}

.l-icon-city-10::before {
  content: '\E107';
}

.l-icon-city-11::before {
  content: '\E108';
}

.l-icon-city-12::before {
  content: '\E109';
}

.l-icon-city-13::before {
  content: '\E10A';
}

.l-icon-city-14::before {
  content: '\E10B';
}

.l-icon-city-15::before {
  content: '\E10C';
}

.l-icon-city-2::before {
  content: '\E10D';
}

.l-icon-city-3::before {
  content: '\E10E';
}

.l-icon-city-4::before {
  content: '\E10F';
}

.l-icon-city-5::before {
  content: '\E110';
}

.l-icon-city-6::before {
  content: '\E111';
}

.l-icon-city-7::before {
  content: '\E112';
}

.l-icon-city-8::before {
  content: '\E113';
}

.l-icon-city-9::before {
  content: '\E114';
}

.l-icon-city-ancient-1::before {
  content: '\E115';
}

.l-icon-city-ancient-2::before {
  content: '\E116';
}

.l-icon-city-ancient::before {
  content: '\E117';
}

.l-icon-city::before {
  content: '\E118';
}

.l-icon-clear-formatting-1::before {
  content: '\E119';
}

.l-icon-clear-formatting::before {
  content: '\E11A';
}

.l-icon-clear::before {
  content: '\E11B';
}

.l-icon-close-circle-filled::before {
  content: '\E11C';
}

.l-icon-close-circle::before {
  content: '\E11D';
}

.l-icon-close-octagon::before {
  content: '\E11E';
}

.l-icon-close-rectangle::before {
  content: '\E11F';
}

.l-icon-close::before {
  content: '\E120';
}

.l-icon-cloud-download::before {
  content: '\E121';
}

.l-icon-cloud-upload::before {
  content: '\E122';
}

.l-icon-cloud::before {
  content: '\E123';
}

.l-icon-cloudy-day::before {
  content: '\E124';
}

.l-icon-cloudy-night-rain::before {
  content: '\E125';
}

.l-icon-cloudy-night::before {
  content: '\E126';
}

.l-icon-cloudy-rain::before {
  content: '\E127';
}

.l-icon-cloudy-sunny::before {
  content: '\E128';
}

.l-icon-code-1::before {
  content: '\E129';
}

.l-icon-code-off::before {
  content: '\E12A';
}

.l-icon-code::before {
  content: '\E12B';
}

.l-icon-cola::before {
  content: '\E12C';
}

.l-icon-collage::before {
  content: '\E12D';
}

.l-icon-collection::before {
  content: '\E12E';
}

.l-icon-color-invert::before {
  content: '\E12F';
}

.l-icon-combination::before {
  content: '\E130';
}

.l-icon-command::before {
  content: '\E131';
}

.l-icon-compass-1::before {
  content: '\E132';
}

.l-icon-compass::before {
  content: '\E133';
}

.l-icon-component-breadcrumb::before {
  content: '\E134';
}

.l-icon-component-checkbox::before {
  content: '\E135';
}

.l-icon-component-divider-horizontal::before {
  content: '\E136';
}

.l-icon-component-divider-vertical::before {
  content: '\E137';
}

.l-icon-component-dropdown::before {
  content: '\E138';
}

.l-icon-component-grid::before {
  content: '\E139';
}

.l-icon-component-input::before {
  content: '\E13A';
}

.l-icon-component-layout::before {
  content: '\E13B';
}

.l-icon-componen l-radio::before {
  content: '\E13C';
}

.l-icon-component-space::before {
  content: '\E13D';
}

.l-icon-component-steps::before {
  content: '\E13E';
}

.l-icon-component-switch::before {
  content: '\E13F';
}

.l-icon-constraint::before {
  content: '\E140';
}

.l-icon-contrast-1::before {
  content: '\E141';
}

.l-icon-contrast::before {
  content: '\E142';
}

.l-icon-control-platform::before {
  content: '\E143';
}

.l-icon-cooperate::before {
  content: '\E144';
}

.l-icon-coordinate-system::before {
  content: '\E145';
}

.l-icon-copy::before {
  content: '\E146';
}

.l-icon-copyright::before {
  content: '\E147';
}

.l-icon-corn::before {
  content: '\E148';
}

.l-icon-coupon::before {
  content: '\E149';
}

.l-icon-course::before {
  content: '\E14A';
}

.l-icon-cpu::before {
  content: '\E14B';
}

.l-icon-crack::before {
  content: '\E14C';
}

.l-icon-creditcard-add::before {
  content: '\E14D';
}

.l-icon-creditcard-off::before {
  content: '\E14E';
}

.l-icon-creditcard::before {
  content: '\E14F';
}

.l-icon-crooked-smile::before {
  content: '\E150';
}

.l-icon-cry-and-laugh::before {
  content: '\E151';
}

.l-icon-cry-loudly::before {
  content: '\E152';
}

.l-icon-css3::before {
  content: '\E153';
}

.l-icon-cucumber::before {
  content: '\E154';
}

.l-icon-currency-exchange::before {
  content: '\E155';
}

.l-icon-cursor::before {
  content: '\E156';
}

.l-icon-curtain::before {
  content: '\E157';
}

.l-icon-curve::before {
  content: '\E158';
}

.l-icon-cut-1::before {
  content: '\E159';
}

.l-icon-cut::before {
  content: '\E15A';
}

.l-icon-dam-1::before {
  content: '\E15B';
}

.l-icon-dam-2::before {
  content: '\E15C';
}

.l-icon-dam-3::before {
  content: '\E15D';
}

.l-icon-dam-4::before {
  content: '\E15E';
}

.l-icon-dam-5::before {
  content: '\E15F';
}

.l-icon-dam-6::before {
  content: '\E160';
}

.l-icon-dam-7::before {
  content: '\E161';
}

.l-icon-dam::before {
  content: '\E162';
}

.l-icon-dart-board::before {
  content: '\E163';
}

.l-icon-dashboard-1::before {
  content: '\E164';
}

.l-icon-dashboard::before {
  content: '\E165';
}

.l-icon-data-base::before {
  content: '\E166';
}

.l-icon-data-checked::before {
  content: '\E167';
}

.l-icon-data-display::before {
  content: '\E168';
}

.l-icon-data-error::before {
  content: '\E169';
}

.l-icon-data-search::before {
  content: '\E16A';
}

.l-icon-data::before {
  content: '\E16B';
}

.l-icon-delete-1::before {
  content: '\E16C';
}

.l-icon-delete-time::before {
  content: '\E16D';
}

.l-icon-delete::before {
  content: '\E16E';
}

.l-icon-delta::before {
  content: '\E16F';
}

.l-icon-depressed::before {
  content: '\E170';
}

.l-icon-desktop-1::before {
  content: '\E171';
}

.l-icon-desktop::before {
  content: '\E172';
}

.l-icon-despise::before {
  content: '\E173';
}

.l-icon-device::before {
  content: '\E174';
}

.l-icon-discount-filled::before {
  content: '\E175';
}

.l-icon-discount::before {
  content: '\E176';
}

.l-icon-dissatisfaction::before {
  content: '\E177';
}

.l-icon-divide::before {
  content: '\E178';
}

.l-icon-dividers-1::before {
  content: '\E179';
}

.l-icon-dividers::before {
  content: '\E17A';
}

.l-icon-doge::before {
  content: '\E17B';
}

.l-icon-double-storey::before {
  content: '\E17C';
}

.l-icon-download-1::before {
  content: '\E17D';
}

.l-icon-download::before {
  content: '\E17E';
}

.l-icon-downscale::before {
  content: '\E17F';
}

.l-icon-drag-drop::before {
  content: '\E180';
}

.l-icon-drag-move::before {
  content: '\E181';
}

.l-icon-drink::before {
  content: '\E182';
}

.l-icon-drumstick::before {
  content: '\E183';
}

.l-icon-dv::before {
  content: '\E184';
}

.l-icon-dvd::before {
  content: '\E185';
}

.l-icon-earphone::before {
  content: '\E186';
}

.l-icon-earth::before {
  content: '\E187';
}

.l-icon-edit-1::before {
  content: '\E188';
}

.l-icon-edit-2::before {
  content: '\E189';
}

.l-icon-edit-off::before {
  content: '\E18A';
}

.l-icon-edit::before {
  content: '\E18B';
}

.l-icon-education::before {
  content: '\E18C';
}

.l-icon-eggplant::before {
  content: '\E18D';
}

.l-icon-ellipsis::before {
  content: '\E18E';
}

.l-icon-emo-emotional::before {
  content: '\E18F';
}

.l-icon-enter::before {
  content: '\E190';
}

.l-icon-equal::before {
  content: '\E191';
}

.l-icon-error-circle-filled::before {
  content: '\E192';
}

.l-icon-error-circle::before {
  content: '\E193';
}

.l-icon-error-triangle::before {
  content: '\E194';
}

.l-icon-error::before {
  content: '\E195';
}

.l-icon-excited-1::before {
  content: '\E196';
}

.l-icon-excited::before {
  content: '\E197';
}

.l-icon-expand-horizontal::before {
  content: '\E198';
}

.l-icon-expand-vertical::before {
  content: '\E199';
}

.l-icon-explore-off::before {
  content: '\E19A';
}

.l-icon-explore::before {
  content: '\E19B';
}

.l-icon-exposure::before {
  content: '\E19C';
}

.l-icon-extension-off::before {
  content: '\E19D';
}

.l-icon-extension::before {
  content: '\E19E';
}

.l-icon-face-retouching::before {
  content: '\E19F';
}

.l-icon-fact-check::before {
  content: '\E1A0';
}

.l-icon-fahrenheit-scale::before {
  content: '\E1A1';
}

.l-icon-feel-at-ease::before {
  content: '\E1A2';
}

.l-icon-ferocious::before {
  content: '\E1A3';
}

.l-icon-ferris-wheel::before {
  content: '\E1A4';
}

.l-icon-file-1::before {
  content: '\E1A5';
}

.l-icon-file-add-1::before {
  content: '\E1A6';
}

.l-icon-file-add::before {
  content: '\E1A7';
}

.l-icon-file-attachment::before {
  content: '\E1A8';
}

.l-icon-file-blocked::before {
  content: '\E1A9';
}

.l-icon-file-code-1::before {
  content: '\E1AA';
}

.l-icon-file-code::before {
  content: '\E1AB';
}

.l-icon-file-copy::before {
  content: '\E1AC';
}

.l-icon-file-download::before {
  content: '\E1AD';
}

.l-icon-file-excel::before {
  content: '\E1AE';
}

.l-icon-file-export::before {
  content: '\E1AF';
}

.l-icon-file-icon::before {
  content: '\E1B0';
}

.l-icon-file-image::before {
  content: '\E1B1';
}

.l-icon-file-import::before {
  content: '\E1B2';
}

.l-icon-file-locked::before {
  content: '\E1B3';
}

.l-icon-file-minus::before {
  content: '\E1B4';
}

.l-icon-file-music::before {
  content: '\E1B5';
}

.l-icon-file-onenote::before {
  content: '\E1B6';
}

.l-icon-file-outlook::before {
  content: '\E1B7';
}

.l-icon-file-paste::before {
  content: '\E1B8';
}

.l-icon-file-pdf::before {
  content: '\E1B9';
}

.l-icon-file-powerpoint::before {
  content: '\E1BA';
}

.l-icon-file-restore::before {
  content: '\E1BB';
}

.l-icon-file-safety::before {
  content: '\E1BC';
}

.l-icon-file-search::before {
  content: '\E1BD';
}

.l-icon-file-setting::before {
  content: '\E1BE';
}

.l-icon-file-teams::before {
  content: '\E1BF';
}

.l-icon-file-unknown::before {
  content: '\E1C0';
}

.l-icon-file-unlocked::before {
  content: '\E1C1';
}

.l-icon-file-word::before {
  content: '\E1C2';
}

.l-icon-file-zip::before {
  content: '\E1C3';
}

.l-icon-file::before {
  content: '\E1C4';
}

.l-icon-fill-color-1::before {
  content: '\E1C5';
}

.l-icon-fill-color::before {
  content: '\E1C6';
}

.l-icon-film-1::before {
  content: '\E1C7';
}

.l-icon-film::before {
  content: '\E1C8';
}

.l-icon-filter-1::before {
  content: '\E1C9';
}

.l-icon-filter-2::before {
  content: '\E1CA';
}

.l-icon-filter-3::before {
  content: '\E1CB';
}

.l-icon-filter-clear::before {
  content: '\E1CC';
}

.l-icon-filter-off::before {
  content: '\E1CD';
}

.l-icon-filter::before {
  content: '\E1CE';
}

.l-icon-fingerprint-1::before {
  content: '\E1CF';
}

.l-icon-fingerprint-2::before {
  content: '\E1D0';
}

.l-icon-fingerprint-3::before {
  content: '\E1D1';
}

.l-icon-fingerprint::before {
  content: '\E1D2';
}

.l-icon-fish::before {
  content: '\E1D3';
}

.l-icon-flag-1::before {
  content: '\E1D4';
}

.l-icon-flag-2::before {
  content: '\E1D5';
}

.l-icon-flag-3::before {
  content: '\E1D6';
}

.l-icon-flag-4::before {
  content: '\E1D7';
}

.l-icon-flag::before {
  content: '\E1D8';
}

.l-icon-flashlight::before {
  content: '\E1D9';
}

.l-icon-flight-landing::before {
  content: '\E1DA';
}

.l-icon-flight-takeoff::before {
  content: '\E1DB';
}

.l-icon-flip-smiling-face::before {
  content: '\E1DC';
}

.l-icon-flip-to-back::before {
  content: '\E1DD';
}

.l-icon-flip-to-front::before {
  content: '\E1DE';
}

.l-icon-focus::before {
  content: '\E1DF';
}

.l-icon-fog-night::before {
  content: '\E1E0';
}

.l-icon-fog-sunny::before {
  content: '\E1E1';
}

.l-icon-fog::before {
  content: '\E1E2';
}

.l-icon-folder-1::before {
  content: '\E1E3';
}

.l-icon-folder-add-1::before {
  content: '\E1E4';
}

.l-icon-folder-add::before {
  content: '\E1E5';
}

.l-icon-folder-blocked::before {
  content: '\E1E6';
}

.l-icon-folder-details::before {
  content: '\E1E7';
}

.l-icon-folder-export::before {
  content: '\E1E8';
}

.l-icon-folder-import::before {
  content: '\E1E9';
}

.l-icon-folder-locked::before {
  content: '\E1EA';
}

.l-icon-folder-minus::before {
  content: '\E1EB';
}

.l-icon-folder-move::before {
  content: '\E1EC';
}

.l-icon-folder-off::before {
  content: '\E1ED';
}

.l-icon-folder-open-1::before {
  content: '\E1EE';
}

.l-icon-folder-open::before {
  content: '\E1EF';
}

.l-icon-folder-search::before {
  content: '\E1F0';
}

.l-icon-folder-setting::before {
  content: '\E1F1';
}

.l-icon-folder-shared::before {
  content: '\E1F2';
}

.l-icon-folder-unlocked::before {
  content: '\E1F3';
}

.l-icon-folder-zip::before {
  content: '\E1F4';
}

.l-icon-folder::before {
  content: '\E1F5';
}

.l-icon-forest::before {
  content: '\E1F6';
}

.l-icon-fork::before {
  content: '\E1F7';
}

.l-icon-form::before {
  content: '\E1F8';
}

.l-icon-format-horizontal-align-bottom::before {
  content: '\E1F9';
}

.l-icon-format-horizontal-align-center::before {
  content: '\E1FA';
}

.l-icon-format-horizontal-align-top::before {
  content: '\E1FB';
}

.l-icon-format-vertical-align-center::before {
  content: '\E1FC';
}

.l-icon-format-vertical-align-left::before {
  content: '\E1FD';
}

.l-icon-format-vertical-align-right::before {
  content: '\E1FE';
}

.l-icon-forward::before {
  content: '\E1FF';
}

.l-icon-frame-1::before {
  content: '\E200';
}

.l-icon-frame::before {
  content: '\E201';
}

.l-icon-fries::before {
  content: '\E202';
}

.l-icon-fullscreen-1::before {
  content: '\E203';
}

.l-icon-fullscreen-2::before {
  content: '\E204';
}

.l-icon-fullscreen-exit-1::before {
  content: '\E205';
}

.l-icon-fullscreen-exit::before {
  content: '\E206';
}

.l-icon-fullscreen::before {
  content: '\E207';
}

.l-icon-function-curve::before {
  content: '\E208';
}

.l-icon-functions-1::before {
  content: '\E209';
}

.l-icon-functions::before {
  content: '\E20A';
}

.l-icon-gamepad-1::before {
  content: '\E20B';
}

.l-icon-gamepad::before {
  content: '\E20C';
}

.l-icon-gamma::before {
  content: '\E20D';
}

.l-icon-garlic::before {
  content: '\E20E';
}

.l-icon-gender-female::before {
  content: '\E20F';
}

.l-icon-gender-male::before {
  content: '\E210';
}

.l-icon-gesture-applause::before {
  content: '\E211';
}

.l-icon-gesture-click::before {
  content: '\E212';
}

.l-icon-gesture-down::before {
  content: '\E213';
}

.l-icon-gesture-expansion::before {
  content: '\E214';
}

.l-icon-gesture-left-slip::before {
  content: '\E215';
}

.l-icon-gesture-left::before {
  content: '\E216';
}

.l-icon-gesture-pray-1::before {
  content: '\E217';
}

.l-icon-gesture-pray::before {
  content: '\E218';
}

.l-icon-gesture-press::before {
  content: '\E219';
}

.l-icon-gesture-ranslation-1::before {
  content: '\E21A';
}

.l-icon-gesture-ranslation::before {
  content: '\E21B';
}

.l-icon-gesture-right-slip::before {
  content: '\E21C';
}

.l-icon-gesture-right::before {
  content: '\E21D';
}

.l-icon-gesture-slide-up::before {
  content: '\E21E';
}

.l-icon-gesture-up-1::before {
  content: '\E21F';
}

.l-icon-gesture-up-2::before {
  content: '\E220';
}

.l-icon-gesture-up-and-down::before {
  content: '\E221';
}

.l-icon-gesture-up::before {
  content: '\E222';
}

.l-icon-gesture-wipe-down::before {
  content: '\E223';
}

.l-icon-gift::before {
  content: '\E224';
}

.l-icon-giggle::before {
  content: '\E225';
}

.l-icon-git-branch::before {
  content: '\E226';
}

.l-icon-git-commit::before {
  content: '\E227';
}

.l-icon-git-merge::before {
  content: '\E228';
}

.l-icon-git-pull-request::before {
  content: '\E229';
}

.l-icon-git-repository-commits::before {
  content: '\E22A';
}

.l-icon-git-repository-private::before {
  content: '\E22B';
}

.l-icon-git-repository::before {
  content: '\E22C';
}

.l-icon-gps::before {
  content: '\E22D';
}

.l-icon-grape::before {
  content: '\E22E';
}

.l-icon-greater-than-or-equal::before {
  content: '\E22F';
}

.l-icon-greater-than::before {
  content: '\E230';
}

.l-icon-green-onion::before {
  content: '\E231';
}

.l-icon-grid-add::before {
  content: '\E232';
}

.l-icon-grid-view::before {
  content: '\E233';
}

.l-icon-guitar::before {
  content: '\E234';
}

.l-icon-hamburger::before {
  content: '\E235';
}

.l-icon-happy::before {
  content: '\E236';
}

.l-icon-hard-disk-storage::before {
  content: '\E237';
}

.l-icon-hard-drive::before {
  content: '\E238';
}

.l-icon-hashtag::before {
  content: '\E239';
}

.l-icon-hd::before {
  content: '\E23A';
}

.l-icon-heart-filled::before {
  content: '\E23B';
}

.l-icon-heart::before {
  content: '\E23C';
}

.l-icon-help-circle-filled::before {
  content: '\E23D';
}

.l-icon-help-circle::before {
  content: '\E23E';
}

.l-icon-help-rectangle::before {
  content: '\E23F';
}

.l-icon-help::before {
  content: '\E240';
}

.l-icon-highlight-1::before {
  content: '\E241';
}

.l-icon-highlight::before {
  content: '\E242';
}

.l-icon-history-setting::before {
  content: '\E243';
}

.l-icon-history::before {
  content: '\E244';
}

.l-icon-home::before {
  content: '\E245';
}

.l-icon-hospital-1::before {
  content: '\E246';
}

.l-icon-hospital::before {
  content: '\E247';
}

.l-icon-hotspot-wave::before {
  content: '\E248';
}

.l-icon-hourglass::before {
  content: '\E249';
}

.l-icon-houses-1::before {
  content: '\E24A';
}

.l-icon-houses-2::before {
  content: '\E24B';
}

.l-icon-houses::before {
  content: '\E24C';
}

.l-icon-html5::before {
  content: '\E24D';
}

.l-icon-https::before {
  content: '\E24E';
}

.l-icon-ice-cream::before {
  content: '\E24F';
}

.l-icon-icon::before {
  content: '\E250';
}

.l-icon-image-1::before {
  content: '\E251';
}

.l-icon-image-add::before {
  content: '\E252';
}

.l-icon-image-edit::before {
  content: '\E253';
}

.l-icon-image-error::before {
  content: '\E254';
}

.l-icon-image-off::before {
  content: '\E255';
}

.l-icon-image-search::before {
  content: '\E256';
}

.l-icon-image::before {
  content: '\E257';
}

.l-icon-indent-left::before {
  content: '\E258';
}

.l-icon-indent-right::before {
  content: '\E259';
}

.l-icon-indicator::before {
  content: '\E25A';
}

.l-icon-info-circle-filled::before {
  content: '\E25B';
}

.l-icon-info-circle::before {
  content: '\E25C';
}

.l-icon-ink::before {
  content: '\E25D';
}

.l-icon-install-desktop::before {
  content: '\E25E';
}

.l-icon-install-mobile::before {
  content: '\E25F';
}

.l-icon-install::before {
  content: '\E260';
}

.l-icon-institution-checked::before {
  content: '\E261';
}

.l-icon-institution::before {
  content: '\E262';
}

.l-icon-internet::before {
  content: '\E263';
}

.l-icon-ipod::before {
  content: '\E264';
}

.l-icon-joyful::before {
  content: '\E265';
}

.l-icon-jump-off::before {
  content: '\E266';
}

.l-icon-jump::before {
  content: '\E267';
}

.l-icon-keyboard::before {
  content: '\E268';
}

.l-icon-laptop::before {
  content: '\E269';
}

.l-icon-layers::before {
  content: '\E26A';
}

.l-icon-layout::before {
  content: '\E26B';
}

.l-icon-leaderboard::before {
  content: '\E26C';
}

.l-icon-lemon-slice::before {
  content: '\E26D';
}

.l-icon-lemon::before {
  content: '\E26E';
}

.l-icon-less-than-or-equal::before {
  content: '\E26F';
}

.l-icon-less-than::before {
  content: '\E270';
}

.l-icon-letters-a::before {
  content: '\E271';
}

.l-icon-letters-b::before {
  content: '\E272';
}

.l-icon-letters-c::before {
  content: '\E273';
}

.l-icon-letters-d::before {
  content: '\E274';
}

.l-icon-letters-e::before {
  content: '\E275';
}

.l-icon-letters-f::before {
  content: '\E276';
}

.l-icon-letters-g::before {
  content: '\E277';
}

.l-icon-letters-h::before {
  content: '\E278';
}

.l-icon-letters-i::before {
  content: '\E279';
}

.l-icon-letters-j::before {
  content: '\E27A';
}

.l-icon-letters-k::before {
  content: '\E27B';
}

.l-icon-letters-l::before {
  content: '\E27C';
}

.l-icon-letters-m::before {
  content: '\E27D';
}

.l-icon-letters-n::before {
  content: '\E27E';
}

.l-icon-letters-o::before {
  content: '\E27F';
}

.l-icon-letters-p::before {
  content: '\E280';
}

.l-icon-letters-q::before {
  content: '\E281';
}

.l-icon-letters-r::before {
  content: '\E282';
}

.l-icon-letters-s::before {
  content: '\E283';
}

.l-icon-letters-t::before {
  content: '\E284';
}

.l-icon-letters-u::before {
  content: '\E285';
}

.l-icon-letters-v::before {
  content: '\E286';
}

.l-icon-letters-w::before {
  content: '\E287';
}

.l-icon-letters-x::before {
  content: '\E288';
}

.l-icon-letters-y::before {
  content: '\E289';
}

.l-icon-letters-z::before {
  content: '\E28A';
}

.l-icon-lightbulb-circle::before {
  content: '\E28B';
}

.l-icon-lightbulb::before {
  content: '\E28C';
}

.l-icon-lighthouse-1::before {
  content: '\E28D';
}

.l-icon-lighthouse-2::before {
  content: '\E28E';
}

.l-icon-lighthouse::before {
  content: '\E28F';
}

.l-icon-lighting-circle::before {
  content: '\E290';
}

.l-icon-line-height::before {
  content: '\E291';
}

.l-icon-link-1::before {
  content: '\E292';
}

.l-icon-link-unlink::before {
  content: '\E293';
}

.l-icon-link::before {
  content: '\E294';
}

.l-icon-liquor::before {
  content: '\E295';
}

.l-icon-list::before {
  content: '\E296';
}

.l-icon-load::before {
  content: '\E297';
}

.l-icon-loading::before {
  content: '\E298';
}

.l-icon-location-1::before {
  content: '\E299';
}

.l-icon-location-enlargement::before {
  content: '\E29A';
}

.l-icon-location-error::before {
  content: '\E29B';
}

.l-icon-location-parking-place::before {
  content: '\E29C';
}

.l-icon-location-reduction::before {
  content: '\E29D';
}

.l-icon-location-setting::before {
  content: '\E29E';
}

.l-icon-location::before {
  content: '\E29F';
}

.l-icon-lock-off::before {
  content: '\E2A0';
}

.l-icon-lock-on::before {
  content: '\E2A1';
}

.l-icon-lock-time::before {
  content: '\E2A2';
}

.l-icon-login::before {
  content: '\E2A3';
}

.l-icon-logo-adobe-illustrate::before {
  content: '\E2A4';
}

.l-icon-logo-adobe-photoshop-1::before {
  content: '\E2A5';
}

.l-icon-logo-adobe-photoshop::before {
  content: '\E2A6';
}

.l-icon-logo-android::before {
  content: '\E2A7';
}

.l-icon-logo-apple-filled::before {
  content: '\E2A8';
}

.l-icon-logo-apple::before {
  content: '\E2A9';
}

.l-icon-logo-behance::before {
  content: '\E2AA';
}

.l-icon-logo-chrome-filled::before {
  content: '\E2AB';
}

.l-icon-logo-chrome::before {
  content: '\E2AC';
}

.l-icon-logo-cinema4d::before {
  content: '\E2AD';
}

.l-icon-logo-codepen::before {
  content: '\E2AE';
}

.l-icon-logo-codesandbox::before {
  content: '\E2AF';
}

.l-icon-logo-dribbble::before {
  content: '\E2B0';
}

.l-icon-logo-facebook::before {
  content: '\E2B1';
}

.l-icon-logo-figma::before {
  content: '\E2B2';
}

.l-icon-logo-framer::before {
  content: '\E2B3';
}

.l-icon-logo-github-filled::before {
  content: '\E2B4';
}

.l-icon-logo-github::before {
  content: '\E2B5';
}

.l-icon-logo-gitlab::before {
  content: '\E2B6';
}

.l-icon-logo-ie-filled::before {
  content: '\E2B7';
}

.l-icon-logo-ie::before {
  content: '\E2B8';
}

.l-icon-logo-instagram::before {
  content: '\E2B9';
}

.l-icon-logo-qq::before {
  content: '\E2BA';
}

.l-icon-logo-twitter::before {
  content: '\E2BB';
}

.l-icon-logo-wechat-stroke::before {
  content: '\E2BC';
}

.l-icon-logo-wechat::before {
  content: '\E2BD';
}

.l-icon-logo-wecom::before {
  content: '\E2BE';
}

.l-icon-logo-windows-filled::before {
  content: '\E2BF';
}

.l-icon-logo-windows::before {
  content: '\E2C0';
}

.l-icon-logo-youtube::before {
  content: '\E2C1';
}

.l-icon-logout::before {
  content: '\E2C2';
}

.l-icon-look-around::before {
  content: '\E2C3';
}

.l-icon-loudspeaker::before {
  content: '\E2C4';
}

.l-icon-mail::before {
  content: '\E2C5';
}

.l-icon-map-3d::before {
  content: '\E2C6';
}

.l-icon-map-add::before {
  content: '\E2C7';
}

.l-icon-map-aiming::before {
  content: '\E2C8';
}

.l-icon-map-blocked::before {
  content: '\E2C9';
}

.l-icon-map-bubble::before {
  content: '\E2CA';
}

.l-icon-map-cancel::before {
  content: '\E2CB';
}

.l-icon-map-chat::before {
  content: '\E2CC';
}

.l-icon-map-checked::before {
  content: '\E2CD';
}

.l-icon-map-collection::before {
  content: '\E2CE';
}

.l-icon-map-connection::before {
  content: '\E2CF';
}

.l-icon-map-distance::before {
  content: '\E2D0';
}

.l-icon-map-double::before {
  content: '\E2D1';
}

.l-icon-map-edit::before {
  content: '\E2D2';
}

.l-icon-map-grid::before {
  content: '\E2D3';
}

.l-icon-map-information-1::before {
  content: '\E2D4';
}

.l-icon-map-information-2::before {
  content: '\E2D5';
}

.l-icon-map-information::before {
  content: '\E2D6';
}

.l-icon-map-location::before {
  content: '\E2D7';
}

.l-icon-map-locked::before {
  content: '\E2D8';
}

.l-icon-map-marked::before {
  content: '\E2D9';
}

.l-icon-map-navigation::before {
  content: '\E2DA';
}

.l-icon-map-outline::before {
  content: '\E2DB';
}

.l-icon-map-route-planning::before {
  content: '\E2DC';
}

.l-icon-map-ruler::before {
  content: '\E2DD';
}

.l-icon-map-safety::before {
  content: '\E2DE';
}

.l-icon-map-search-1::before {
  content: '\E2DF';
}

.l-icon-map-search::before {
  content: '\E2E0';
}

.l-icon-map-setting::before {
  content: '\E2E1';
}

.l-icon-map-unlocked::before {
  content: '\E2E2';
}

.l-icon-map::before {
  content: '\E2E3';
}

.l-icon-mark-as-unread::before {
  content: '\E2E4';
}

.l-icon-markup::before {
  content: '\E2E5';
}

.l-icon-mathematics::before {
  content: '\E2E6';
}

.l-icon-measurement-1::before {
  content: '\E2E7';
}

.l-icon-measurement-2::before {
  content: '\E2E8';
}

.l-icon-measurement::before {
  content: '\E2E9';
}

.l-icon-meat-pepper::before {
  content: '\E2EA';
}

.l-icon-media-library::before {
  content: '\E2EB';
}

.l-icon-member::before {
  content: '\E2EC';
}

.l-icon-menu-application::before {
  content: '\E2ED';
}

.l-icon-menu-fold::before {
  content: '\E2EE';
}

.l-icon-menu-unfold::before {
  content: '\E2EF';
}

.l-icon-menu::before {
  content: '\E2F0';
}

.l-icon-merge-cells::before {
  content: '\E2F1';
}

.l-icon-microphone-1::before {
  content: '\E2F2';
}

.l-icon-microphone-2::before {
  content: '\E2F3';
}

.l-icon-microphone::before {
  content: '\E2F4';
}

.l-icon-milk::before {
  content: '\E2F5';
}

.l-icon-minus-circle-filled::before {
  content: '\E2F6';
}

.l-icon-minus-circle::before {
  content: '\E2F7';
}

.l-icon-minus-rectangle-filled::before {
  content: '\E2F8';
}

.l-icon-minus-rectangle::before {
  content: '\E2F9';
}

.l-icon-minus::before {
  content: '\E2FA';
}

.l-icon-mirror::before {
  content: '\E2FB';
}

.l-icon-mobile-blocked::before {
  content: '\E2FC';
}

.l-icon-mobile-list::before {
  content: '\E2FD';
}

.l-icon-mobile-navigation::before {
  content: '\E2FE';
}

.l-icon-mobile-shortcut::before {
  content: '\E2FF';
}

.l-icon-mobile-vibrate::before {
  content: '\E300';
}

.l-icon-mobile::before {
  content: '\E301';
}

.l-icon-mode-dark::before {
  content: '\E302';
}

.l-icon-mode-light::before {
  content: '\E303';
}

.l-icon-module::before {
  content: '\E304';
}

.l-icon-money::before {
  content: '\E305';
}

.l-icon-monument::before {
  content: '\E306';
}

.l-icon-moon-fall::before {
  content: '\E307';
}

.l-icon-moon-rising::before {
  content: '\E308';
}

.l-icon-moon::before {
  content: '\E309';
}

.l-icon-more::before {
  content: '\E30A';
}

.l-icon-mosque-1::before {
  content: '\E30B';
}

.l-icon-mosque::before {
  content: '\E30C';
}

.l-icon-mouse::before {
  content: '\E30D';
}

.l-icon-move-1::before {
  content: '\E30E';
}

.l-icon-move::before {
  content: '\E30F';
}

.l-icon-movie-clapper::before {
  content: '\E310';
}

.l-icon-multiply::before {
  content: '\E311';
}

.l-icon-museum-1::before {
  content: '\E312';
}

.l-icon-museum-2::before {
  content: '\E313';
}

.l-icon-museum::before {
  content: '\E314';
}

.l-icon-mushroom-1::before {
  content: '\E315';
}

.l-icon-mushroom::before {
  content: '\E316';
}

.l-icon-music-1::before {
  content: '\E317';
}

.l-icon-music-2::before {
  content: '\E318';
}

.l-icon-music-rectangle-add::before {
  content: '\E319';
}

.l-icon-music::before {
  content: '\E31A';
}

.l-icon-navigation-arrow::before {
  content: '\E31B';
}

.l-icon-next::before {
  content: '\E31C';
}

.l-icon-no-expression::before {
  content: '\E31D';
}

.l-icon-noodle::before {
  content: '\E31E';
}

.l-icon-notification-add::before {
  content: '\E31F';
}

.l-icon-notification-circle::before {
  content: '\E320';
}

.l-icon-notification-error::before {
  content: '\E321';
}

.l-icon-notification-filled::before {
  content: '\E322';
}

.l-icon-notification::before {
  content: '\E323';
}

.l-icon-numbers-0-1::before {
  content: '\E324';
}

.l-icon-numbers-0::before {
  content: '\E325';
}

.l-icon-numbers-1-1::before {
  content: '\E326';
}

.l-icon-numbers-1::before {
  content: '\E327';
}

.l-icon-numbers-2-1::before {
  content: '\E328';
}

.l-icon-numbers-2::before {
  content: '\E329';
}

.l-icon-numbers-3-1::before {
  content: '\E32A';
}

.l-icon-numbers-3::before {
  content: '\E32B';
}

.l-icon-numbers-4-1::before {
  content: '\E32C';
}

.l-icon-numbers-4::before {
  content: '\E32D';
}

.l-icon-numbers-5-1::before {
  content: '\E32E';
}

.l-icon-numbers-5::before {
  content: '\E32F';
}

.l-icon-numbers-6-1::before {
  content: '\E330';
}

.l-icon-numbers-6::before {
  content: '\E331';
}

.l-icon-numbers-7-1::before {
  content: '\E332';
}

.l-icon-numbers-7::before {
  content: '\E333';
}

.l-icon-numbers-8-1::before {
  content: '\E334';
}

.l-icon-numbers-8::before {
  content: '\E335';
}

.l-icon-numbers-9-1::before {
  content: '\E336';
}

.l-icon-numbers-9::before {
  content: '\E337';
}

.l-icon-nut::before {
  content: '\E338';
}

.l-icon-object-storage::before {
  content: '\E339';
}

.l-icon-open-mouth::before {
  content: '\E33A';
}

.l-icon-opera::before {
  content: '\E33B';
}

.l-icon-order-adjustment-column::before {
  content: '\E33C';
}

.l-icon-order-ascending::before {
  content: '\E33D';
}

.l-icon-order-descending::before {
  content: '\E33E';
}

.l-icon-outbox::before {
  content: '\E33F';
}

.l-icon-page-first::before {
  content: '\E340';
}

.l-icon-page-head::before {
  content: '\E341';
}

.l-icon-page-last::before {
  content: '\E342';
}

.l-icon-palace-1::before {
  content: '\E343';
}

.l-icon-palace-2::before {
  content: '\E344';
}

.l-icon-palace-3::before {
  content: '\E345';
}

.l-icon-palace-4::before {
  content: '\E346';
}

.l-icon-palace::before {
  content: '\E347';
}

.l-icon-palette-1::before {
  content: '\E348';
}

.l-icon-palette::before {
  content: '\E349';
}

.l-icon-panorama-horizontal::before {
  content: '\E34A';
}

.l-icon-panorama-vertical::before {
  content: '\E34B';
}

.l-icon-pantone::before {
  content: '\E34C';
}

.l-icon-parabola::before {
  content: '\E34D';
}

.l-icon-parentheses::before {
  content: '\E34E';
}

.l-icon-paste::before {
  content: '\E34F';
}

.l-icon-patio::before {
  content: '\E350';
}

.l-icon-pause-circle-filled::before {
  content: '\E351';
}

.l-icon-pause-circle-stroke::before {
  content: '\E352';
}

.l-icon-pause-circle::before {
  content: '\E353';
}

.l-icon-pause::before {
  content: '\E354';
}

.l-icon-pea::before {
  content: '\E355';
}

.l-icon-peach::before {
  content: '\E356';
}

.l-icon-pear::before {
  content: '\E357';
}

.l-icon-pearl-of-the-orient::before {
  content: '\E358';
}

.l-icon-pen-ball::before {
  content: '\E359';
}

.l-icon-pen-brush::before {
  content: '\E35A';
}

.l-icon-pen-mark::before {
  content: '\E35B';
}

.l-icon-pen-quill::before {
  content: '\E35C';
}

.l-icon-pen::before {
  content: '\E35D';
}

.l-icon-pending::before {
  content: '\E35E';
}

.l-icon-percent::before {
  content: '\E35F';
}

.l-icon-personal-information::before {
  content: '\E360';
}

.l-icon-phone-locked::before {
  content: '\E361';
}

.l-icon-phone-search::before {
  content: '\E362';
}

.l-icon-pi::before {
  content: '\E363';
}

.l-icon-piano::before {
  content: '\E364';
}

.l-icon-pin-filled::before {
  content: '\E365';
}

.l-icon-pin::before {
  content: '\E366';
}

.l-icon-play-circle-filled::before {
  content: '\E367';
}

.l-icon-play-circle-stroke-add::before {
  content: '\E368';
}

.l-icon-play-circle-stroke::before {
  content: '\E369';
}

.l-icon-play-circle::before {
  content: '\E36A';
}

.l-icon-play-demo::before {
  content: '\E36B';
}

.l-icon-play-rectangle::before {
  content: '\E36C';
}

.l-icon-play::before {
  content: '\E36D';
}

.l-icon-plus::before {
  content: '\E36E';
}

.l-icon-popsicle::before {
  content: '\E36F';
}

.l-icon-portrait::before {
  content: '\E370';
}

.l-icon-pout::before {
  content: '\E371';
}

.l-icon-poweroff::before {
  content: '\E372';
}

.l-icon-precise-monitor::before {
  content: '\E373';
}

.l-icon-previous::before {
  content: '\E374';
}

.l-icon-print::before {
  content: '\E375';
}

.l-icon-pumpkin::before {
  content: '\E376';
}

.l-icon-pyramid-maya::before {
  content: '\E377';
}

.l-icon-pyramid::before {
  content: '\E378';
}

.l-icon-qrcode::before {
  content: '\E379';
}

.l-icon-quadratic::before {
  content: '\E37A';
}

.l-icon-questionnaire::before {
  content: '\E37B';
}

.l-icon-queue::before {
  content: '\E37C';
}

.l-icon-radar::before {
  content: '\E37D';
}

.l-icon-radio-1::before {
  content: '\E37E';
}

.l-icon-radio-2::before {
  content: '\E37F';
}

.l-icon-radish::before {
  content: '\E380';
}

.l-icon-rain-heavy::before {
  content: '\E381';
}

.l-icon-rain-light::before {
  content: '\E382';
}

.l-icon-rain-medium::before {
  content: '\E383';
}

.l-icon-rainbow::before {
  content: '\E384';
}

.l-icon-rectangle::before {
  content: '\E385';
}

.l-icon-refresh::before {
  content: '\E386';
}

.l-icon-relation::before {
  content: '\E387';
}

.l-icon-relativity::before {
  content: '\E388';
}

.l-icon-remote-wave::before {
  content: '\E389';
}

.l-icon-remove::before {
  content: '\E38A';
}

.l-icon-replay::before {
  content: '\E38B';
}

.l-icon-rice-ball::before {
  content: '\E38C';
}

.l-icon-rice::before {
  content: '\E38D';
}

.l-icon-roast::before {
  content: '\E38E';
}

.l-icon-rocket::before {
  content: '\E38F';
}

.l-icon-rollback::before {
  content: '\E390';
}

.l-icon-rollfront::before {
  content: '\E391';
}

.l-icon-root-list::before {
  content: '\E392';
}

.l-icon-rotate-locked::before {
  content: '\E393';
}

.l-icon-rotate::before {
  content: '\E394';
}

.l-icon-rotation::before {
  content: '\E395';
}

.l-icon-round::before {
  content: '\E396';
}

.l-icon-router-wave::before {
  content: '\E397';
}

.l-icon-rss::before {
  content: '\E398';
}

.l-icon-ruler::before {
  content: '\E399';
}

.l-icon-sailing-hotel::before {
  content: '\E39A';
}

.l-icon-sandwich::before {
  content: '\E39B';
}

.l-icon-saturation::before {
  content: '\E39C';
}

.l-icon-sausage::before {
  content: '\E39D';
}

.l-icon-save::before {
  content: '\E39E';
}

.l-icon-saving-pot::before {
  content: '\E39F';
}

.l-icon-scan::before {
  content: '\E3A0';
}

.l-icon-screen-4k::before {
  content: '\E3A1';
}

.l-icon-screencast::before {
  content: '\E3A2';
}

.l-icon-screenshot::before {
  content: '\E3A3';
}

.l-icon-scroll-bar::before {
  content: '\E3A4';
}

.l-icon-sd-card-1::before {
  content: '\E3A5';
}

.l-icon-sd-card::before {
  content: '\E3A6';
}

.l-icon-search-error::before {
  content: '\E3A7';
}

.l-icon-search::before {
  content: '\E3A8';
}

.l-icon-secured::before {
  content: '\E3A9';
}

.l-icon-send-cancel::before {
  content: '\E3AA';
}

.l-icon-send::before {
  content: '\E3AB';
}

.l-icon-sensors-1::before {
  content: '\E3AC';
}

.l-icon-sensors-2::before {
  content: '\E3AD';
}

.l-icon-sensors-off::before {
  content: '\E3AE';
}

.l-icon-sensors::before {
  content: '\E3AF';
}

.l-icon-serenity::before {
  content: '\E3B0';
}

.l-icon-server::before {
  content: '\E3B1';
}

.l-icon-service::before {
  content: '\E3B2';
}

.l-icon-setting-1::before {
  content: '\E3B3';
}

.l-icon-setting::before {
  content: '\E3B4';
}

.l-icon-share-1::before {
  content: '\E3B5';
}

.l-icon-share::before {
  content: '\E3B6';
}

.l-icon-sharpness::before {
  content: '\E3B7';
}

.l-icon-shield-error::before {
  content: '\E3B8';
}

.l-icon-shimen::before {
  content: '\E3B9';
}

.l-icon-shop-1::before {
  content: '\E3BA';
}

.l-icon-shop-2::before {
  content: '\E3BB';
}

.l-icon-shop-3::before {
  content: '\E3BC';
}

.l-icon-shop-4::before {
  content: '\E3BD';
}

.l-icon-shop-5::before {
  content: '\E3BE';
}

.l-icon-shop::before {
  content: '\E3BF';
}

.l-icon-shrimp::before {
  content: '\E3C0';
}

.l-icon-shrink-horizontal::before {
  content: '\E3C1';
}

.l-icon-shrink-vertical::before {
  content: '\E3C2';
}

.l-icon-shutter::before {
  content: '\E3C3';
}

.l-icon-shutup::before {
  content: '\E3C4';
}

.l-icon-sim-card-1::before {
  content: '\E3C5';
}

.l-icon-sim-card-2::before {
  content: '\E3C6';
}

.l-icon-sim-card::before {
  content: '\E3C7';
}

.l-icon-sinister-smile::before {
  content: '\E3C8';
}

.l-icon-sip::before {
  content: '\E3C9';
}

.l-icon-slash::before {
  content: '\E3CA';
}

.l-icon-sleep::before {
  content: '\E3CB';
}

.l-icon-slice::before {
  content: '\E3CC';
}

.l-icon-slideshow::before {
  content: '\E3CD';
}

.l-icon-smile::before {
  content: '\E3CE';
}

.l-icon-sneer::before {
  content: '\E3CF';
}

.l-icon-snowflake::before {
  content: '\E3D0';
}

.l-icon-sonic::before {
  content: '\E3D1';
}

.l-icon-sound-down::before {
  content: '\E3D2';
}

.l-icon-sound-high::before {
  content: '\E3D3';
}

.l-icon-sound-low::before {
  content: '\E3D4';
}

.l-icon-sound-mute-1::before {
  content: '\E3D5';
}

.l-icon-sound-mute::before {
  content: '\E3D6';
}

.l-icon-sound-up::before {
  content: '\E3D7';
}

.l-icon-sound::before {
  content: '\E3D8';
}

.l-icon-space::before {
  content: '\E3D9';
}

.l-icon-speechless-1::before {
  content: '\E3DA';
}

.l-icon-star-filled::before {
  content: '\E3DB';
}

.l-icon-star::before {
  content: '\E3DC';
}

.l-icon-statue-of-jesus::before {
  content: '\E3DD';
}

.l-icon-sticky-note::before {
  content: '\E3DE';
}

.l-icon-stop-circle-filled::before {
  content: '\E3DF';
}

.l-icon-stop-circle-stroke::before {
  content: '\E3E0';
}

.l-icon-stop-circle::before {
  content: '\E3E1';
}

.l-icon-stop::before {
  content: '\E3E2';
}

.l-icon-store::before {
  content: '\E3E3';
}

.l-icon-street-road-1::before {
  content: '\E3E4';
}

.l-icon-street-road::before {
  content: '\E3E5';
}

.l-icon-subtitle::before {
  content: '\E3E6';
}

.l-icon-subway-line::before {
  content: '\E3E7';
}

.l-icon-sum::before {
  content: '\E3E8';
}

.l-icon-sun-fall::before {
  content: '\E3E9';
}

.l-icon-sun-rising::before {
  content: '\E3EA';
}

.l-icon-sunny::before {
  content: '\E3EB';
}

.l-icon-support::before {
  content: '\E3EC';
}

.l-icon-surprised-1::before {
  content: '\E3ED';
}

.l-icon-surprised::before {
  content: '\E3EE';
}

.l-icon-swap-left::before {
  content: '\E3EF';
}

.l-icon-swap-right::before {
  content: '\E3F0';
}

.l-icon-swap::before {
  content: '\E3F1';
}

.l-icon-swear-1::before {
  content: '\E3F2';
}

.l-icon-swear-2::before {
  content: '\E3F3';
}

.l-icon-system-2::before {
  content: '\E3F4';
}

.l-icon-system-3::before {
  content: '\E3F5';
}

.l-icon-system-application::before {
  content: '\E3F6';
}

.l-icon-system-blocked::before {
  content: '\E3F7';
}

.l-icon-system-code::before {
  content: '\E3F8';
}

.l-icon-system-components::before {
  content: '\E3F9';
}

.l-icon-system-coordinate::before {
  content: '\E3FA';
}

.l-icon-system-device::before {
  content: '\E3FB';
}

.l-icon-system-interface::before {
  content: '\E3FC';
}

.l-icon-system-location::before {
  content: '\E3FD';
}

.l-icon-system-locked::before {
  content: '\E3FE';
}

.l-icon-system-log::before {
  content: '\E3FF';
}

.l-icon-system-marked::before {
  content: '\E400';
}

.l-icon-system-messages::before {
  content: '\E401';
}

.l-icon-system-regulation::before {
  content: '\E402';
}

.l-icon-system-search::before {
  content: '\E403';
}

.l-icon-system-setting::before {
  content: '\E404';
}

.l-icon-system-storage::before {
  content: '\E405';
}

.l-icon-system-sum::before {
  content: '\E406';
}

.l-icon-system-unlocked::before {
  content: '\E407';
}

.l-icon-tab::before {
  content: '\E408';
}

.l-icon-table-1::before {
  content: '\E409';
}

.l-icon-table-2::before {
  content: '\E40A';
}

.l-icon-table-add::before {
  content: '\E40B';
}

.l-icon-table-split::before {
  content: '\E40C';
}

.l-icon-table::before {
  content: '\E40D';
}

.l-icon-tag::before {
  content: '\E40E';
}

.l-icon-tangerinr::before {
  content: '\E40F';
}

.l-icon-tape::before {
  content: '\E410';
}

.l-icon-task-1::before {
  content: '\E411';
}

.l-icon-task-add-1::before {
  content: '\E412';
}

.l-icon-task-add::before {
  content: '\E413';
}

.l-icon-task-checked::before {
  content: '\E414';
}

.l-icon-task-error::before {
  content: '\E415';
}

.l-icon-task-location::before {
  content: '\E416';
}

.l-icon-task-marked::before {
  content: '\E417';
}

.l-icon-task-setting::before {
  content: '\E418';
}

.l-icon-task-visible::before {
  content: '\E419';
}

.l-icon-task::before {
  content: '\E41A';
}

.l-icon-tea::before {
  content: '\E41B';
}

.l-icon-teahouse::before {
  content: '\E41C';
}

.l-icon-template::before {
  content: '\E41D';
}

.l-icon-temple::before {
  content: '\E41E';
}

.l-icon-terminal-rectangle-1::before {
  content: '\E41F';
}

.l-icon-terminal-rectangle::before {
  content: '\E420';
}

.l-icon-terminal-window::before {
  content: '\E421';
}

.l-icon-terminal::before {
  content: '\E422';
}

.l-icon-textbox::before {
  content: '\E423';
}

.l-icon-textformat-bold::before {
  content: '\E424';
}

.l-icon-textformat-color::before {
  content: '\E425';
}

.l-icon-textformat-italic::before {
  content: '\E426';
}

.l-icon-textformat-strikethrough::before {
  content: '\E427';
}

.l-icon-textformat-underline::before {
  content: '\E428';
}

.l-icon-textformat-wrap::before {
  content: '\E429';
}

.l-icon-theaters::before {
  content: '\E42A';
}

.l-icon-thumb-down-1::before {
  content: '\E42B';
}

.l-icon-thumb-down-2::before {
  content: '\E42C';
}

.l-icon-thumb-down::before {
  content: '\E42D';
}

.l-icon-thumb-up-1::before {
  content: '\E42E';
}

.l-icon-thumb-up-2::before {
  content: '\E42F';
}

.l-icon-thumb-up::before {
  content: '\E430';
}

.l-icon-thunder::before {
  content: '\E431';
}

.l-icon-thunderstorm-night::before {
  content: '\E432';
}

.l-icon-thunderstorm-sunny::before {
  content: '\E433';
}

.l-icon-thunderstorm::before {
  content: '\E434';
}

.l-icon-ticket::before {
  content: '\E435';
}

.l-icon-time-filled::before {
  content: '\E436';
}

.l-icon-time::before {
  content: '\E437';
}

.l-icon-tips-double::before {
  content: '\E438';
}

.l-icon-tips::before {
  content: '\E439';
}

.l-icon-tomato::before {
  content: '\E43A';
}

.l-icon-tools-circle::before {
  content: '\E43B';
}

.l-icon-tools::before {
  content: '\E43C';
}

.l-icon-tornado::before {
  content: '\E43D';
}

.l-icon-tower-1::before {
  content: '\E43E';
}

.l-icon-tower-2::before {
  content: '\E43F';
}

.l-icon-tower-3::before {
  content: '\E440';
}

.l-icon-tower-clock::before {
  content: '\E441';
}

.l-icon-tower::before {
  content: '\E442';
}

.l-icon-town::before {
  content: '\E443';
}

.l-icon-traffic-events::before {
  content: '\E444';
}

.l-icon-traffic::before {
  content: '\E445';
}

.l-icon-transform-1::before {
  content: '\E446';
}

.l-icon-transform-2::before {
  content: '\E447';
}

.l-icon-transform-3::before {
  content: '\E448';
}

.l-icon-transform::before {
  content: '\E449';
}

.l-icon-translate-1::before {
  content: '\E44A';
}

.l-icon-translate::before {
  content: '\E44B';
}

.l-icon-tree-list::before {
  content: '\E44C';
}

.l-icon-tree-round-dot-vertical::before {
  content: '\E44D';
}

.l-icon-tree-round-dot::before {
  content: '\E44E';
}

.l-icon-tree-square-dot-vertical::before {
  content: '\E44F';
}

.l-icon-tree-square-dot::before {
  content: '\E450';
}

.l-icon-trending-down::before {
  content: '\E451';
}

.l-icon-trending-up::before {
  content: '\E452';
}

.l-icon-tv-1::before {
  content: '\E453';
}

.l-icon-tv-2::before {
  content: '\E454';
}

.l-icon-tv::before {
  content: '\E455';
}

.l-icon-typography::before {
  content: '\E456';
}

.l-icon-uncomfortable-1::before {
  content: '\E457';
}

.l-icon-uncomfortable-2::before {
  content: '\E458';
}

.l-icon-uncomfortable::before {
  content: '\E459';
}

.l-icon-undertake-delivery::before {
  content: '\E45A';
}

.l-icon-undertake-environment-protection::before {
  content: '\E45B';
}

.l-icon-undertake-hold-up::before {
  content: '\E45C';
}

.l-icon-undertake-transaction::before {
  content: '\E45D';
}

.l-icon-undertake::before {
  content: '\E45E';
}

.l-icon-unfold-less::before {
  content: '\E45F';
}

.l-icon-unfold-more::before {
  content: '\E460';
}

.l-icon-unhappy-1::before {
  content: '\E461';
}

.l-icon-unhappy::before {
  content: '\E462';
}

.l-icon-uninstall::before {
  content: '\E463';
}

.l-icon-upload-1::before {
  content: '\E464';
}

.l-icon-upload::before {
  content: '\E465';
}

.l-icon-upscale::before {
  content: '\E466';
}

.l-icon-usb::before {
  content: '\E467';
}

.l-icon-user-1::before {
  content: '\E468';
}

.l-icon-user-add::before {
  content: '\E469';
}

.l-icon-user-arrow-down::before {
  content: '\E46A';
}

.l-icon-user-arrow-left::before {
  content: '\E46B';
}

.l-icon-user-arrow-right::before {
  content: '\E46C';
}

.l-icon-user-arrow-up::before {
  content: '\E46D';
}

.l-icon-user-avatar::before {
  content: '\E46E';
}

.l-icon-user-blocked::before {
  content: '\E46F';
}

.l-icon-user-business::before {
  content: '\E470';
}

.l-icon-user-checked-1::before {
  content: '\E471';
}

.l-icon-user-checked::before {
  content: '\E472';
}

.l-icon-user-circle::before {
  content: '\E473';
}

.l-icon-user-clear::before {
  content: '\E474';
}

.l-icon-user-error-1::before {
  content: '\E475';
}

.l-icon-user-invisible::before {
  content: '\E476';
}

.l-icon-user-list::before {
  content: '\E477';
}

.l-icon-user-locked::before {
  content: '\E478';
}

.l-icon-user-marked::before {
  content: '\E479';
}

.l-icon-user-password::before {
  content: '\E47A';
}

.l-icon-user-safety::before {
  content: '\E47B';
}

.l-icon-user-search::before {
  content: '\E47C';
}

.l-icon-user-setting::before {
  content: '\E47D';
}

.l-icon-user-talk-1::before {
  content: '\E47E';
}

.l-icon-user-talk-off-1::before {
  content: '\E47F';
}

.l-icon-user-talk::before {
  content: '\E480';
}

.l-icon-user-time::before {
  content: '\E481';
}

.l-icon-user-transmit::before {
  content: '\E482';
}

.l-icon-user-unknown::before {
  content: '\E483';
}

.l-icon-user-unlocked::before {
  content: '\E484';
}

.l-icon-user-vip::before {
  content: '\E485';
}

.l-icon-user-visible::before {
  content: '\E486';
}

.l-icon-user::before {
  content: '\E487';
}

.l-icon-usergroup-add::before {
  content: '\E488';
}

.l-icon-usergroup-clear::before {
  content: '\E489';
}

.l-icon-usergroup::before {
  content: '\E48A';
}

.l-icon-vehicle::before {
  content: '\E48B';
}

.l-icon-verified::before {
  content: '\E48C';
}

.l-icon-verify::before {
  content: '\E48D';
}

.l-icon-video-camera-1::before {
  content: '\E48E';
}

.l-icon-video-camera-2::before {
  content: '\E48F';
}

.l-icon-video-camera-dollar::before {
  content: '\E490';
}

.l-icon-video-camera-minus::before {
  content: '\E491';
}

.l-icon-video-camera-music::before {
  content: '\E492';
}

.l-icon-video-camera-off::before {
  content: '\E493';
}

.l-icon-video-camera::before {
  content: '\E494';
}

.l-icon-video-library::before {
  content: '\E495';
}

.l-icon-video::before {
  content: '\E496';
}

.l-icon-view-agenda::before {
  content: '\E497';
}

.l-icon-view-column::before {
  content: '\E498';
}

.l-icon-view-in-ar::before {
  content: '\E499';
}

.l-icon-view-list::before {
  content: '\E49A';
}

.l-icon-view-module::before {
  content: '\E49B';
}

.l-icon-visual-recognition::before {
  content: '\E49C';
}

.l-icon-wallet::before {
  content: '\E49D';
}

.l-icon-watch::before {
  content: '\E49E';
}

.l-icon-watermelon::before {
  content: '\E49F';
}

.l-icon-wave-left::before {
  content: '\E4A0';
}

.l-icon-wave-right::before {
  content: '\E4A1';
}

.l-icon-wealth-1::before {
  content: '\E4A2';
}

.l-icon-wealth::before {
  content: '\E4A3';
}

.l-icon-widget::before {
  content: '\E4A4';
}

.l-icon-wifi-1::before {
  content: '\E4A5';
}

.l-icon-wifi-off-1::before {
  content: '\E4A6';
}

.l-icon-wifi-off::before {
  content: '\E4A7';
}

.l-icon-wifi::before {
  content: '\E4A8';
}

.l-icon-window-1::before {
  content: '\E4A9';
}

.l-icon-window::before {
  content: '\E4AA';
}

.l-icon-windy-rain::before {
  content: '\E4AB';
}

.l-icon-windy::before {
  content: '\E4AC';
}

.l-icon-wink::before {
  content: '\E4AD';
}

.l-icon-work-history::before {
  content: '\E4AE';
}

.l-icon-work-off::before {
  content: '\E4AF';
}

.l-icon-work::before {
  content: '\E4B0';
}

.l-icon-wry-smile::before {
  content: '\E4B1';
}

.l-icon-zoom-in::before {
  content: '\E4B2';
}

.l-icon-zoom-out::before {
  content: '\E4B3';
}
</style>
