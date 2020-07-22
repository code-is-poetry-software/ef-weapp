<template>
  <view class="button-rank3" @click="$emit('click')">
		<view>
			<img class="img" src="/static/image/button-rank3.png" mode="widthFix" />
				<view class="text">查看详情</view>
			</view>
    <view class="info">
      <view style="font-size:16upx;">项目:</view>
			<view style="font-size: 28upx;margin-left: 46upx;margin-top: -32upx;">{{item.project }} </view>
      <view style="font-size: 16upx;margin-top: 20upx;">时间:</view>
			<view style="font-size: 28upx;margin-left: 46upx;margin-top: -32upx;"> {{ moment(item.createdAt).format('YYYY年MM月DD日') }} </view>
			<view style="margin-left: 42upx;">
			  <text>{{ moment(item.createdAt).format('hh:mm')  }} </text>
        <text v-if="item.playersInCourse">{{item.playersInCourse}}人场</text>
			</view>
			<view class="status2"> 
				<view style="margin-left: -95upx;font-size: 16upx;margin-top: 10upx;">成绩：</view>
				<view style="margin-left: -57upx;">{{item.result}}</view>
			</view>
		</view>
    </view>
		
  </view>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { config } from "../../../config";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) item: any;
  config = config;
}
</script>

<style lang="stylus" scoped>
.button-rank3
  position relative
  display inline-block
  align-items center
  justify-content center
  text-align left
  color white
  .img
    width 607upx
  .info
    position absolute
    left 33upx
    top 22upx
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
  margin-top -75upx
  margin-left 420upx
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
  top 26upx
  left 471upx
  font-size 17upx
</style>
