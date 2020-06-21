<template>
  <view class="content">
    <text class="title">{{ title }}</text>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class UserIndex extends Vue {
  onLaunch() {}
  title = "Hello World!";
}
</script>

<style lang="stylus" scoped>
.title
  font-size 20upx
</style>
