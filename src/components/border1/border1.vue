<template>
  <view class="bg">
    <view class="inner">
      <slot></slot>
    </view>
    <view v-if="title" class="title">
      <view style="position: relative;">
        <img class="img" src="/static/image/button-rank.png" mode="widthFix" style="height: 48upx;"/>
        <view class="text">{{ title }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({}) title: string;
}
</script>

<style lang="stylus" scoped>
.bg
  position relative
  vertical-align top
  min-height 200upx
  .inner
    background #009EEB
    clip-path polygon(40upx 0, 100% 0, 100% 20%, 100% calc(100% - 40upx), calc(100% - 40upx) 100%, 0 100%, 0 80%, 0 40upx)
    &:after
      content ''
      position absolute
      clip-path polygon(40upx 0, 100% 0, 100% 20%, 100% calc(100% - 40upx), calc(100% - 40upx) 100%, 0 100%, 0 80%, 0 40upx)
      top 1px
      left 1px
      right 1px
      bottom 1px
      background #fff
      z-index -1
  .title
    position absolute
    left 63upx
    top -25upx
    width 300upx
    .img
      position absolute
      width 300upx
      left 0
      top 0
    .text
      position absolute
      left 50upx
      top 5upx
      z-index 1
      font-size 27upx
      font-family Alibaba PuHuiTi
      font-weight bold
      color white
</style>
