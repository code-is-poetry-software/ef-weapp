<template>
  <view class="button-rank1" @click="$emit('click')">
    <img class="img" src="/static/image/button-rank1.png" mode="widthFix" />
    <view class="info">
      <view>项目: {{ _.get(item, "payments.0.title").substr(0, 7) }} </view>
      <view>场次: {{ item.date }} {{ item.checkInAt.substr(0, 5) }} 6人场</view>
    </view>
    <view class="status">{{ config.statusLabel[item.status] }}</view>
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
.button-rank1
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
    top 42upx
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
</style>
