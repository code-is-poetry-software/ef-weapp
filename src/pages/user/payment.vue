<template>
  <view class="user-payment page">
    <with-bg />
    <view style="padding:140upx 0 113upx 58upx">
      <button-title1 text="消费明细" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  title = "Hello World!";
}
</script>

<style lang="stylus" scoped>
.user-payment
  position: relative
</style>
