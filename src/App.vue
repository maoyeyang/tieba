<template>
  <div id="app">
    <router-view />
    <Tabbar v-show='$store.getters.isTabbar'></Tabbar>
  </div>
</template>

<script>
import Tabbar from 'pages/tabbar'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Tabbar
  }
}
</script>

<style lang="stylus">
*
  padding: 0
  margin: 0
img
  vertical-align: middle
#app
  height: 100vh
  color: #000
  width: 100vw
  min-width: 330px
  z-index: 9
  position: absolute
  font-family: '楷体'
  .tabbar
    z-index: 9999
  .home-top
    z-index: 9999
  .home-content
    position: absolute
    z-index: 1
    div
      z-index: 1
</style>
