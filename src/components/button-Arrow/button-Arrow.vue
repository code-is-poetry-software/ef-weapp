<template>
	<view class="button-Arrow" @click="$emit('click')">
		<img class="arrow" src="/static/image/button-Arrow.png" mode="widthFix"/>
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
	.arrow
		height 150upx
		top 955upx
		position absolute
		width 600upx
</style>
