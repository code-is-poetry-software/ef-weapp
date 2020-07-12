<template>
  <view class="button-rank3" @click="$emit('click')">
		<view>
			<img class="img" src="/static/image/button-rank3.png" mode="widthFix" />
			<img class="details" src="/static/image/button-details.png" mode="widthFix"/>
			<view class="info2">
				<view class="text">查看战绩</view>
			</view>
		</view>
  </view>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Booking } from "../../type";
import { config } from "../../../config";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) item: Booking;
  config = config;
}
</script>

<style lang="stylus" scoped>
.button-rank3
  position relative
  display flex
  align-items center
  justify-content center
  text-align left
  .img
    width 607upx
  .info
    position absolute
    left 110upx
    top 13upx
    font-size 28upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color var(--text-primary)
    z-index 1
	.text
	  position absolute
	  top 19upx
	  left 515upx
	  font-size 11px
		
</style>
