<template>
  <view class="rank-detail">
    <button-Arrow3 />
		<view>潮玩项目</view>
    <view class="tabs">
      <view :class="['tab', item.value == tab.curTab ? 'active' : '']" v-for="item in tab.tabs" :key="item.value" @click="selectTab(item)">{{ item.label }}</view>
    </view>
    <view class="list">
      <view class="list-item" v-for="item in curList" :key="item">
        <button-rank2 :item="item" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  tab = {
    curTab: "whole",
      tabs: [
				{ label: "全部", value: "whole" },
				{ label: "已预约", value: "reserved" },
				{ label: "已完成", value: "completed" },
				{ label: "已取消", value: "cancelled" }
			]
  };
  list = {
		// 全部
    whole: [
      {
        id: 0,
        name: "竞速无人机",
        date: "2020年6月8日",
        score: "5:0",
				sessions: "6人场"
      },
      {
        id: 0,
        name: "竞速无人机",
        date: "2020年6月8日",
        score: "5:0",
				sessions: "6人场"
      },
      {
        id: 0,
        name: "竞速无人机",
        date: "2020年6月8日",
        score: "5:0",
				sessions: "6人场"
      }
    ],
    // 已预约
		reserved: [
      {
        id: 0,
        name: "竞速无人机",
        date: "2020年6月8日",
        score: "5:0",
				sessions: "6人场"
      },
      {
        id: 0,
        name: "竞速无人机",
        date: "2020年6月8日",
        score: "5:0",
				sessions: "6人场"
      },
      {
        id: 0,
        name: "竞速无人机",
        date: "2020年6月8日",
        score: "5:0",
				sessions: "6人场"
      }
    ],
		// 已完成
    completed: [
      {
        id: 0,
        name: "竞速无人机",
        date: "2020年6月8日",
        score: "5:0",
				sessions: "6人场"
      },
      {
        id: 0,
        name: "竞速无人机",
        date: "2020年6月8日",
        score: "5:0",
				sessions: "6人场"
      },
      {
        id: 0,
        name: "竞速无人机",
        date: "2020年6月8日",
        score: "5:0",
				sessions: "6人场"
      }
    ],
		// 已取消
		cancelled: [
		  {
		    id: 0,
		    name: "竞速无人机",
		    date: "2020年6月8日",
		    score: "5:0",
				sessions: "6人场"
		  },
		  {
		    id: 0,
		    name: "竞速无人机",
		    date: "2020年6月8日",
		    score: "5:0",
				sessions: "6人场"
		  },
		  {
		    id: 0,
		    name: "竞速无人机",
		    date: "2020年6月8日",
		    score: "5:0",
				sessions: "6人场"
		  }
		]
  };
	type = 1; 
  get curList() {
    return this.list[this.tab.curTab];
  }

  selectTab(item) {
    this.tab.curTab = item.value;
  }
}
</script>

<style lang="stylus" scoped>
.rank-detail
  .tabs
		position absolute
    display flex
    justify-content center
    .tab
      display flex
      align-items center
      padding 40upx
      width 200upx
      height 56upx
      background grey
      margin 0 20upx
      &.active
        background #4d8ad6
  .list
    text-align center
</style>
