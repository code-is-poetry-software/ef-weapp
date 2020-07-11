<template>
  <view class="icon-details">
    <img class="details" src="/static/image/icon-details.png" mode="widthFix" />
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component
export default class Template extends Vue {}
</script>

<style lang="stylus" scoped>
.icon-details
  .details
    width 75upx
</style>
