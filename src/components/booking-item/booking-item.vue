<template>
  <view class="booking-item" @click="$emit('click')">
    <img class="img" src="/static/image/booking-item.png" mode="widthFix" />
    <view class="info">
      <view>场次: {{ item.date }} {{ item.checkInAt }}</view>
      <view class="flex">
        <view>项目: {{ project.name }}</view>
        <view style="margin-left: 5px">数量: {{ project.count }}</view>
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
