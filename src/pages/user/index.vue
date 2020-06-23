<template>
  <view class="user-index">
    <view class="header">
      <view>导航</view>
    </view>
    <view class="content">
      <view class="user-info">
        <button size="mini" class="get-phonenubmer" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
      </view>

      <view class="cards">
        <view class="card">
          <view>余额</view>
          <view>XXXX</view>
        </view>
        <view class="card">
          <view>积分</view>
          <view>XXXX</view>
        </view>
        <view class="card">
          <view>玩家等级</view>
          <view>萌新玩家</view>
        </view>
      </view>

      <view class="menus">
        <view class="menu" @click="navigateTo({ url: '/pages/user/history' })">潮玩记录</view>
        <view class="menu" @click="navigateTo({ url: '/pages/user/game' })">潮玩项目</view>
        <view class="menu" @click="navigateTo({ url: '/pages/user/payment' })">消费明细</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { event } from "../../utils/event";
import { authStore } from "../../store/auth";

@Component
export default class UserIndex extends Vue {
  async getPhoneNumber(res) {
    if (!res.detail.encryptedData) return;
    try {
      await authStore.getPhoneNumber(res);
      event.emit("mobile");
    } catch (error) {}
  }

  navigateTo({ url }: { url: string }) {
    uni.navigateTo({ url });
  }
}
</script>

<style lang="stylus" scoped>
.user-index
  .content
    margin 0 auto
    width 80%
    .user-info
      display flex
      background #98d4f9
      width 600upx
      height 180upx
      position relative
      .get-phonenubmer
        position absolute
        right 50upx
        bottom 0
    .cards
      display flex
      justify-content center
      .card
        display flex
        flex-direction column
        justify-content center
        align-items center
        vertical-align center
        height 180upx
        width 180upx
        background #98d4f9
        margin 10upx
    .menus
      display flex
      flex-direction column
      align-items center
      .menu
        margin 20upx 0
        width 500upx
        height 100upx
        background #98d4f9
</style>
