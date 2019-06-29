<template>
  <div class="setting">
    <div class="setting-top">
      <div class="go-back"
           @click="goBack">
        <span class="icon-goback"></span>
        <span class="text-goback">返回</span>
      </div>
      <span class="setting-title">设置</span>
    </div>
    <div class="setting-content">
      <router-link to=""
                   tag="div"
                   class="setting-content-item">
        我的账号
      </router-link>
    </div>
    <div class="setting-exit"
         @click="exit">
      退出登录
    </div>
  </div>
</template>

<script>
import {
  delCookie
} from '../../common/methods'
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
      this.$store.dispatch('showTabbar')
    },
    exit () {
      delCookie('username')
      this.$router.push({ path: '/' })
      this.$store.dispatch('showTabbar')
    }
  },
  created () {
    this.$store.dispatch('hiddenTabbar')
  }
}
</script>

<style lang="stylus" scoped>
.setting
  width: 100%
  height: 100vh
  background-color: #D7D7D7
  .setting-top
    width: 100%
    height: 40px
    box-shadow: 0px 0px 3px #747474
    text-align: center
    position: fixed
    top: 0
    left: 0
    background-color: #fff
    .setting-title
      margin-top: 5px
      line-height: 30px
      font-size: 24px
      font-weight: normal
      font-family: '楷体'
      display: inline-block
    .go-back
      position: absolute
      left: 0
      top: 0
      width: 80px
      height: 40px
      display: flex
      justify-content: flex-start
      .icon-goback
        width: 20px
        height: 20px
        display: inline-block
        margin-top: 10px
        margin-left: 10px
        background-image: url('../../assets/icon/left-circle.png')
        background-size: cover
      .text-goback
        font-size: 16px
        width: 40px
        height: 30px
        line-height: 30px
        margin-top: 5px
        display: inline-block
  .setting-content
    padding: 50px 0 15px 0
    .setting-content-item
      background-color: #fff
  .setting-exit
    width: 100%
    height: 50px
    font-size: 22px
    line-height: 50px
    background-color: #fff
    color: red
    text-align: center
    position: fixed
    bottom: 0
    left: 0
</style>
