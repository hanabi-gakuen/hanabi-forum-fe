<template>
  <div class="hanabi-home">
    <home-header></home-header>
    <div class="hanabi-home-main">
      <main-content class="hanabi-home-main-content"></main-content>
    </div>
  </div>
</template>

<script>
import homeHeader from '@/components/home/Header'
import mainContent from '@/components/common/MainContent'

export default {
  name: 'Home',
  data () {
    return {
      msg: '花火学园'
    }
  },
  props: { },
  components: { homeHeader, mainContent }
}
</script>

<style lang="stylus" scoped>
.hanabi-home-main
  header-height = 127px
  dialog-height = 180px
  height "calc(100vh - %s - %s)" % (header-height dialog-height)
  margin-top 50px
  width 90%
  display inline-block
  & .hanabi-home-main-content
    float left
    width 70%
</style>
