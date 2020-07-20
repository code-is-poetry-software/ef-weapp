<template>
  <view class="icon-ranking" @click="$emit('click')">
    <view class="info">
      <img class="rankingr" src="/static/image/icon-ranking.png" />
      <view class="text">{{ grade }}</view>
    </view>
    <view class="info2">
      <view class="text2">CONFIRME</view>
      <img class="button-tab-active" src="/static/image/button-tab-active.png" />
      <img class="progres" src="/static/image/icon-progres.png" mode="widthFix" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) grade: string;
}
</script>

<style lang="stylus" scoped>
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
