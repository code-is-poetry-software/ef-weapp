<template>
  <view class="button-avatar2" @click="$emit('click')">
    <img class="button-avatar" src="/static/image/button-avatar2.png" mode="widthFix" />
    <img class="avatar2_1" src="/static/image/button-avatar2_1.png" />
    <img class="Line_1_1" src="/static/image/Line_1_1.png" /> 
    <img class="Line" src="/static/image/Line_1.png" /> 
		
    <img class="avatar" src="https://via.placeholder.com/132x83" />
    <view class="info">
      <view class="text">ID: 朱一旦的赛车手</view>
    </view>
		<view class="info2">
      <view class="text2"> 一号无人机</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
.button-avatar2
  // position relative
  display flex
  align-items center
  justify-content center
	// height 100%
  .img
    position absolute
    width 556upx,
	margin-top 300upx
  .avatar
    position absolute
    width 370upx 
    height 272upx 
    top 362upx
    left 148upx
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
	.button-avatar
		position absolute
		width 386upx 
		height 160upx
		top 655upx
		left 116upx
	.avatar2_1
		position absolute
		width 260upx
		height 272upx
		top 362upx
		left 346upx
	.Line
		position absolute
		width 260upx
		height 270upx
		top 388upx
		left 47upx
		transform rotate(-17deg)
	.Line_1_1
		position absolute
		top 356rpx
		left 232rpx
		width 30rpx
		height 50rpx
		transform: rotate(-3deg)
	.info
    left 190upx
    top 45upx
    color #ECF5FF
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
	.info2
    left 190upx
    top 45upx
    color #0090D9
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
	.text
		position absolute
		font-size 32upx
		top 670upx
		left 166upx
	.text2
		position absolute
		font-size 50upx
		top 1000upx
		left 232upx

</style>
