<template>
  <view class="content">
    <text class="title">{{ title }}</text>
    <u-button @click="setTitle">按钮</u-button>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { templateStore } from "../../store/template";

@Component
export default class Index extends Vue {
  get title() {
    return templateStore.title;
  }

  setTitle() {
    templateStore.title = "Hello Vue~";
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 20upx
</style>
