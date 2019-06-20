<template>
  <div class="home-focus">
    <div v-if="!isLogin"
         class="no-login">
      <img class="wait-img"
           src="../../assets/images/moon.png" />
      <p class="text">登录查看吧友最新帖子~</p>
      <button class="button"
              @click="onLogin">登录</button>
    </div>
    <div v-if="isLogin"
         class="is-login">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFocus',
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    onIsLogin () {
      if (sessionStorage.getItem('user')) {
        this.isLogin = true
      }
    },
    onLogin () {
      this.$router.push({ path: '/login' })
    }
  },
  created () {
    this.onIsLogin()
  }
}
</script>

<style lang="stylus" scoped>
.home-focus
  padding-top: 56px
  padding-bottom: 60px
  font-size: 20px
  position: relative
  .no-login
    position: absolute
    top: 50%
    left: 50%
    width: 260px
    height: 230px
    transform: translate(-50%, 50%)
    .wait-img
      width: 140px
      height: 130px
      margin: 0 auto
      display: block
    .text
      margin-top: 10px
      text-align: center
      font-size: 15px
      font-family: '楷体'
    .button
      text-align: center
      margin-top: 5px
      padding: 0 110px
      border-radius: 3px
      font-size: 20px
      border: none
      color: #fff
      font-family: '楷体'
      background-color: #0086FF
      outline: none
      &:active
        background-color: #0166C1
</style>
