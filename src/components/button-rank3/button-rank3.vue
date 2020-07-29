<template>
  <view class="button-rank3" @click="$emit('click')">
    <view>
      <img class="img" :src="type == '1' ? '/static/image/button-rank3.png' : '/static/image/button-rank2.png'" mode="widthFix" />
      <view class="text" v-if="type == '1'">查看详情</view>
    </view>
    <view class="info">
      <view style="font-size: 16upx;">
        <text>项目:</text>
        <text style="font-size: 28upx; margin-left: 8upx;">{{ item.project || project }} </text>
      </view>
      <view class="flex items-center" style="margin-top: 10upx;">
        <view>
          <view>
            <text style="font-size: 16upx;">时间:</text>
            <text style="font-size: 26upx; margin-left: 8upx;"> {{ moment(item.createdAt).format("YYYY年MM月DD日") }} </text>
          </view>
          <view style="margin-left: 48upx;">
            <text>{{ moment(item.createdAt).format("hh:mm") }} </text>
            <text v-if="item.playersInCourse" style="margin-left: 10upx;">{{ item.playersInCourse }}人场</text>
          </view>
        </view>
        <view v-if="item" style="margin-left: 10upx;">
          <view style="font-size: 16upx;">成绩：</view>
          <view v-if="item">
            <text v-if="item.bestLapIn">
              <text style="font-size: 18upx;">{{ item.bestLapIn }} 个</text>
              <text style="margin-left: 10upx; font-size: 27upx;">{{ _.get(item, "bestLap.duration") }} </text><text style="margin-left: 10upx; font-size: 22upx;">s/lap</text>
            </text>
            <text v-else>
              {{ item.result }}
            </text>
          </view>
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
  @Prop({ default: "1" }) type: string;
  @Prop({ default: "" }) project: string;

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
		height 156upx
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
  position absolute
  font-size 20upx
  right 173upx
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
  top 25upx
  left 483upx
  font-size 17upx
</style>
