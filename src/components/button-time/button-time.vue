<template>
	<view class="button-Arrow" @click="$emit('click')">
		<img class="timeClass" src="/static/image/button_time.png" mode="widthFix"/>
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
	.timeClass
		height 150upx
		width 300upx
</style>
