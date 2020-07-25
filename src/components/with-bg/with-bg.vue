<template>
  <view class="with-bg">
    <img v-if="showTop" class="img top" src="/static/image/bg-img1.png" mode="widthFix" />
    <img v-if="showBottom" class="img bottom" src="/static/image/bg-img2.png" mode="widthFix" />
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: true }) showTop: boolean;
  @Prop({ default: true }) showBottom: boolean;
}
</script>

<style lang="stylus" scoped>
.with-bg
  .img
    width 750upx
    height 60upx
  .top
    position absolute
    top 0
    left 0
  .bottom
    position absolute
    bottom 0
    left 0
</style>
