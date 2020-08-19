<script>
import Vue from "vue";
export default {
  mpType: "app",
  onLaunch() {
    console.log("App Launch");
    // Promise.all(
    //   [
    //     { family: "NightMachine", url: 'url("https://cdn.uice.lu/ef/Night%20Machine.otf")' },
    //     { family: "Alibaba PuHuiTi", url: 'url("https://cdn.uice.lu/ef/Alibaba-PuHuiTi-Regular.otf")' },
    //     { family: "Gotham-Bold", url: 'url("https://cdn.uice.lu/ef/Gotham-BoldItalic.otf")' }
    //   ].map(i =>
    //     uni.loadFontFace({
    //       family: i.family,
    //       source: i.url,
    //       success(res) {
    //         console.log(`load font ${i.family} success`);
    //       },
    //       fail(err) {
    //         console.log(`load font ${i.family} failed`);
    //       }
    //     })
    //   )
    // );
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  }
};
</script>

<style lang="scss">
@import "uview-ui/theme.scss";
@import "uview-ui/index.scss";
/*每个页面公共css */
</style>

<style lang="stylus">
body
  --primary #3d8ad7
  --secondary #d3f1fe
  --text-primary #0090D9
// @font-face
// font-family 'Alibaba PuHuiTi'
// src url('https://cdn.uice.lu/ef/Alibaba-PuHuiTi-Regular.otf')
// font-display swap
// @font-face
// font-family 'Alibaba PuHuiTi'
// src url('https://cdn.uice.lu/ef/Alibaba-PuHuiTi-Bold.otf')
// font-display swap
// font-weight bold
@font-face
  font-family 'NightMachine'
  src url('https://cdn.uice.lu/ef/Night%20Machine.otf')
  font-display swap
@font-face
  font-family 'Gotham-Bold'
  src url('https://cdn.uice.lu/ef/Gotham-BoldItalic.otf')
  font-display swap
.puhui
  font-family Alibaba PuHuiTi
.gotham-bold
  font-family Gotham-Bold
.flex
  display flex
.justify-center
  justify-content center
.justify-between
  justify-content space-between
.items-center
  align-items center
.page
  min-width 100vw
  min-height 100vh
.column-center
  display flex
  flex-direction column
  align-items center
.relative
  position relative
.absolute
  position absolute
.color-blue
  color #0090D9
.with-border
  border 1px solid #0090D9
  padding 4upx 36upx 4upx 12upx
  position relative
  &:after
    display block
    content ''
    border-width 6px 4px 4px 4px
    border-style solid
    border-color var(--primary) transparent transparent transparent
    position absolute
    right 10upx
    bottom 4upx
.u-grid-item-box
  padding 10upx 0 !important
.button-empty
  border none
  color inherit
  padding 0
  line-height unset
  background-color transparent
  &:after
    display none
.u-size-default
  height 100upx
  line-height 100upx
.button-course
  position relative
  display inline-block
  align-items center
  justify-content center
  text-align left
  .img
    width 607upx
    height 209upx
  .info
    position absolute
    left 20upx
    top 32upx
    font-size 28upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color var(--text-primary)
    z-index 1
  .status
    position absolute
    font-size 20upx
    color white
    right 19upx
    top 5upx
</style>
