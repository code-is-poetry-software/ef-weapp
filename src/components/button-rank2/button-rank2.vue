<template>
  <view class="button-rank2" @click="$emit('click')">
    <img class="img" src="/static/image/button-rank2.png" mode="widthFix" />
    <view class="info">
      <view style="font-size:16upx;">项目:</view>
			<view style="font-size: 28upx;margin-left: 46upx;margin-top: -30upx;">{{ _.get(item, "payments.0.title").substr(0, 7) }} </view>
      <view style="font-size: 16upx;margin-top: 20upx;">时间:</view>
			<view style="font-size: 28upx;margin-left: 46upx;margin-top: -30upx;"> {{ item.date }} </view>
			<view style="margin-left: 42upx;">
				&nbsp{{ item.checkInAt.substr(0, 5) }}&nbsp6人场
			</view>
			<view class="status2"> 
				<view style="margin-left: -95upx;font-size: 16upx;">成绩：</view>
				<view style="margin-left: -57upx;">5:0</view>
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
.button-rank2
  position relative
  display inline-block
  align-items center
  justify-content center
  text-align left
  .img
    width 607upx
  .info
    position absolute
    left 37upx
    top 23upx
    font-size 28upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color var(--text-primary)
    z-index 1
  .status
    position absolute
    font-size 20upx
    color white
    right 89upx
    top 5upx
	.status2
		font-size 20upx
		right 173upx
		margin-top -63upx
		margin-left 420upx
		font-size 28upx
		font-family Alibaba PuHuiTi
		font-weight bold
		letter-spacing 2px
		color #0090D9
</style>
