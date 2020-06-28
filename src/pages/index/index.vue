<template>
  <view class="index page">
    <get-phonenumber></get-phonenumber>
    <view>
      <img style="width: 320upx" src="/static/image/img1.png" mode="widthFix" />
    </view>
    <view style="margin-top: 60upx">
      <img style="width: 380upx" src="/static/image/img2.png" mode="widthFix" />
    </view>
    <view style="margin-top: 50upx" @click="navigateTo({ url: '/pages/game/car' })">
      <img style="width: 600upx" src="/static/image/button-car.png" mode="widthFix" />
    </view>
    <view style="margin-bottom: 40upx;margin-top: 20upx" @click="navigateTo({ url: '/pages/game/uav' })">
      <img style="width: 600upx" src="/static/image/button-uav.png" mode="widthFix" />
    </view>
    <view style="margin-bottom: 20upx">
      <booking-item />
    </view>
    <view style="margin-bottom: 8upx">
      <home-menuitem @click="e => navigateTo({ url: '/pages/rank/index' })" text="EF PARK 排行榜" />
    </view>
    <home-menuitem @click="e => navigateTo({ url: '/pages/user/index' })" text="我的潮玩ID" />
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";

@Component
export default class Index extends Vue {
  navigateTo({ url }: { url: string }) {
    uni.navigateTo({ url });
  }
}
</script>

<style lang="stylus" scoped>
.index
  background #368ad4
  text-align center
  padding-top 200upx
.e-button-primary
  width 300upx
  height 200upx
  border-radius 0
  background linear-gradient(117deg, transparent 15px, #58a 0, #58a calc(100% - 15px), transparent 15px) top left
  &:after
    border none
</style>
