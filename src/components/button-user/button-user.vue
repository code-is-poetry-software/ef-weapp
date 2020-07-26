<template>
  <view class="button-user" @click="$emit('click')">
    <img class="icon-user"  src="/static/image/icon-user.png" @click="navigateTo({ url: '/pages/user/index' })" mode="widthFix" />
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
.button-user
  .icon-user
    width 76upx
    height 66upx
</style>
