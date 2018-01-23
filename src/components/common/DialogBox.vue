<template>
  <div id="hanabi-dialog-box">
    <svg class="hanabi-dialog-border" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#990FCC;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#ED61B0;stop-opacity:1"/>
        </linearGradient>
      </defs>
      <rect class="rect" x="5%" y="4" rx="6" ry="6" width="90%" height="133"/>
    </svg>
    <div class="hanabi-dialog-content" @click="nextDialogue">
      <div class="texture" v-html="dialogHTML"></div>
      <div class="hanabi-dialog-icon" :class="{'hanabi-dialog-waiting': isUpdating}">
        <span :class="{show: waiting == 0}"></span>
        <span :class="{show: waiting == 1}"></span>
        <span :class="{show: waiting == 2}"></span>
      </div>
    </div>
  </div>
</template>

<script>
window.testDialogue = '唉？总觉得不是很面熟呢...^b^3如果是第一次来这里，可以在这边先登记一下哦！'
const delayPreFrame = 20
const defaultDialogues = [
  '梦里不觉秋已深，余情岂是为他人。',
  '为什么会变成这样呢...^3第一次有了喜欢的人。^2有了能做一辈子朋友的人。^2两件快乐事情重合在一起。^2而这两份快乐，又给我带来更多的快乐。^4得到的，本该是像梦境一般幸福的时间...^4但是，为什么，会变成这样呢...',
  '是我，^2是我先，^2明明都是我先来的...^b^3接吻也好，^3拥抱也好，^3还是喜欢上那家伙也好。',
  '为什么你会这么熟练啊！^2你和雪菜亲过多少次了啊！？^b^3你到底要把我甩开多远你才甘心啊！？',
  '为了我，你就永远当个废物吧。^b^3为了能让我好好努力，就一生，都成为我的负担吧。'
]

export default {
  name: 'DialogBox',
  data () {
    return {
      dialogHTML: '测试指令：dialog.renderDialogue(testDialogue)<br>Enter键切换对话内容',
      dialogue: '',
      index: 0,
      timer: 0,
      frameTimer: 0,
      isUpdating: false,
      waiting: 1,
      stiv: null
    }
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        this.nextDialogue()
      }
    })
    window.dialog = this
  },
  methods: {
    nextDialogue () {
      if (this.isUpdating) {
        while (!this.renderChar()) {}
        clearInterval(this.stiv)
        this.waiting = 1
        this.isUpdating = false
      } else {
        let i
        do {
          i = parseInt(Math.random() * defaultDialogues.length)
        } while (this.dialogue === defaultDialogues[i])
        this.renderDialogue(defaultDialogues[i])
      }
    },
    renderDialogue (dialogue) {
      this.dialogHTML = ''
      this.dialogue = dialogue
      this.index = 0
      this.frameTimer = 0
      this.isUpdating = true
      this.stiv = setInterval(() => {
        if (++this.waiting > 2) {
          this.waiting = 0
        }
      }, 250)
      requestAnimationFrame(this.render)
    },
    render (t) {
      if (!this.timer) {
        this.timer = t
      }
      let delta = t - this.timer
      this.timer = t
      this.frameTimer += delta
      while (this.frameTimer >= delayPreFrame) {
        this.frameTimer -= delayPreFrame
        if (this.renderChar()) {
          clearInterval(this.stiv)
          this.waiting = 1
          return
        }
      }
      requestAnimationFrame(this.render)
    },
    renderChar () {
      let char = this.getChar()
      if (char !== 'END') {
        this.dialogHTML += char
      } else {
        this.timer = 0
        this.isUpdating = false
        return true
      }
    },
    getChar () {
      if (this.index < this.dialogue.length) {
        let char = this.dialogue[this.index++]
        if (char === '^') {
          let code = this.dialogue[this.index++]
          switch (code) {
            case 'b': return '<br>'
            default :
              let maybeNum = parseInt(code)
              if (maybeNum) {
                this.frameTimer -= maybeNum * 400
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
  width 90%
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
.hanabi-dialog-icon
  position absolute
  right 6px
  bottom 4px
  width 24px
  height 16px
  & span
    width 6px
    height 6px
    border-radius 50%
    background-color #ED61B0
    display block
    position absolute
    top 4px
    left 8px
    transition transform .3s, opacity .6s
    transform scale(1.5)
    opacity 1
.hanabi-dialog-waiting
  & span
    transform scale(1)
    opacity 0
  & span:first-child
    transform translateX(-9px)
  & span:last-child
    transform translateX(9px)
.show
  opacity 1 !important
</style>
