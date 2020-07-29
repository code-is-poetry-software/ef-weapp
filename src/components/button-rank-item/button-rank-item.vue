<template>
  <view class="button-rank-item" @click="$emit('click')">
    <img class="img" src="/static/image/button-rank-item.png" mode="widthFix" style="height: 96upx;"/>
    <view class="text">{{ text }}</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) text: string;
}
</script>

<style lang="stylus" scoped>
.button-rank-item
  position relative
  width 540upx
  height 96upx
  display flex
  align-items center
  justify-content center
  .img
    position absolute
    width 100%
    right 0
    top 0
  .text
    position absolute
    left 70upx
    top 12upx
    font-size 46upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 1upx
    color white
    z-index 1
    font-style italic
</style>
