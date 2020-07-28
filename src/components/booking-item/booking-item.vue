<template>
  <view class="booking-item" @click="$emit('click')">
    <img class="img" src="/static/image/booking-item.png" mode="widthFix" />
    <view class="info">
      <view class="flex">
        <view class="text" style="margin: 0 8upx 0 0;">场次:</view>
        <view class="gotham-bold" style="font-size: 23upx; margin-top: -6upx;">{{ item.date }} {{ item.checkInAt }}</view>
      </view>
      <view class="flex">
        <view style="font-size: 15upx; margin: 7upx 8upx 0 0;">项目:</view>
        <view style="font-size: 38upx; margin-top: -10upx;">{{ project.name }}</view>
        <view style="font-size: 15upx; margin: 7upx 8upx 0 30upx;">数量:</view>
        <view style="font-size: 38upx; margin-top: -12upx;">{{ project.count }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Booking } from "../../type";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) item: Booking;
  @Prop({ default: {} }) project: Booking["projects"][0];

  async goDetail() {
    uni.navigateTo({ url: `/pages/booking/detail?id=${this.item.id}` });
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
  .text
    font-size 15upx
  .img
    width 563upx
    position absolute
  .info
    z-index 1
    font-weight bold
    font-family Alibaba PuHuiTi
    letter-spacing 2upx
    color rgba(0, 144, 217, 1)
.flex
  margin-top 12upx
</style>
