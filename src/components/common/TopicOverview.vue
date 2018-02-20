<template>
  <div class="hanabi-topic-overview">
    <transition name="hanabi-fade">
      <div
        class="hanabi-topic-overview-wrapper"
        v-show="visable"
        @click="closeTopicOverview"
        @contextmenu.prevent="closeTopicOverview">
        <div class="hanabi-topic-overview-body">
          <ul v-for="topic in topics" :key="topic.order || topics.indexOf(topic)">
            <p class="hanabi-topic-title">{{ topic.name }}</p>
            <li
              v-for="section in topic.sections"
              :key="section.order || topic.sections.indexOf(section)"
              @click="openSection($event, section.id)">
              <p class="hanabi-section-title">{{ section.name }}</p>
              <img :src="section.image" :alt="section.name">
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import modal from '@/components/common/Modal'

export default {
  name: 'TopicOverview',
  components: { modal },
  data () {
    return {
      topics: [
        {
          order: 1,
          name: '资源区',
          sections: [
            {
              id: '1',
              name: '熟肉资源区',
              image: 'https://user-images.githubusercontent.com/9587680/36114605-67f538be-106b-11e8-9520-09a37f08b1a4.jpg'
            },
            {
              id: '2',
              name: '生肉资源区',
              image: 'https://user-images.githubusercontent.com/9587680/36114605-67f538be-106b-11e8-9520-09a37f08b1a4.jpg'
            },
            {
              id: '3',
              name: '动画资源区',
              image: 'https://user-images.githubusercontent.com/9587680/36114605-67f538be-106b-11e8-9520-09a37f08b1a4.jpg'
            }
          ]
        },
        {
          order: 2,
          name: '资源区',
          sections: [
            {
              id: '4',
              name: '熟肉资源区',
              image: 'https://user-images.githubusercontent.com/9587680/36114605-67f538be-106b-11e8-9520-09a37f08b1a4.jpg'
            },
            {
              id: '5',
              name: '生肉资源区',
              image: 'https://user-images.githubusercontent.com/9587680/36114605-67f538be-106b-11e8-9520-09a37f08b1a4.jpg'
            },
            {
              id: '6',
              name: '动画资源区',
              image: 'https://user-images.githubusercontent.com/9587680/36114605-67f538be-106b-11e8-9520-09a37f08b1a4.jpg'
            }
          ]
        }
      ]
    }
  },
  props: { },
  computed: {
    ...mapState({
      visable: state => state.topicOverview.visable
    })
  },
  methods: {
    openSection (event, id) {
      event.cancelBubble = true
      this.closeTopicOverview()
      this.switchTopic(id)
    },
    ...mapActions(['closeTopicOverview', 'switchTopic'])
  },
  watch: {
    visable () {
      console.log(this.visable)
      if (this.visable) {
        // show dialog
      } else {
        // hidden dialog
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.hanabi-topic-overview-wrapper
  position fixed
  left 0
  top 0
  background rgba(255, 214, 239, 0.6)
  width 100%
  height 100%
  z-index 2000
  text-align center
  .hanabi-topic-overview-body
    width 1000px
    display inline-block
    ul
      width 1000px
      clear left
      list-style-type none
      padding-left 0
      .hanabi-topic-title
        font-size 20px
        color #9e0692
        text-align left
        width 1000px
      li
        width 300px
        margin-left 30px
        float left
        text-align left
        cursor pointer
        .hanabi-section-title
          color #7e828c
        img
          width 300px
          height 180px
.hanabi-fade-enter-active, .hanabi-fade-leave-active
  transition: opacity .5s;
.hanabi-fade-enter, .hanabi-fade-leave-to
  opacity: 0;
</style>
