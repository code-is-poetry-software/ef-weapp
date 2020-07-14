<template>
  <view class="checkin page">
    <with-bg />
    <button-pattern-switcher :activeItem.sync="activeItem" />

    <view style="margin: 80upx ">
      <u-grid :col="3" :border="false">
        <u-grid-item v-for="item in 6" :key="item">
          <button-avatar2 type="small" />
        </u-grid-item>
      </u-grid>
    </view>
    <view style="margin-left: 8upx;">
      <button-diamond />
    </view> 
    <view style="margin-top: 105upx;">
      <button-Arrow2 />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
export default {
  data() {
    return {
      activeItem: "对战模式"
    };
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.checkin
  position relative
  padding 200upx 0
</style>
