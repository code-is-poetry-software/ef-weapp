<template>
  <view class="button-avatar" @click="$emit('click')">
    <img class="img" src="/static/image/button-avatar.png" mode="widthFix" />
    <img class="avatar" src="https://via.placeholder.com/132x83" />
    <view class="info">
      <view class="text">您的好友</view>
      <view class="text1">XXXXXX</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
.button-avatar
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 570upx
  .avatar
    position absolute
    width 240upx
    height 150upx
    top 0
    left 25upx
    clip-path: polygon(35% 0, 100% 0%, 65% 100%, 0 100%);
  .info
    position absolute
    left 205upx
    top 70upx
    color white
    z-index 1
    font-style italic
    font-family:Alibaba PuHuiTi;
    font-weight:bold;
    .text
      font-size:11px;
      margin-left 25upx
    .text1
      font-size:23px;
</style>
