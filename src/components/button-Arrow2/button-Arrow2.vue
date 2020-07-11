<template>
	<view class="button-Arrow" @click="$emit('click')">
		<img class="arrow2" src="/static/image/button-Arrow_2.png" mode="widthFix"/>
		<view class="text"> 开&nbsp&nbsp&nbsp始 </view>
	</view>
</template>
 
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component
export default class Template extends Vue {}
</script>
 
<style lang="stylus" scoped>
.button-Arrow
  // position relative 
  display flex 
  align-items center
  justify-content center
	.arrow2
		position absolute
		width 600upx
		height 150upx
		top 955upx
		color #0090D9
	.text
		position absolute
		color #ECF5FF
		top 981upx
		font-size 100upx
		
</style>
