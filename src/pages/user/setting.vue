<template>
  <div class="setting">
    <Top>设置</Top>
    <div class="setting-content">
      <router-link to="/useredit"
                   tag="div"
                   class="setting-content-item">
        我的账号:&nbsp;&nbsp;{{userInfo.username}}
      </router-link>
    </div>
    <div class="setting-exit"
         @click="exit">
      退出登录
    </div>
  </div>
</template>

<script>
import Top from 'components/top'
import {
  delCookie
} from '../../common/methods'
export default {
  name: 'Setting',
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    exit () {
      delCookie('username')
      this.$router.push({ path: '/' })
    },
    getUserInfo () {
      this.$http.get('/auth/userinfo').then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.userInfo = data.data
        } else {
          this.$Message.error('登录认证失败')
        }
      })
    }
  },
  created () {
    this.getUserInfo()
  },
  components: {
    Top
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
      font-size: 16px
      padding: 5px 15px
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
