<template>
  <view class="button-Arrow" @click="$emit('click')">
    <img class="arrow" src="/static/image/button-Arrow.png" mode="widthFix" />
    <view class="text"> {{ text }}</view>
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
.button-Arrow
  display flex
  align-items center
  justify-content center
  .arrow
    width 500upx
		height 136upx
  .text
    position absolute
    font-size 58upx
    font-family Alibaba PuHuiTi
    font-weight bold
    color var(--text-primary)
    z-index 1
</style>
