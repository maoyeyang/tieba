<template>
  <div class="join-focus">
    <searchInput></searchInput>
    <newWatch v-if="isLogin"></newWatch>
    <focusBa v-if="isLogin"></focusBa>
    <noLogin v-if="!isLogin"
             @onLogin="onLogin"></noLogin>
  </div>
</template>

<script>
import {
  getCookie
} from '../../common/methods'
import searchInput from 'components/search/searchInput'
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
    }
  },
  created () {
    this.onIsLogin()
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
  padding-bottom: 60px
  font-size: 20px
</style>
