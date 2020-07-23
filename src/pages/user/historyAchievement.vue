<template>
  <view class="historyAchievement page">
    <with-bg />
    <view style="padding:140upx 62upx 233upx 58upx" class="flex justify-between align-center">
      <button-title1 text="潮玩记录" />
      <icon-details />
    </view>
    <view class="content">
      <view class="user-info">
				<button-rank3 :item="item" />
      </view>
        <view style="padding: 10upx 38upx 60upx">
					<view  class="block">
					  <slot>
							<view style="height: 100upx;">
									<img class="img" src="/static/image/button-rank4.png" mode="widthFix" />
									<span class="text">本场成绩</span>
							</view>
							<view class="list">
								<view class="list-item" v-for="(item, index) in curList" :key="item">
									<button-avatar7 :user="user" :rank="index + 1" />
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

@Component
export default class Template extends Vue {
  curList = [
    {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0"
    },
    {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0"
    },
    {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0"
    },
    {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0"
    },
    {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0"
    },
    {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0"
    }
  ];
  onLoad() {
    authStore.devLogin();
  }
  get user() {
    return authStore.user;
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
		.text
		  position absolute
		  left 239upx
		  font-size 32upx
		  color #0090D9
		  font-family AlibabaPuHuiTiB-GBpc-EUC-H
		  top 27upx

</style>
