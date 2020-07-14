<template>
  <view class="playerDetails page">
    <with-bg />
    <view>
      <button-pattern-switcher :activeItem.sync="activeItem" />
    </view>
    <view style="margin: 80upx ">
      <u-grid :col="3" :border="false">
        <u-grid-item v-for="item in 6" :key="item">
          <button-avatar2 type="small" />
        </u-grid-item>
      </u-grid>
    </view>
		<view style="margin-left: 205upx;font-size: 100upx;color: #0090D9;">01’12</view>
    <view style="margin-top: 155upx;">
      <button-time />
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
.playerDetails
  position relative
  padding 200upx 0
</style>
