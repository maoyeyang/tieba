<template>
  <div id="app">
    <router-view />
    <Tabbar v-show='$store.getters.isTabbar'></Tabbar>
    <AllMask v-show='$store.getters.isMask'></AllMask>
  </div>
</template>

<script>
import Tabbar from 'components/tabbar'
import AllMask from 'components/mask'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Tabbar,
    AllMask
  },
  created () {
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
    z-index: 7
  .home-top
    z-index: 4
  .home-content
    position: absolute
    z-index: 2
</style>
