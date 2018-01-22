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
      <div class="texture" v-html="dialogHTML"></div>
    </div>
  </div>
</template>

<script>
window.testText = '唉？总觉得不是很面熟呢^1.^1.^1.^b^5如果是第一次来这里，可以在这边先登记一下哦！'
const delayPreFrame = 50

export default {
  name: 'DialogBox',
  data () {
    return {
      dialogHTML: '测试指令：dialog.renderText(testText)',
      text: '',
      index: 0,
      timer: null,
      frameTimer: 0
    }
  },
  mounted () {
    window.dialog = this
  },
  methods: {
    renderText (text) {
      this.dialogHTML = ''
      this.text = text
      this.index = 0
      requestAnimationFrame(this.render)
    },
    render (t) {
      if (!this.timer) {
        this.timer = t
      }
      let delta = t - this.timer
      this.timer = t
      this.frameTimer += delta
      if (this.frameTimer >= delayPreFrame) {
        this.frameTimer -= delayPreFrame
        let char = this.getChar()
        if (char !== 'END') {
          this.dialogHTML += char
        } else {
          this.timer = null
          return
        }
      }
      requestAnimationFrame(this.render)
    },
    getChar () {
      if (this.index < this.text.length) {
        let char = this.text[this.index++]
        if (char === '^') {
          let code = this.text[this.index++]
          switch (code) {
            case 'b': return '<br>'
            default :
              let maybeNum = parseInt(code)
              if (maybeNum) {
                this.frameTimer -= maybeNum * delayPreFrame * 2
                return ''
              } else {
                return this.getChar()
              }
          }
        } else {
          return char
        }
      } else {
        return 'END'
      }
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
