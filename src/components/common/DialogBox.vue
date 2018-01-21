<template>
  <div id="hanabi-dialog-box">
    <svg class="hanabi-dialog-border" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#990FCC;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#ED61B0;stop-opacity:1"/>
        </linearGradient>
      </defs>
      <rect class="rect" x="50" y="4" rx="6" ry="6" width="900" height="133"/>
    </svg>
    <div class="hanabi-dialog-content">
      <div class="texture">
        唉？总觉得不是很面熟呢……
        <br>
        如果是第一次来这里，可以在这边先<span>登记</span>一下哦！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogBox',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
#hanabi-dialog-box
  position relative
  width 100%
  height 100%
.hanabi-dialog-border
  position absolute
  top 0
  left 0
  & .rect
    fill transparent
    stroke url(#main-gradient)
    stroke-width 6
    transform rotateX(10deg) perspective(300px)
.hanabi-dialog-content
  position relative
  top 2px
  width 900px
  height 130px
  margin auto
  padding 4px 6px
  border-radius 6px
  background-color #fffB
  & .texture
    background-image url('../../assets/images/common/dialogbox-bg.png')
    width 100%
    height 100%
    color #4A4A4A
    padding 16px
    font-size 20px
    text-align left
    & span
      color #BB0098
      cursor pointer
</style>
