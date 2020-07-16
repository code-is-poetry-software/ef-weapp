<template>
  <view class="button-avatar" @click="$emit('click')">
    <u-grid :col="2" :border="false">
      <u-grid-item v-for="item in items" :key="item.value">
        <button-pattern :activeItem.sync="activeItem" :item="item" @click="setActiveItem(item)" />
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) activeItem: string;
  @Prop({ default: [] }) items: Array<{ label: string; value: string }>;
  @Prop({ default: false }) disabled: boolean;

  setActiveItem(item) {
    if (this.disabled) return;
    this.$emit("update:activeItem", item.value);
  }
}
</script>

<style lang="stylus" scoped>
.button-avatar
  display flex
  align-items center
  justify-content center
</style>
