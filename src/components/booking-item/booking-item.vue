<template>
  <view class="booking-item" @click="goDetail">
    <img class="img" src="/static/image/booking-item.png" mode="widthFix" />
    <view class="info">
      <view>场次: 2020-06-08 12:00-14:00</view>
      <view class="flex">
        <view>项目: 竞速无人机</view>
        <view style="margin-left: 5px">数量: 6</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  async goDetail() {
    // uni.navigateTo({ url: "/pages/booking/share" });
    uni.navigateTo({ url: "/pages/booking/detail" });
  }
}
</script>

<style lang="stylus" scoped>
.booking-item
  position relative
  height 130upx
  display flex
  align-items center
  justify-content center
  .img
    width 563upx
    position absolute
  .info
    z-index 1
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color rgba(0, 144, 217, 1)
</style>
