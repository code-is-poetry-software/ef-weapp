<template>
  <view class="button-details" @click="$emit('click')">
    <img class="button-avatar" src="/static/image/button-avatar2.png" />
    <img class="Line_1_1" src="/static/image/Line_1_1.png" /> 
    <img class="Line" src="/static/image/Line_1.png" /> 
    <img class="loadingBar" src="/static/image/loadingBar.png" mode="widthFix"/> 
    <img class="avatar" src="https://via.placeholder.com/132x83" />
    <view class="info">
      <view class="text">ID: 朱一旦的赛车手</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
.button-details
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
    width 300upx 
    height 202upx 
    top -35upx
    left 62upx
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
	.button-avatar
		position absolute
		width 464upx 
		height 107upx
		top 84upx
		left 131upx
	.Line
		position absolute
		width 260upx
		height 80upx
		top 46upx
		left -40upx
		transform rotate(-45deg)
	.Line_1_1
		position absolute
		top -33upx
		left 122upx
		width 30upx
		height 50upx
		transform: rotate(-3deg)
	.info
    left 190upx
    top 45upx
    color #ECF5FF
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
	.text
		position absolute
		font-size 29upx
		top 119upx 
		left 297upx
	.loadingBar
	  position absolute
	  left 244upx
	  width 345upx
	  height 56upx
	  top 37upx
</style>
