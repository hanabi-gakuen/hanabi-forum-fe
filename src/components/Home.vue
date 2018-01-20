<template>
  <div class="hanabi-home">
    <home-header></home-header>
  </div>
</template>

<script>
import homeHeader from '@/components/home/Header'

export default {
  name: 'Home',
  data () {
    return {
      msg: '花火学园'
    }
  },
  props: { },
  components: { homeHeader }
}
</script>

<style lang="stylus" scoped>
</style>
