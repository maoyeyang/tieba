<template>
  <div id="app">
    <router-view />
    <Tabbar v-show='isTabbar'></Tabbar>
  </div>
</template>

<script>
import Tabbar from 'pages/tabbar'
export default {
  name: 'App',
  data () {
    return {
      isTabbar: true
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
</style>
