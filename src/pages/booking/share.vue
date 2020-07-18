<template>
  <view class="share column-center">
    <view>
      <img class="icon-user" src="/static/image/icon-user.png" mode="widthFix" />
    </view>
    <view class="user-share column-center">
      <button-avatar :user="user" />
      <view class="share-text">
        邀请您一起加入潮玩队伍！
      </view>
    </view>
    <view class="share-info">
      <img class="absolute" style="100%;z-index:-1" src="/static/image/view1.png" mode="widthFix" />
      <view class="text" style="display: flex">
        <text class="field-text">
          场次:
        </text>
        <text style="font-size: 21px;margin-top: -10upx;">
          2020-06-08\n12:00-14:00
        </text>
      </view>
      <view class="text" style="margin-top:21upx;">
        <span class="field-text">项目:</span>
        <span class="field-text2">竞速无人机</span>
      </view>
    </view>
    <view @click="join">
      <button-pay text="立即加入" />
    </view>
    <text class="remind">为避免入园后长期等待\n 请10:00入场，时段内尽早为您排场\n （注：12:00入园无法时段内排场）</text>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { wechatLogin } from "../../../common/vmeitime-http";
import { authStore } from "../../store/auth";

@Component
export default class BookingDetail extends Vue {
  get user() {
    return authStore.user;
  }
  onLoad() {
    authStore.wechatLogin();
  }

  async join() {
    uni.navigateTo({ url: "/pages/booking/detail" });
  }
}
</script>

<style lang="stylus" scoped>
.share
  padding 220upx 0
  .icon-user
    width 76upx
    height 66upx
    position absolute
    right 61upx
    top 65upx
  .user-share
    margin-bottom 80upx
    .share-text
      color var(--text-primary)
      font-size 35upx
      font-family AlibabaPuHuiTiB-GBpc-EUC-H
      font-weight bold
  .share-info
    position relative
    width 540upx
    height 270upx
    margin-bottom 160upx
    display flex
    flex-direction column
    justify-content center
    align-items center
    .text
      width 340upx
      z-index 1
      font-weight bold
      color var(--text-primary)
      font-size 21upx
      font-family Gotham-BoldItalic
      .field-text
        font-size 20upx
        margin-right 18upx
  .field-text2
    position absolute
    font-size 51upx
    top 173upx
  .remind
    margin-top 210upx
    text-align center
    font-size 23upx
    font-family AlibabaPuHuiTiR-GBpc-EUC-H
    color #666666
</style>
