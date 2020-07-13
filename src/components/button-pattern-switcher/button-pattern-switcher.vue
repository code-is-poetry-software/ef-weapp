<template>
  <view class="button-avatar" @click="$emit('click')">
    <view>
      <button-pattern :activeItem.sync="activeItem" item="对战模式" @click="$emit('update:activeItem', '对战模式')" />
    </view>
    <view style="margin-left:15upx ">
      <button-pattern :activeItem.sync="activeItem" item="竞速模式" @click="$emit('update:activeItem', '竞速模式')" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "对战模式" }) activeItem: string;
}
</script>

<style lang="stylus" scoped>
.button-avatar
  display flex
  align-items center
  justify-content center
</style>
