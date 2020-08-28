<template>
  <view class="rank page">
    <with-bg />
    <view style="margin-left: 60upx; margin-top: 60upx;">
      <button-rank text="EF PARK排行榜" />
    </view>
    <view>
      <img class="icon-user" src="/static/image/icon-user.png" @click="navigateTo({ url: '/pages/user/index' })" mode="widthFix" />
    </view>
    <view class="column-center" style="margin-top: 100upx;">
      <view style="margin-top: 50upx;" v-for="item in projects" :key="item" @click="goDetail(item)">
        <button-rank-item :text="item + '排行榜'" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class RankIndex extends Vue {
  projects = ["竞速无人机", "对战无人机", "动力方程赛车"];

  goDetail(item: string) {
    if (item == "动力方程赛车") {
      uni.navigateTo({ url: `/pages/webview` });
    } else {
      uni.showToast({
        title: "排行榜即将上线",
        icon: "none"
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
.rank
  position relative
  padding 120upx 0
  .icon-user
    width 76upx
    height 66upx
    position absolute
    right 61upx
    top 65upx
</style>
