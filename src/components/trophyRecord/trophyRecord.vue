<template>
  <view class="trophyRecord" @click="$emit('click')">
		<view>
			<img class="img" src="/static/image/trophyRecord.png" />
		</view>
		<view class="info">
			<view class="text2">竞速无人机</view>
			<view class="text3">对战无人机</view>
		</view>
		<view class="info2">
			<view class="text4">1</view>
			<view class="text5">1</view>
			<view class="text6">1</view>
			<view class="text7">1</view>
			<view class="text8">1</view>
			<view class="text9">1</view>
		</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
.trophyRecord
  // display flex
  align-items center
  justify-content center
	.img
		width 450upx
		height 250upx
		margin-top: 26rpx;

	.info
		left 190upx
		top 45upx
		z-index 1
		font-style italic
		font-family Alibaba PuHuiTi
		font-weight bold
	.info2
		left 190upx
		top 45upx
		z-index 1
		font-style italic
		font-family Alibaba PuHuiTi
		font-weight bold
	.text2
		position absolute
		color #0090D9
		top 17upx
		left 46upx
	.text3
		position absolute
		color #0090D9
		top 170upx
		left 46upx
	.text4
		position absolute
		top 75upx      
		left 144upx    
		color #ECF5FF
	.text5
		position absolute
		top 75upx
		left 294upx
		color #ECF5FF
	.text6
		position absolute
		top 75upx
		left 451upx
		color #ECF5FF
	.text7
		position absolute
		top 235upx
		left 144upx
		color #ECF5FF
	.text8
		position absolute
		top 235upx
		left 294upx
		color #ECF5FF
	.text9
		position absolute
		top 235upx
		left 451upx
		color #ECF5FF
</style>
