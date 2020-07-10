<template>
  <view class="button-avatar" @click="$emit('click')">
    <img class="pattern_true" src="/static/image/pattern_true.png"  mode="widthFix" />
    <img class="pattern_false.png" src="/static/image/pattern_false.png"  mode="widthFix" />
		<image class="arrow_1" src="/static/image/arrow_1.png"  />
		<image class="arrow_2" src="/static/image/arrow_2.png"  />
		<view>
			<view class="DZMS">对战模式</view>
		</view>
		<view>
			<view class="JSMS">竞速模式</view>
		</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
.button-avatar
  // position relative
  display flex
  align-items center
  justify-content center
	// height 100%
	.pattern_true
		position absolute
		width 320upx
		height 46upx
		top 80upx
		left 45upx
	.pattern_false
		position absolute
		width 320upx
		height 46upx
		top: 80upx
		left: 390upx
	.DZMS
		position absolute
		top 95upx
		left 122upx
	.JSMS
		position absolute
		top 95upx
		left 463upx
	.arrow_1
		position absolute
		width 27upx
		height 41upx
		top 95upx
		left 301upx
	.arrow_2
		position absolute
		width 27upx
		height 41upx
		top 95upx
		left 644upx
</style>
