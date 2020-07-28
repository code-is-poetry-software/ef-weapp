<template>
  <view class="historyAchievement page">
    <with-bg />
    <view style="padding: 140upx 62upx 233upx 58upx;" class="flex justify-between align-center">
      <button-title1 text="潮玩记录" />
      <icon-details />
    </view>
    <view class="content">
      <view class="user-info" v-if="userScore">
        <button-rank3 :item="userScore" type="2" :project="item.project" />
      </view>
      <view style="padding: 10upx 38upx 60upx;">
        <view class="block">
          <slot>
            <view style="height: 100upx;">
              <img class="img" src="/static/image/button-rank4.png" mode="widthFix" />
              <span class="text">本场成绩</span>
            </view>
            <view class="list">
              <view class="list-item" v-for="(item, index) in item.scores" :key="item">
                <button-avatar7 :user="user" :rank="index + 1" :item="item" />
              </view>
            </view>
          </slot>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import * as api from "../../../common/vmeitime-http";

@Component
export default class Template extends Vue {
  item: any = {};
  onLoad(data) {
    authStore.devLogin().then(() => {
      if (data.id) {
        this.loadCourse(data.id);
      }
    });
  }
  get user() {
    return authStore.user;
  }

  get userScore() {
    return this.item?.scores?.find(i => i.player.id == this.user.id);
  }

  loading = false;
  async loadCourse(id) {
    if (this.loading) return;
    this.loading = true;
    const res = await api.getItem({ type: "course", id });
    if (res.data) {
      this.item = res.data;
    }
    this.loading = false;
  }
}
</script>

<style lang="stylus" scoped>
.historyAchievement
  position relative
  text-align center
  padding 0 0 200rpx
  .content
    margin 0 auto
    width 682upx
    position relative
    .user-info
      display flex
      position absolute
      left 0
      text-align center
      z-index 10
      top -160upx
      justify-content center
      width 100%
    .list
      text-align center
      .list-item
        position relative
        transform scale(0.8)
  .content1
    margin 52upx auto
    width 629upx
    position relative
  .content2
    margin 52upx auto
    width 629upx
    position relative
.rankingClass
  position absolute
  left 57upx
  top 278upx
.block
  position relative
  vertical-align top
  min-height 400upx
  background var(--secondary)
  clip-path polygon(20px 0, 100% 0, 100% 20%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 80%, 0 20px)
  .img
    position absolute
    left 36upx
    top 40upx
    width 534upx
		height 23upx
  .text
    position absolute
    left 239upx
    font-size 32upx
    color #0090D9
    font-family Alibaba PuHuiTi
    top 27upx
</style>
