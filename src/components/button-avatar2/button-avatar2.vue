<template>
  <view :class="['button-avatar2', type]" @click="$emit('click')">
    <img class="button-avatar" src="/static/image/button-avatar2.png" mode="widthFix" />

    <view class="avatar-box">
      <img class="avatar-bg" :src="user.avatarUrl" mode="widthFix" />
      <img class="avatar" :src="user.avatarUrl" mode="widthFix" />
    </view>
    <view class="text">ID: {{ user.name }}</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { User } from "../../type";

@Component
export default class Template extends Vue {
  @Prop({ default: { name: "朱一旦的赛车手" } }) user: User;
  @Prop({ default: "" }) type: string;
}
</script>

<style lang="stylus" scoped>
.button-avatar2
  position relative
  display inline-block
  text-align center
  .button-avatar
    width 450upx
  .avatar-box
    position absolute
    width 332upx
    height 216upx
    top 1upx
    left 48upx
    background var(--primary)
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
  .avatar
    width 332upx
  .text
    position absolute
    left 60upx
    top 245upx
    color white
    z-index 1
    font-style italic
    font-weight bold
    font-size 30upx
.small
  .button-avatar
    width 200upx
  .avatar-box
    position absolute
    width 155upx
    height 98upx
    top 0
    left 20upx
    background var(--primary)
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
  .avatar
    width 155upx
	.avatar-bg
		position  absolute
    filter blur(10rpx)
  .text
    position absolute
    left 25upx
    top 110upx
    color white
    z-index 1
    font-style italic
    font-weight bold
    font-size 15upx
</style>
