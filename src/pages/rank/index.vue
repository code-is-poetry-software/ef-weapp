<template>
  <view class="rank">
    <view>EF PARK排行榜</view>
    <view>
      <view>竞速无人机排行榜</view>
      <view>对战无人机排行榜</view>
      <view>动力方程赛车排行榜</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class RankIndex extends Vue {}
</script>

<style lang="stylus" scoped>
.title
  font-size 20upx
</style>
