<template>
	<view class="content">
			<!-- 潮玩记录列表 -->
		<view class="user-info">
			<button-details />
			<icon-ranking />
		</view>
		<!-- 个人奖杯记录 -->
		<view >
			<trophyRecord/>
		</view>
		<view >
			<trophyRecord2/>
		</view>
	</view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component
export default class Template extends Vue {
	get user() {
	  return "潮玩记录";
	}
}
</script>

<style lang="stylus" scoped>

  .content
    margin 200upx auto 0
    width 80%
    .user-info
      display flex
      position relative
</style>
