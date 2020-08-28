<template>
  <view class="button-rank1" @click="$emit('click')">
    <img class="img" src="/static/image/button-rank1.png" style="height: 154upx;" mode="widthFix" />
    <view class="status">{{ config.statusLabel[item.status] }}</view>
    <view class="info">
      <view style="font-size: 16upx;">项目:</view>
      <view style="font-size: 28upx; margin-left: 51upx; margin-top: -32upx;">{{ project.name }} </view>
      <view style="font-size: 16upx; margin-top: 20upx;">场次:</view>
      <view style="font-size: 28upx; margin-left: 51upx; margin-top: -32upx;">{{ item.date }}</view>
      <view style="font-size: 43upx; margin-left: 268upx; margin-top: -54upx;">{{ item.checkInAt.substr(0, 5) }}</view>
      <view style="font-size: 28upx; margin-left: 422upx; margin-top: -48upx;">潮玩IDx{{ project.count }}</view>
    </view>
  </view>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Booking } from "../../type";
import { config } from "../../../config";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) item: Booking;
  @Prop({ default: {} }) project: Booking["projects"][0];
  config = config;

  async goDetail() {
    uni.navigateTo({ url: `/pages/booking/detail?id=${this.item.id}` });
  }
}
</script>

<style lang="stylus" scoped>
.button-rank1
  position relative
  display inline-block
  align-items center
  justify-content center
  text-align left
  .img
    width 607upx
    height 209upx
  .info
    position absolute
    left 20upx
    top 42upx
    font-size 28upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color var(--text-primary)
    z-index 1
  .status
    position absolute
    font-size 20upx
    color white
    right 19upx
    top 5upx
</style>
