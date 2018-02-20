<template>
  <div class="hanabi-topic">
    curr topic id: {{id}}
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  data () {
    return { }
  },
  props: {
    id: {
      type: String,
      default: '0'
    }
  },
  components: { }
}
</script>

<style lang="stylus" scoped>
.hanabi-topic
  width 100%
  height 100%
</style>
