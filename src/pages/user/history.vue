<template>
  <view class="user-history page">
    <with-bg />
    <view style="padding:140upx 62upx 233upx 58upx" class="flex justify-between align-center">
      <button-title1 text="潮玩记录" />
      <icon-details />
    </view>
		<view class="rankingClass">
			<icon-ranking :grade="35"/>
		</view>
    <view class="content">
      <view class="user-info">
        <button-avatar5 :user="user" />
      </view>
					
      <border1>
        <view style="padding: 220upx 38upx 60upx">
          <block1 >
            <view class="list">
              <view class="list-item" v-for="(item, index) in curList" :key="item">
                <button-avatar6 :user="user" :rank="index + 1" />
              </view>
            </view>
          </block1>
        </view>
      </border1>
    </view>

    <view class="content1">
      <border1 title="个人奖杯记录">
        <view style="padding: 51upx 38upx 23upx ">
          <block1>
						<view>
							<trophyRecord  style="margin-top: 10upx;" />
						</view>
					</block1>
        </view>
      </border1>
    </view>

    <view class="content2">
      <border1 title="个人最佳成绩">
        <view style="padding: 20upx 0upx 13upx ">
					<view style="color: #FFFFFF;margin-top: 30upx;margin-left: -53upx;">
						<button-rank3 />
					</view>
        </view>
      </border1>
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
</style>
