<template>
	<view class="icon-details">
		<img class="details" src="/static/image/icon-details.png" mode="widthFix" />
	</view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
	.icon-details
	  position relative
	  display flex
	  align-items center
	  justify-content center
		.details
		 position absolute
		 width 75upx
		 height 30upx
		 top 9upx
		 left 603upx

		 
</style>
