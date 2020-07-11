<template>
  <view class="user-payment page">
    <with-bg />
    <view style="padding:140upx 62upx 113upx 58upx" class="flex justify-between align-center">
      <button-title1 text="消费明细" />
      <icon-details />
    </view>
    <view class="list">
      <view class="list-item" v-for="item in list" :key="item">
        <view style="margin-bottom: 17upx">
          <button-payment />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  list = [1, 2, 3, 4, 5];
}
</script>

<style lang="stylus" scoped>
.user-payment
  position: relative
</style>
