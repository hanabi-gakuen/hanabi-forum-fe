<template>
  <div class="layout-holder">
    <div class="login">
      login box
    </div>
    <div class="layout-dialog">
      <dialog-box></dialog-box>
    </div>
  </div>
</template>

<script>
import DialogBox from '@/components/common/DialogBox'

export default {
  name: 'Login',
  data () {
    return { }
  },
  components: {
    DialogBox
  }
}
</script>

<style lang="stylus" scoped>
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
