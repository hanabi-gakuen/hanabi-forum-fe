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
  height: 60px
  width: 900px
  background-color: #fff
  border-bottom-right-radius: 8px
  border-bottom-left-radius: 8px
  border: solid 2px #BB0098
  border-top: none
  color: #fff
  & .hanabi-navigator-avatar
    float: left
    margin-left: 30px
    margin-top: 24px
</style>
