<template>
  <view class="home-menu-item" @click="$emit('click')">
    <img class="img" src="/static/image/home-menu-item.png" mode="widthFix" style="height: 69upx;"/>
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
.home-menu-item
  position relative
  height 80upx
  display flex
  align-items center
  justify-content center
  .img
    width 566upx
		
    position absolute
  .text
    font-size 40upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color rgba(0, 144, 217, 1)
    z-index 1
</style>
