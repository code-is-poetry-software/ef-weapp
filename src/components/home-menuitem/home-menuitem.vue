<template>
  <view class="home-menu-item" @click="$emit('click')">
    <img class="img" src="/static/image/home-menu-item.png" mode="widthFix" />
    <view>{{ text }}</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop() text: string = "";
}
</script>

<style lang="stylus" scoped>
.home-menu-item
  position relative
  width 100%
  height 80upx
  display flex
  align-items center
  justify-content center
  .img
    position absolute
    z-index -1
</style>
