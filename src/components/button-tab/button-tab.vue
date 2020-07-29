<template>
  <view class="button-tab"   @click="$emit('click')"> 
    <img class="img" :src="active ? '/static/image/button-tab-active.png' : '/static/image/button-tab.png'" mode="widthFix" />
    <view class="text" :style="styleClass"> {{ text }} </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) text: string;
  @Prop({ default: false }) active: boolean;
  @Prop({ default: "" }) styleClass: string;
}
</script>

<style lang="stylus" scoped>
.button-tab
  position relative
  display  inline-block
  align-items center
  margin 0 8upx
  .img
    width 181upx
		height 48upx
  .text
    position absolute
    font-size 31upx
    font-family Alibaba PuHuiTi
    left 30upx
    font-weight bold
    letter-spacing 2px
    color white
    z-index 1
</style>
