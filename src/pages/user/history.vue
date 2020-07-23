<template>
  <view class="user-history page">
    <with-bg />
    <view style="padding: 140upx 62upx 233upx 58upx;" class="flex justify-between align-center">
      <button-title1 text="潮玩记录" />
      <icon-details />
    </view>
    <view class="rankingClass">
      <icon-ranking :grade="35" />
    </view>
    <view class="content">
      <view class="user-info">
        <button-avatar5 :user="user" />
      </view>

      <border1>
        <view style="padding: 220upx 24upx 60upx;">
          <block1>
            <button-rank3 :item="latestCourse" @click="goCourseDetail(latestCourse.id)" />
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
              <trophyRecord style="margin-top: 10upx;" />
            </view>
          </block1>
        </view>
      </border1>
    </view>

    <view class="content2">
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

  latestCourse: Partial<Course> = {};
  async loadCourse() {
    const res = await api.getList({ type: "course", data: { limit: 1 } });
    if (res.data?.length) {
      this.latestCourse = res.data[0];
    }
  }

  scores: any = [];
  async loadScores() {
    const res = await api.getList({ type: "score", data: { limit: 5 } });
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
</style>
