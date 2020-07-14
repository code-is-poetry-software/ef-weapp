<template>
	<view class="button-diamond">
	  <img class="Diamond" src="/static/image/Button_Diamond.png" mode="widthFix"/> 
		<view class="text"> 验&nbsp&nbsp票 </view>
	</view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
	.button-diamond 
		position relative
		display flex
		align-items center
		justify-content center
		.Diamond
			width 301upx
			height 130upx
		.text
			position absolute
			font-size 50rpx
			color #0090D9

				
</style>
