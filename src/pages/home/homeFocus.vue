<template>
  <div class="home-focus">
    <div v-if="!isLogin"
         class="no-login">
      <img class="wait-img"
           src="../../assets/images/moon.png" />
      <p class="text">登录查看吧友最新帖子~</p>
      <button class="button"
              @click="toLogin">登录</button>
    </div>
    <div v-if="isLogin"
         class="is-login"
         ref="srcoll">
      <div>
        <TieItem :tieInfo="item"
                 :hiddenBa="hiddenBa"
                 v-for="item in tieInfoList"
                 :key="item.id"></TieItem>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { getTieListByFocus } from 'api'
import TieItem from 'components/tie/tieItem'
export default {
  name: 'HomeFocus',
  data () {
    return {
      isLogin: false,
      tieInfoList: [],
      hiddenBa: true
    }
  },
  methods: {
    onIsLogin () {
      if (this.$Cookies.get('username')) {
        this.isLogin = true
        getTieListByFocus().then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.tieInfoList = data.data
            this.initScroll()
          }
        })
      }
    },
    toLogin () {
      this.$router.push({ path: '/login' })
    },
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs['srcoll'], {
          click: true,
          scrollY: true,
          probeType: 3
        })
        this.scroll.on('touchEnd', (pos) => {
          if (pos.y > 100) {
            this.onIsLogin()
          }
        })
        this.scroll.on('scroll', (pos) => {
          if (pos.y < 0) {
            this.$store.commit('updateScrollStatus', true)
          }
          if (pos.y >= 0) {
            this.$store.commit('updateScrollStatus', false)
          }
        })
      })
    }
  },
  created () {
    this.onIsLogin()
    this.$store.commit('updateScrollStatus', false)
  },
  components: {
    TieItem
  }
}
</script>

<style lang="stylus" scoped>
.home-focus
  padding-top: 56px
  padding-bottom: 60px
  font-size: 20px
  width: 100%
  height: 100vh
  position: relative
  .no-login
    position: absolute
    top: 50%
    left: 50%
    width: 260px
    height: 230px
    transform: translate(-50%, -50%)
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
  .is-login
    height: 100%
    overflow: hidden
</style>
