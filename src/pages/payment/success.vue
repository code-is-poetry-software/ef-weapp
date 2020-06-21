<template>
  <view class="payment-success">
    <view>您已成功缴费锁定</view>
    <text class="remind">为避免入园后长时间等待\n 请10:00入场，时间段内尽早为您排场\n （注：12:00入园无法时段内排场）</text>
    <button @click="inviteFriend">邀请好友</button>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class PaymentSuccess extends Vue {
  inviteFriend() {
    uni.navigateTo({ url: "/pages/booking/detail" });
  }
}
</script>

<style lang="stylus" scoped>
.payment-success
  text-align center
  .remind
    text-align center
</style>
