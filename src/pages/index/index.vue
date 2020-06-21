<template>
  <view class="content">
    <get-phonenumber></get-phonenumber>
    <u-button @click="navigateTo({ url: '/pages/game/car' })">电动赛车</u-button>
    <u-button @click="navigateTo({ url: '/pages/game/uav' })">竞速潮玩</u-button>
    <u-button @click="navigateTo({ url: '/pages/rank/index' })">排行榜</u-button>
    <u-button @click="navigateTo({ url: '/pages/user/index' })">我的潮玩ID</u-button>
    <u-button @click="test">Test</u-button>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { checkMobile } from "../../utils/hooks";

@Component
export default class Index extends Vue {
  navigateTo({ url }: { url: string }) {
    uni.navigateTo({ url });
  }
  async test() {
    await checkMobile();
  }
}
</script>

<style lang="stylus" scoped>
.e-button-primary
  width 300upx
  height 200upx
  border-radius 0
  background linear-gradient(117deg, transparent 15px, #58a 0, #58a calc(100% - 15px), transparent 15px) top left
  &:after
    border none
</style>
