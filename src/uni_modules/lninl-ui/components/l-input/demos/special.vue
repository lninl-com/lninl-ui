<script setup>
import { computed, ref } from 'vue'

const phoneNumber = ref('17600600600')

const isPhoneNumber = computed(() => {
  if (/^1[3,45789]\d{9}$/.test(phoneNumber.value))
    return ''

  return 'error'
})

const tips = computed(() => {
  if (!isPhoneNumber.value)
    return ''

  return '手机号输入不正确'
})
</script>

<template>
  <view class="bg-[#f6f6f6]">
    <l-input label="输入密码" type="password" default-value="520 TDesign" :clearable="false" suffix-icon=" { name: 'browse-off-icon', ariaLabel: '提示' } " />
    <l-input placeholder="输入验证码" label="验证码">
      <template #suffix>
        <div class="suffix">
          <div class="suffix--line" />
          <l-image
            class="image"
            src="https://wwcdn.weixin.qq.com/node/wework/images/202010241547.ac6876be9c.png"
            mode="heightFix"
            aria-role="img"
            aria-label="验证码"
          />
        </div>
      </template>
    </l-input>
    <l-input v-model="phoneNumber" label="手机号" placeholder="输入手机号码" :tips="tips">
      <template #suffix>
        <div class="suffix">
          <div class="suffix--line" />
          <div class="verify" aria-role="button">
            发送验证码
          </div>
        </div>
      </template>
    </l-input>
    <l-input label="价格" align="right" placeholder="0.00" suffix="元" />
    <l-input label="数量" align="right" placeholder="填写个数" suffix="个" />
  </view>
</template>

<style scoped>
.suffix {
  display: flex;
  align-items: center;
}
.suffix--line {
  width: 1px;
  height: 24px;
  background-color: #f6f6f6;
  margin-right: 16px;
}

.image {
  width: 72px;
  height: 36px;
  display: block;
  margin-top: -6px;
  margin-bottom: -6px;
}

.verify {
  color: rgba(0, 82, 217, 1);
  font-size: 16px;
}
</style>

<style>
.l-input {
  margin-bottom: 32rpx;
}
</style>
