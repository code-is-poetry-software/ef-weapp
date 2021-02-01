<template>
  <view class="user-index page">
    <with-bg />
    <get-phonenumber />
    <view style="padding: 140upx 0 183upx 58upx;">
      <button-title1 text="导航" @click="navigateBack" />
    </view>

    <view class="content">
      <view class="user-info">
        <button-avatar1 :user="user" />
      </view>
      <border1>
        <view class="cards">
          <view class="card">
            <button-userinfo label="余 额" :value="balance || 0" />
          </view>
          <view class="card">
            <button-userinfo label="积 分" :value="points || 0" />
          </view>
          <view class="card">
            <button-userinfo label="玩家等级" :value="user.level" />
          </view>
        </view>

        <view class="menus">
          <view class="menu" @click="navigateTo({ url: '/pages/user/history' })">
            <img style="width: 451upx;height: 122upx;" src="/static/image/img-user-history.png" mode="widthFix" />
          </view>
          <view class="menu" @click="navigateTo({ url: '/pages/user/game' })">
            <img style="width: 451upx;height: 122upx;" src="/static/image/img-user-game.png" mode="widthFix" />
          </view>
          <view class="menu" @click="navigateTo({ url: '/pages/user/payment' })">
            <img style="width: 451upx;height: 122upx;" src="/static/image/img-user-payment.png" mode="widthFix" />
          </view>
        </view>
      </border1>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { event } from "../../utils/event";
import { authStore } from "../../store/auth";

@Component
export default class UserIndex extends Vue {
  get user() {
    return authStore.user;
  }

  get balance() {
    return +Number(this.user.balance).toFixed(2);
  }

  get points() {
    return Number(this.user.points).toFixed(0);
  }

  onLoad() {
    // if (process.env.NODE_ENV == "development") {
    authStore.wechatLogin();
    // }
  }

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
  position relative
  padding 0 0
  .content
    margin 0 auto
    width 629upx
    position relative
    .user-info
      display flex
      position absolute
      left 0
      text-align center
      z-index 10
      top -100upx
      justify-content center
      width 100%
      .get-phonenubmer
        position absolute
        right 50upx
        bottom 0
    .cards
      display flex
      justify-content center
      padding-top 100upx
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
      padding 80upx 0
      .menu
        margin 15upx 0
</style>
