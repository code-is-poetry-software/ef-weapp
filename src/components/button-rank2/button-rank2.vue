<template>
  <view class="button-rank2" @click="$emit('click')">
    <img class="img" src="/static/image/button-rank2.png" mode="widthFix" />
    <view class="info">
      <view>项目: {{ _.get(item, "payments.0.title").substr(0, 7) }} </view>
      <view>时间: {{ item.date }}  </view>
			<view>
				&nbsp{{ item.checkInAt.substr(0, 5) }}&nbsp6人场
			</view>
		<view class="status2"> 
		  <view style="margin-left: -95upx;">成绩：</view>
		  <view >5:0</view>
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
		font-size 20upx
		right 173upx
		margin-top -71upx
		margin-left 420upx
		font-size 28upx
		font-family Alibaba PuHuiTi
		font-weight bold
		letter-spacing 2px
		color #0090D9
</style>
