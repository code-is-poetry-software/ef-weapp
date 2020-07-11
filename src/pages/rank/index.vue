<template>
  <view class="rank">
    <view style="margin-left: 60upx;margin-top:60upx">
      <button-rank text="EF PARK排行榜" />
    </view>
    <view>
      <img class="icon-user" src="/static/image/icon-user.png" mode="widthFix" />
    </view>
    <view class="column-center" style="margin-top:100upx" @click="navigateTo({ url: '/pages/rank/detail' })">
      <view style="margin-top: 50upx">
        <button-rank-item text="竞速无人机排行榜" />
      </view>
      <view style="margin-top: 50upx">
        <button-rank-item text="对战无人机排行榜" />
      </view>
      <view style="margin-top: 50upx">
        <button-rank-item text="动力方程赛车排行榜" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class RankIndex extends Vue {}
</script>

<style lang="stylus" scoped>
.rank
  padding 120upx 0
  .icon-user
    width 41px
    height 36px
    position absolute
    right 61upx
    top 65upx
</style>
