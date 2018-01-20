<template>
  <div class="hanabi-navigator">
    <avatar-small class="hanabi-navigator-avatar" name="you06" src="https://avatars1.githubusercontent.com/u/35604379?s=200&v=4"></avatar-small>
  </div>
</template>

<script>
import avatarSmall from '@/components/common/AvatarSmall'

export default {
  name: 'Navigator',
  data () {
    return { }
  },
  props: { },
  components: { avatarSmall }
}
</script>

<style lang="stylus" scoped>
.hanabi-navigator
  height: 80px
  width: 1000px
  background-color: #a521bb
  border-bottom-right-radius: 8px
  border-bottom-left-radius: 8px
  color: #fff
  & .hanabi-navigator-avatar
    float: left
    margin-left: 70px
    margin-top: 30px
</style>
