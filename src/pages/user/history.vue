<template>
  <view class="user-history page">
    <with-bg />
    <view style="padding: 140upx 62upx 233upx 58upx;" class="flex justify-between align-center">
      <button-title1 text="潮玩记录" />
      <icon-details @click="navigateTo({ url: '/pages/index/index' })" />
    </view>
    <view class="rankingClass">
      <view class="icon-ranking" @click="$emit('click')">
        <view class="info">
          <img class="rankingr" src="/static/image/icon-ranking.png" mode="widthFix" />
          <view class="text">35</view>
        </view>
        <view class="info2">
          <view class="text2">CONFIRME</view>
          <img class="button-tab-active" src="/static/image/button-tab-active.png" mode="widthFix" />
          <img class="progres" src="/static/image/icon-progres.png" mode="widthFix" />
        </view>
      </view>
    </view>
    <view class="content">
      <view class="user-info">
        <button-avatar5 :user="user" />
      </view>

      <border1>
        <view style="padding: 220upx 24upx 60upx;">
          <block1 v-if="latestScore">
            <button-rank3 v-if="latestScore" :item="latestScore" :project="latestCourse.project" @click="goCourseDetail(latestCourse.id)" />
            <view class="list" v-if="latestCourse.scores">
              <view class="list-item" v-for="(item, index) in latestCourse.scores" :key="item">
                <button-avatar6 :item="item" :rank="index + 1" @click="goCourseDetail(latestCourse.id)" />
              </view>
            </view>
          </block1>
        </view>
      </border1>
    </view>

    <view class="content1">
      <border1 title="个人奖杯记录">
        <view style="padding: 51upx 38upx 23upx;">
          <block1>
            <view>
              <view class="trophyRecord">
                <view>
                  <img class="img" src="/static/image/trophyRecord.png" />
                </view>
                <view class="info">
                  <view class="text2">竞速无人机</view>
                  <view class="text3">对战无人机</view>
                </view>
                <view class="info2">
                  <view class="text4">-</view>
                  <view class="text5">-</view>
                  <view class="text6">-</view>
                  <view class="text7">-</view>
                  <view class="text8">-</view>
                  <view class="text9">-</view>
                </view>
              </view>
            </view>
          </block1>
        </view>
      </border1>
    </view>

    <view class="content2" v-if="scores.length">
      <border1 title="个人最佳成绩">
        <view style="padding: 50upx 0upx 100upx;">
          <view class="small-button" v-for="item in scores" :key="item._id">
            <button-rank3 :item="item" @click="goCourseDetail(item.course)" />
          </view>
        </view>
      </border1>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import * as api from "../../../common/vmeitime-http";
import { Course } from "../../type";

@Component
export default class Template extends Vue {
  onLoad() {
    authStore.devLogin().then(data => {
      this.loadCourse();
      this.loadScores();
    });
  }
  get user() {
    return authStore.user;
  }

  get latestScore() {
    const score = this.latestCourse?.scores?.find(i => i.player.id == this.user.id);
    return score;
  }

  latestCourse: Partial<Course> = {};
  async loadCourse() {
    const res = await api.getList({ type: "course", data: { player: this.user.id, limit: 1 } });
    if (res.data?.length) {
      this.latestCourse = res.data[0];
    }
  }

  scores: any = [];
  async loadScores() {
    const res = await api.getList({ type: "score", data: { limit: 5, player: this.user.id } });
    if (res.data?.length) {
      this.scores = res.data;
    }
  }

  goHistoryDetail() {
    uni.navigateTo({ url: "/pages/user/historyDetail" });
  }
  goCourseDetail(id) {
    uni.navigateTo({ url: `/pages/course/detail?id=${id}` });
  }
}
</script>

<style lang="stylus" scoped>
.user-history
  position relative
  text-align center
  padding 0 0 200rpx
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
      top -160upx
      justify-content center
      width 100%
    .list
      text-align center
      padding 0 0 50upx
      .list-item
        position relative
        transform scale(0.85)
  .content1
    margin 52upx auto
    width 629upx
    position relative
  .content2
    margin 52upx auto
    width 629upx
    position relative
    .small-button
      transform scale(0.95)
.rankingClass
  position absolute
  left 57upx
  top 278upx
.trophyRecord
  // display flex
  align-items center
  justify-content center
  .img
    width 450upx
    height 250upx
    margin-top 26rpx
  .info
    left 190upx
    top 45upx
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
  .info2
    left 190upx
    top 45upx
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
  .text2
    position absolute
    color #0090D9
    top 17upx
    left 46upx
  .text3
    position absolute
    color #0090D9
    top 170upx
    left 46upx
  .text4
    position absolute
    top 75upx
    left 144upx
    color #ECF5FF
  .text5
    position absolute
    top 75upx
    left 294upx
    color #ECF5FF
  .text6
    position absolute
    top 75upx
    left 451upx
    color #ECF5FF
  .text7
    position absolute
    top 235upx
    left 144upx
    color #ECF5FF
  .text8
    position absolute
    top 235upx
    left 294upx
    color #ECF5FF
  .text9
    position absolute
    top 235upx
    left 451upx
    color #ECF5FF
.rankingClass
  .icon-ranking
    display flex
    align-items center
    justify-content center
  .button-tab-active
    position absolute
    width 282upx
    height 68upx
    top 263upx
    left 249upx
  .rankingr
    position absolute
    width 133upx
    height 150upx
    top 225upx
    left 105upx
  .info
    left 190upx
    top 45upx
    color #ECF5FF
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
  .info2
    left 190upx
    top 45upx
    color #0090D9
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
  .text
    position absolute
    top 255upx
    left 144upx
    font-size 18px
  .text2
    position absolute
    top 216upx
    left 288upx
    font-size 15px
  .progres
    position absolute
    width 55upx
    height 55upx
    top 285upx
    left 266upx
</style>
