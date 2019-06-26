<template>
  <div id="app">
    <router-view />
    <Tabbar v-show='$store.getters.isTabbar'
            @updateMask="updateMask"></Tabbar>
    <div class="mask"
         v-show="isMask"></div>
  </div>
</template>

<script>
import Tabbar from 'pages/tabbar'
export default {
  name: 'App',
  data () {
    return {
      isMask: false
    }
  },
  methods: {
    updateMask (boolean) {
      this.isMask = boolean
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
  -moz-user-select: none
  -khtml-user-select: none
  user-select: none
  height: 100vh
  color: #000
  width: 100vw
  min-width: 330px
  z-index: 9
  position: absolute
  font-family: '楷体'
  z-index: 1
  background-repeat: no-repeat
  .tabbar
    z-index: 6
  .home-top
    z-index: 4
  .home-content
    position: absolute
    z-index: 2
  .mask
    width: 100%
    height: 100%
    position: fixed
    top: 0
    left: 0
    background-color: rgb(0, 0, 0)
    opacity: 0.8
    z-index: 5
</style>
