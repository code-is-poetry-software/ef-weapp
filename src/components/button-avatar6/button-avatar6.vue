<template>
  <view class="button-avatar6" @click="$emit('click')">
    <img class="img" src="/static/image/button-avatar6.png" mode="widthFix" />
			<img class="Line_1_1"  src="/static/image/Line_1_1" />
    <view class="info">
      <view class="text">ID: {{ user.name }}</view>
    </view>
    <view class="score">
      5个 10‘6 s/lap
    </view>
    <view v-if="title" class="title">{{ title }}</view>
    <view v-if="rank" class="rank-info">
      <span class="rank">{{ rank }}</span>
      <span class="text">{{ rankText }}</span>
    </view>
		<view>
			<view class="text2">查看战绩</view>
		</view>
			<img class="placeholder" src="https://via.placeholder.com/132x83" />
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { User } from "../../type";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) user: User;
  @Prop({ default: "" }) title: string;
  @Prop({ default: "9" }) rank: string;

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
    top 5upx
    left 248upx
    background var(--primary)
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
    .avatar
      width 132upx
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
    left 243upx
    top 87upx
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
    left 80upx
    top -3upx
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
	.text2
		position absolute
		left 457upx
		top 89upx
		font-size 19upx
		color #FFFFFF
	.Line_1_1
		position absolute
		width 350upx
		height 350upx
</style>
