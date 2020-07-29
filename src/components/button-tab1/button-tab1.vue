<template>
  <view class="button-tab1" @click="$emit('click')">
    <img class="img" :src="active ? '/static/image/button-tab1-active.png' : '/static/image/button-tab1.png'" mode="widthFix" />
    <view class="text"> {{ text }} </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) text: string;
  @Prop({ default: false }) active: boolean;
}
</script>

<style lang="stylus" scoped>
.button-tab1
  position relative
  display flex
  align-items center
  margin 0 8upx
  .img
    width 130upx
		height 48upx
  .text
    position absolute
    font-size 26upx
    font-family Alibaba PuHuiTi
    left 24upx
    font-weight bold
    letter-spacing 2px
    color white
    z-index 1
</style>
