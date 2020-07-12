<template>
  <view class="bg">
    <view class="inner">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  title = "Hello World!";
}
</script>

<style lang="stylus" scoped>
.bg
  position relative
  vertical-align top
  .inner
    background #009EEB
    clip-path polygon(20px 0, 100% 0, 100% 20%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 80%, 0 20px)
    &:after
      content ''
      position absolute
      clip-path polygon(20px 0, 100% 0, 100% 20%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 80%, 0 20px)
      top 1px
      left 1px
      right 1px
      bottom 1px
      background #fff
      z-index -1
</style>
