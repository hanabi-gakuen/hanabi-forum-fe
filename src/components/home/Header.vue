<template>
  <div class="hanabi-home-header">
    <navigator class="hanabi-home-block"></navigator>
  </div>
</template>

<script>
import navigator from '@/components/common/Navigator'

export default {
  name: 'HomeHeader',
  data () {
    return { }
  },
  props: { },
  components: { navigator }
}
</script>

<style lang="stylus" scoped>
.hanabi-home-header
  text-align: center
  & .hanabi-home-block
    display: inline-block
</style>
