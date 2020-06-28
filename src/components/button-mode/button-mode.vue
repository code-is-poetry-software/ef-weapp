<template>
  <view class="button-mode" @click="$emit('click')">
    <img class="img" src="/static/image/button-mode.png" mode="widthFix" />
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
.button-mode
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 430upx
  .text
    position absolute
    left 80upx
    top 35upx
    font-size 17px
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color white
    z-index 1
    font-style italic
</style>
