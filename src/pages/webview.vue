<template>
  <view class="content">
    <web-view :webview-styles="webviewStyles" :src="url"></web-view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { config } from "../../config";

@Component
export default class Template extends Vue {
  url = config.gameExternalUrl;
  webviewStyles = {};
}
</script>

<style lang="stylus" scoped>
.title
  font-size 20upx
</style>
