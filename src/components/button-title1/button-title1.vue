<template>
  <view class="button-title" @click="$emit('click')">
    <img class="img" src="/static/image/arrow-3.png" @click="uni.navigateBack()"  mode="widthFix" />
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
  display flex
  align-items center
  .img
    width 36upx
    right 0
    top 0
  .text
    margin-left 9upx
    font-size 37upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 4upx
    color rgba(0, 144, 217, 1)
    z-index 1
    font-style italic
</style>
