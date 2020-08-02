<template>
  <view class="button-pattern" @click="$emit('click')">
    <img class="img" :src="active ? '/static/image/button-pattern-active.png' : '/static/image/button-pattern.png'" mode="widthFix" />
    <view class="text">{{ item.label }}</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: null }) activeItem: string;
  @Prop({ default: null }) item: {
    label: string;
    value: string;
  };

  get active() {
    return this.activeItem == this.item.value;
  }
}
</script>

<style lang="stylus" scoped>
.button-pattern
  position relative
  display inline-block
  .img
    width 300upx
  height 72upx
.text
  position absolute
  left 20upx
  top 12upx
  color white
  z-index 1
  font-style italic
  font-weight bold
  font-size 24upx
</style>
