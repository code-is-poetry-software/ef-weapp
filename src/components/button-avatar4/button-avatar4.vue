<template>
  <view class="button-avatar4" @click="$emit('click')">
    <img class="img" src="/static/image/button-avatar6.png" mode="widthFix" />
    <view>
      <view class="text2">查看战绩</view>
    </view>
    <view class="avatar-box">
      <img class="avatar-bg" :src="user.avatarUrl" mode="widthFix" />
      <img class="avatar" :src="user.avatarUrl" mode="widthFix" />
    </view>
    <view class="info">
      <view class="text">ID: {{ user.name }}</view>
    </view>
    <view class="score">
      <text v-if="item.bestLap" style="margin-left: 20upx;">
        <text v-if="item.bestLapIn" style="font-size: 15upx;">{{ item.bestLapIn }} 个</text>
        <text style="margin-left: 10upx; font-size: 27upx;">{{ _.get(item, "bestLap.duration") }} </text><text style="margin-left: 10upx; font-size: 22upx;">s/lap</text>
      </text>
      <text v-else style="margin-left: 80upx;">
        {{ item.result }}
      </text>
    </view>
    <view v-if="title" class="title" style="margin-top: -16upx;">{{ title }}</view>
    <view v-if="rank" class="rank-info">
      <span class="rank">{{ rank }}</span>
      <span class="text">{{ rankText }}</span>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { User } from "../../type";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) item: any;
  @Prop({ default: "" }) title: string;
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
.button-avatar4
  position relative
  display flex
  align-items center
  justify-content center
  display inline-block
  .img
    width 629upx
		height 138upx
  .avatar-box
    position absolute
    width 132upx
    height 83upx
    top -2upx
    left 200upx
    background var(--primary)
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
		.avatar
			height 52upx
			width 105upx
		.avatar-bg
			position absolute
			height 66upx
			width 132upx
			filter blur(10upx)
  .info
    position absolute
    left 285upx
    top 40upx
    color white
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
    .text
      font-size 28upx
      margin-left 30upx
    .text1
      font-size 22upx
  .score
    position absolute
    left 265upx
    top 96upx
    color white
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
  .title
    position absolute
    left 48upx
    top 0
    color var(--text-primary)
    z-index 1
    font-style italic
    font-weight bold
    font-family Alibaba PuHuiTi
  .rank-info
    position absolute
    left 127upx
    top 20upx
    color var(--text-primary)
    z-index 1
    font-style italic
    font-weight bold
    .rank
      font-family NightMachine
      font-size 89upx
    .text
      font-family Gotham-Bold
      font-size 23upx
      margin-left 4upx
  .text2
    position absolute
    left 524upx
    top 105upx
    font-size 19upx
    color #FFFFFF
</style>
