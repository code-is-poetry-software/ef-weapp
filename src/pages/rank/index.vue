<template>
  <view class="rank">
    <view>EF PARK排行榜</view>
    <view @click="navigateTo({ url: '/pages/rank/detail' })">
      <view>竞速无人机排行榜</view>
      <view>对战无人机排行榜</view>
      <view>动力方程赛车排行榜</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class RankIndex extends Vue {
  navigateTo({ url }: { url: string }) {
    uni.navigateTo({ url });
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 20upx
</style>
