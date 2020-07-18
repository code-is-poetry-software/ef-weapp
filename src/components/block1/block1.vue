<template>
  <view class="block">
    <slot></slot>
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
.block
  position relative
  vertical-align top
  min-height 400upx
  background var(--secondary)
  clip-path polygon(20px 0, 100% 0, 100% 20%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 80%, 0 20px)
</style>
