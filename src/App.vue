<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tabbar v-show='$store.getters.isTabbar'></Tabbar>
    <AllMask v-show='$store.getters.isMask'></AllMask>
    <Spin fix
          v-show='$store.getters.isLoading'>
      <Icon type="ios-loading"
            size=70
            class="demo-spin-icon-load"></Icon>
      <div>加载中</div>
    </Spin>
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
  .ivu-spin-fix
    background-color: rgba(0, 0, 0, 0.6)
    color: #fff
    .ivu-spin-text
      font-size: 20px
    .demo-spin-icon-load
      animation: ani-demo-spin 1s linear infinite
@keyframes ani-demo-spin
  from
    transform: rotate(0deg)
  50%
    transform: rotate(180deg)
  to
    transform: rotate(360deg)
</style>
