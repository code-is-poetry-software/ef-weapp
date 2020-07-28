<template>
  <view class="button-userinfo" @click="$emit('click')">
    <img class="img" src="/static/image/button-userinfo.png" mode="widthFix" />
    <view class="text">
      <view class="label">{{ label }}</view>
      <view class="line" />
      <view class="value">{{ value }}</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) label: string;
  @Prop({ default: "" }) value: string;
}
</script>

<style lang="stylus" scoped>
.button-userinfo
  position relative
  display flex
  align-items center
  justify-content center
  text-align center
  .img
    width 175upx
		height 156upx
  .text
    margin -10upx 0 0 -4upx
    position absolute
    font-size 34upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 1px
    color #0090D9
    z-index 1
    font-style italic
    .label
      font-size 24upx
		.value
		  font-size 30upx
  .line
    width 130upx
    border 1px solid rgb(0, 144, 217)
    margin 4upx 0
</style>
