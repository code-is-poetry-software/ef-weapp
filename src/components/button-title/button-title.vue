<template>
  <view class="button-title" @click="$emit('click')">
    <img class="img" src="/static/image/button1.png" mode="widthFix" />
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
.button-title
  position relative
  width 320upx
  height 80upx
  display flex
  align-items center
  justify-content center
  .img
    position absolute
    width 400upx
    height 100upx
    right 0
    top 0
  .text
    position absolute
    left 120upx
    top 32upx
    font-size 28upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color rgba(0, 144, 217, 1)
    z-index 1
    font-style italic
</style>
