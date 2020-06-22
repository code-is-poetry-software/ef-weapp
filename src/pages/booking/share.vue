<template>
  <view class="content">
    <button @click="join">立即加入</button>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class BookingDetail extends Vue {
  async join(){

  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 20upx
</style>
