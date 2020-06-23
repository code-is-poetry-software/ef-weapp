<template>
  <view class="booking-item" @click="$emit('click')">
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
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
.booking-item
  position relative
  width 100%
  height 130upx
  display flex
  align-items center
  justify-content center
  .img
    position absolute
    z-index -1
</style>
