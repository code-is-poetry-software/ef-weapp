<template>
	<view class="button-Arrow" @click="$emit('click')">
		<img class="arrow3" src="/static/image/arrow-3.png" mode="widthFix"/>
		<!-- <view class="text">{{ item.name }}</view> -->
	</view>
</template>
 
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component
export default class Template extends Vue {
	@Prop({
	  default: {
	    id: 0,
	    name: "潮玩项目",
	  }
	})
	item;
	Title;
}
</script>
 
<style lang="stylus" scoped>
.button-Arrow
  // position relative 
  display flex 
  align-items center
  justify-content center
	.arrow3
		position absolute
		top 50upx
		left 55upx
		width 32upx
		height 21upx
	.text
		position absolute
		color #0090D9
		top 50upx
		top 49upx
		left 107upx

		
		
</style>
