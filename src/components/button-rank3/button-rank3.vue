<template>
  <view class="button-rank3" @click="$emit('click')">
		<view>
			<img class="img" src="/static/image/button-rank3.png" mode="widthFix" />
			<img class="details" src="/static/image/button-details.png"/>
			<view class="info2">
				<view class="text">查看详情</view>
			</view>
		</view>
    <view class="info">
      <view>项目: {{ _.get(item, "payments.0.title").substr(0, 7) }} </view>
      <view>时间: {{ item.date }}  </view>
			<view>
				&nbsp{{ item.checkInAt.substr(0, 5) }}&nbsp6人场
			</view>
    </view>
		
		<view class="status2"> 
		  <view>成绩：</view>
		  <!-- <view>{{ item.amount }}</view> -->
		  <view >5:0</view>
			<view>
			<!-- <img class="Line_3" src="/static/image/Line_3.png" mode="widthFix"/> lap -->
				
			</view>
		</view>
    <!-- <view class="status">{{ config.statusLabel[item.status] }}</view> -->
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
  .status
    position absolute
    font-size 20upx
    color white
    right 89upx
    top 5upx
	.status2
		position absolute
		font-size 20upx
		right 173upx
		top 50upx
		font-size 28upx
		font-family Alibaba PuHuiTi
		font-weight bold
		letter-spacing 2px
		color #0090D9
	.details
	  position absolute
	  width 164upx
	  height 31upx
	  left 495upx
	  top 19upx
	.text
	  position absolute
	  top 19upx
	  left 515upx
	  font-size 11px
	.Line_3
	  position absolute
		
</style>
