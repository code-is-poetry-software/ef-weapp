<template>
  <view class="user-index">
    <view class="header">
      <view>导航</view>
    </view>
    <view class="content">
      <view class="user-info">
        <button-avatar1 @click="e => navigateTo({ url: '/pages/racing/match' })" />
        <!-- <button size="mini" class="get-phonenubmer" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button> -->
      </view>

      <view class="cards">
        <view class="card">
          <button-userinfo label="余 额" value="XXXX" />
        </view>
        <view class="card">
          <button-userinfo label="积 分" value="XXXX" />
        </view>
        <view class="card">
          <button-userinfo label="玩家等级" value="萌新玩家" />
        </view>
      </view>

      <view class="menus">
        <view class="menu" @click="navigateTo({ url: '/pages/user/history' })">
          <img style="width: 451upx" src="/static/image/img-user-history.png" mode="widthFix" />
        </view>
        <view class="menu" @click="navigateTo({ url: '/pages/user/game' })">
          <img style="width: 451upx" src="/static/image/img-user-game.png" mode="widthFix" />
        </view>
        <view class="menu" @click="navigateTo({ url: '/pages/user/payment' })">
          <img style="width: 451upx" src="/static/image/img-user-payment.png" mode="widthFix" />
        </view>
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
}
</script>

<style lang="stylus" scoped>
.user-index
  .content
    margin 200upx auto 0
    width 80%
    .user-info
      display flex
      position relative
      .get-phonenubmer
        position absolute
        right 50upx
        bottom 0
    .cards
      display flex
      justify-content center
      margin-top 40upx
      .card
        display flex
        flex-direction column
        justify-content center
        align-items center
        vertical-align center
        margin 0 15upx
    .menus
      display flex
      flex-direction column
      align-items center
      margin-top 80upx
      .menu
        margin 15upx 0
</style>
