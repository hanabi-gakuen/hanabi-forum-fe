<template>
  <div class="hanabi-userstatus">
    <p>用户名: <a class="hanabi-userstatus-username" :href="userinfo.userpage" target="_blank">{{ userinfo.name }}</a>
    <p>注册时间: {{ userinfo.registerat }}</p>
    <p>上次登录: {{ userinfo.lastlogin }}</p>
  </div>
</template>

<script>

export default {
  name: 'UserStatus',
  data () {
    return {
      userinfo: {
        name: 'you06',
        userpage: 'https://blog.tongmu.me',
        registerat: '2017-01-01',
        lastlogin: '2018-01-01'
      }
    }
  },
  props: {
    uid: {
      type: String,
      default: '0'
    }
  },
  components: { }
}
</script>

<style lang="stylus" scoped>
.hanabi-userstatus
  background-color: white
  color: #444
  & .hanabi-userstatus-username
    text-decoration: none
    color: #814dff
</style>
