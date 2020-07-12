<template>
  <view class="icon-ranking" @click="$emit('click')">
    <img class="rankingr" src="/static/image/icon-ranking.png" />
		<view class="info">
		  <view class="text">35</view>
		</view>
		<img class="button-avatar2" src="/static/image/button-avatar2.png" />
		<img class="progres" src="/static/image/icon-progres.png" mode="widthFix"/>
		<view class="info2">
		  <view class="text2">CONFIRME</view>
		</view>
		<!-- 背景色 -->
		<view>
			<img class="backgroundClass" src="/static/image/background.png" />
		</view>
		<!-- 边框线 -->
		<view>
			<img class="rlineBorde" src="/static/image/rlineBorde.png" mode="widthFix"/>
		</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
.icon-ranking
  display flex
  align-items center
  justify-content center
	.button-avatar2
		position absolute
		width 282upx
		height 68upx
		top 263upx
		left 249upx

	.rankingr 
		position absolute
		width 133upx
		height 150upx
		top 225upx
		left 105upx
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
	  top 255upx
	  left 144upx
	  font-size 18px
	.text2
	  position absolute
	  top 216upx
	  left 288upx
	  font-size 15px
	.progres 
	  position absolute
	  width 55upx
	  height 55upx
	  top 285upx
	  left 266upx
	.backgroundClass
	  position absolute
	  width 595upx
	  height 960upx
  	top 400upx
	  left 34upx
	.rlineBorde
	  position absolute
	  top 135rpx
	  left 11rpx

</style>
