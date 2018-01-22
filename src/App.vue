<template>
  <div id="app">
    <div class="layout-holder">
      <router-view/>
      <div class="layout-dialog">
        <dialog-box></dialog-box>
      </div>
    </div>
  </div>
</template>

<script>
import DialogBox from '@/components/common/DialogBox'

export default {
  name: 'App',
  components: {
    DialogBox
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, Yuanti SC, SimYou, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  /* 临时添加背景图 */
  background-image url('./assets/images/common/65371180_p0.jpg')
  background-size cover
  background-position center
.layout-holder
  position relative
  width 1000px
  height 100vh
  margin auto
.layout-dialog
  width 100%
  height 140px
  position absolute
  bottom 20px
</style>
