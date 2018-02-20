<template>
  <div class="hanabi-main">
    <topic
       v-if="visableSet.topic"
      :id="dataSet.topicId"></topic>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import topic from '@/components/common/Topic'

export default {
  name: 'MainContent',
  data () {
    return { }
  },
  props: { },
  computed: {
    ...mapState({
      visableSet: state => state.contentSwitch.visable,
      dataSet: state => state.contentSwitch.data
    })
  },
  components: { topic }
}
</script>

<style lang="stylus" scoped>
.hanabi-main
  width 100%
  height 100%
  background-color: #fff
  border-radius: 8px
  border: solid 2px #BB0098
</style>
