<template>
  <view class="booking-item" @click="$emit('click')">
    <img class="img" v-if="selectable" :src="active ? '/static/image/booking-item1-active.png' : '/static/image/booking-item1.png'" mode="widthFix" />
    <img class="img" v-else src="/static/image/booking-item.png" mode="widthFix" />

    <view class="info">
      <view class="flex">
        <view class="text" style="margin: 0 8upx 0 0;">场次:</view>
        <view class="gotham-bold" style="font-size: 23upx; margin-top: -6upx;">{{ item.date }} {{ item.checkInAt }}</view>
      </view>
      <view class="flex">
        <view style="font-size: 15upx; margin: 7upx 8upx 0 0;">项目:</view>
        <view style="font-size: 38upx; margin-top: -10upx;">{{ project.name }}</view>
        <view style="font-size: 15upx; margin: 7upx 8upx 0 20upx;">数量:</view>
        <view style="font-size: 38upx; margin-top: -12upx;">{{ project.count }}</view>
        <view v-if="WaitingCourses" style="font-size: 15upx; margin: 7upx 8upx 0 10upx;">等待:</view>
        <view v-if="WaitingCourses" style="font-size: 38upx; margin-top: -12upx;">{{ WaitingCourses }}</view>
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
  @Prop({ default: false }) selectable: boolean;
  @Prop({ default: false }) active: boolean;
  @Prop({ default: null }) watingProjects: any[];

  get WaitingCourses() {
    if (!this.watingProjects || !this.watingProjects.length) return;
    return this.watingProjects.find(i => i.name == this.project.name).waitingCourses;
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
    height 120upx
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
