<template>
  <view class="payment-success column-center">
    <view>
      <img class="icon-user" src="/static/image/icon-user.png" mode="widthFix" />
    </view>
    <view style="margin-bottom: 72upx">
      <img style="width: 128upx" src="/static/image/img3.png" mode="widthFix" />
    </view>
    <view class="text-success">您已成功缴费锁定</view>
    <view style="margin-bottom: 72upx">
      <booking-item />
    </view>
    <text class="text-remind">为避免入园后长时间等待\n 请10:00入场，时间段内尽早为您排场\n （注：12:00入园无法时段内排场）</text>

    <view @click="inviteFriend">
      <img style="width: 500upx" src="/static/image/img-share.png" mode="widthFix" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class PaymentSuccess extends Vue {
  inviteFriend() {
    uni.navigateTo({ url: "/pages/booking/share" });
  }
}
</script>

<style lang="stylus" scoped>
.payment-success
  text-align center
  padding 150upx 0
  .icon-user
    width 41px
    height 36px
    position absolute
    right 61upx
    top 65upx
  .remind
    text-align center
  .text-success
    color var(--primary)
    font-size 21px
    font-family Alibaba PuHuiTi
    font-weight bold
    line-height 25px
    margin-bottom 62upx
  .text-remind
    font-size 13px
    font-family AlibabaPuHuiTiR-GBpc-EUC-H
    line-height 18px
    color #666
    margin-bottom 72upx
</style>
