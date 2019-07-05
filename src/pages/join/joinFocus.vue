<template>
  <div class="join-focus">
    <div ref="srcoll"
         class='wrapper'>
      <div>
        <searchInput></searchInput>
        <newWatch v-if="isLogin"></newWatch>
        <focusBa v-if="isLogin"
                 @initScroll="initScroll"></focusBa>
        <noLogin v-if="!isLogin"
                 @onLogin="onLogin"></noLogin>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import {
  getCookie
} from 'common/methods'
import searchInput from 'components/input/searchInput'
import newWatch from 'components/join/newWatch'
import focusBa from 'components/join/focusBa'
import noLogin from 'components/join/noLogin'
export default {
  name: 'JoinFocus',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    onIsLogin () {
      if (getCookie('username')) {
        this.isLogin = true
      }
    },
    onLogin () {
      this.$router.push({ path: '/login' })
    },
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs['srcoll'], {
          click: true,
          scrollY: true
        })
        this.scroll.on('touchEnd', (pos) => {
          if (pos.y > 120) {
          }
        })
      })
    }
  },
  created () {
    this.onIsLogin()
  },
  mounted () {
  },
  components: {
    searchInput,
    newWatch,
    focusBa,
    noLogin
  }
}
</script>

<style lang="stylus" scoped>
.join-focus
  padding-top: 56px
  font-size: 20px
  height: 100vh
  width: 100%
  padding-bottom: 60px
  .wrapper
    height: 100%
    overflow: hidden
</style>
