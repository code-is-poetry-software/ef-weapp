<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  mpType: "app",
  onLaunch() {
    console.log("App Launch");
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  }
});
</script>

<style lang="scss">
@import "uview-ui/theme.scss";
@import "uview-ui/index.scss";
/*每个页面公共css */
</style>

<style lang="stylus">
body
  --primary #3d8ad7
  --text-primary #0090D9
.flex
  display flex
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
</style>
