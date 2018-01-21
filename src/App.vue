<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, Yuanti SC, SimYou, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 临时添加背景图 */
  background-image: url('./assets/images/common/65371180_p0.jpg');
  background-size: cover;
  background-position: center;
}
</style>
