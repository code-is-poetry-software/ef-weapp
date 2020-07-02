<template>
  <view class="button-avatar1" @click="$emit('click')">
    <img class="img" src="/static/image/button-avatar1.png" mode="widthFix" />
    <img class="avatar" src="https://via.placeholder.com/132x83" />
    <view class="info">
      <view class="text">ID: 朱一旦的赛车手</view>
      <view class="text1">手机号: XXXXXXXX</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
.button-avatar1
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 556upx
  .avatar
    position absolute
    width 210upx
    height 132upx
    top 0
    left 15upx
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
  .info
    position absolute
    left 190upx
    top 45upx
    color white
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
    .text
      font-size 28upx
      margin-left 15upx
    .text1
      font-size 22upx
</style>
