<template>
  <view class="trophyRecord" @click="$emit('click')">
		<view class="trophyRecord2">
			<img  src="/static/image/trophyRecord2.png" />
		</view>
		<view class="info">
			<view class="text">个人最佳成绩</view>
		</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {}
</script>
<style lang="stylus" scoped>
.trophyRecord
  display flex
  align-items center
  justify-content center
	.trophyRecord2
		position absolute
		top 2100upx
		left 85upx
	.info
		left 190upx
		top 45upx
		z-index 1
		font-style italic
		font-family Alibaba PuHuiTi
		font-weight bold
	.text
		position absolute
		color #ECF5FF
		top 2100upx
		left 167upx
</style>
