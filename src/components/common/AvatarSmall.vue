<template>
  <div class="hanabi-avatar-small">
    <el-popover
      ref="userStatus"
      placement="bottom-start"
      width="200"
      trigger="hover">
      <user-status></user-status>
    </el-popover>
    <el-button class="hanabi-avatar-small-btn" v-popover:userStatus>
      <span class="el-dropdown-link">
        <img class="hanabi-avatar-small-img" :src="src">
      </span>
    </el-button>
  </div>
</template>

<script>
import userStatus from '@/components/common/UserStatus'

export default {
  name: 'AvatarSmall',
  data () {
    return { }
  },
  props: {
    name: {
      type: String,
      default: 'Your name'
    },
    src: {
      type: String,
      default: require('@/assets/images/avatar.png')
    }
  },
  components: { userStatus }
}
</script>

<style lang="stylus" scoped>
.hanabi-avatar-small
  width: 70px
  height: 70px
  border-radius: 5px
  border: 2px solid #BB0098
  overflow: hidden
  & .hanabi-avatar-small-btn
    border: 0
    padding: 0
    & .hanabi-avatar-small-img
      width: 70px
</style>
