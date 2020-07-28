<template>
  <view class="button-avatar6" @click="$emit('click')">
    <img class="img" src="/static/image/button-avatar6.png" mode="widthFix" />
    <img class="Line_1_1" src="/static/image/Line_1_1" />
    <view class="info">
      <view class="text">ID: {{ user.name }}</view>
    </view>
    <view class="score">
      <text v-if="item.bestLap">
        <text v-if="item.bestLapIn" style="font-size: 18upx;">{{ item.bestLapIn }} 个</text>
        <text style="margin-left: 10upx; font-size: 27upx;">{{ _.get(item, "bestLap.duration") }} </text><text style="margin-left: 10upx; font-size: 22upx;">s/lap</text>
      </text>
      <text v-else>
        {{ item.result }}
      </text>
    </view>
    <view v-if="title" class="title">{{ title }}</view>
    <view v-if="rank" class="rank-info">
      <text class="rank">{{ rank }}</text>
      <text class="text">{{ rankText }}</text>
    </view>
    <view>
      <view class="text2">查看战绩</view>
    </view>
    <view class="avatar-box">
      <img class="avatar-bg" :src="user.avatarUrl" mode="widthFix" />
      <img class="avatar" :src="user.avatarUrl" style="height: 81upx;" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { User } from "../../type";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) title: string;
  @Prop({ default: "" }) item: any;
  @Prop({ default: "9" }) rank: string;

  get user() {
    return this.item.player || {};
  }

  get rankText() {
    if (this.rank == "1") return "st";
    if (this.rank == "2") return "nd";
    return "th";
  }
}
</script>

<style lang="stylus" scoped>
.button-avatar6
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 629upx
  .avatar-box
    position absolute
    width 132upx
    height 83upx
    top -5upx
    left 184upx
    background var(--primary)
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
    .avatar
      width 100upx
  .avatar-bg
    position absolute
    width 132upx
    filter blur(10upx)
  .info
    position absolute
    left 345upx
    top 40upx
    color white
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
    .text
      font-size 28upx
      margin-left -43upx
      margin-top -9upx
    .text1
      font-size 22upx
  .score
    position absolute
    left 246upx
    top 92upx
    color white
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
  font-size 22upx
.placeholder
  position absolute
  width 144upx
  height 86upx
  top 0upx
  left 168upx
  clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
.title
  position absolute
  left 108upx
  top 0
  color var(--text-primary)
  z-index 1
  font-style italic
  font-weight bold
  font-family Alibaba PuHuiTi
.rank-info
  position absolute
  left 109upx
  top -8upx
  color var(--text-primary)
  z-index 1
  font-style italic
  font-weight bold
  .rank
    font-family NightMachine
    font-size 113upx
  .text
    font-family Gotham-Bold
    font-size 18upx
.text2
  position absolute
  left 492upx
  top 100upx
  font-size 15upx
  color #FFFFFF
.Line_1_1
  position absolute
  width 350upx
  height 350upx
</style>
