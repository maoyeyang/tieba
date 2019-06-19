<template>
  <div id="app">
    <router-view />
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from 'pages/tabbar/tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
