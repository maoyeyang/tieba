<template>
  <div class="register">
    <div class="register-top">
      <div class="go-back"
           @click="goBack">
        <span class="icon-goback"></span>
        <span class="text-goback">返回</span>
      </div>
      <span class="register-title">快速注册</span>
    </div>
    <img class="logo"
         src="../assets/images/bd_logo.png">
    <h1 class="title">欢迎注册百度账号</h1>
    <p class="text">输入用户密码,快速注册</p>
    <RegisterInput></RegisterInput>
  </div>
</template>

<script>
import RegisterInput from 'components/input/registerInput'
export default {
  name: 'Register',
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  components: {
    RegisterInput
  }
}
</script>

<style lang="stylus" scoped>
.register
  width: 100%
  .register-top
    width: 100%
    height: 40px
    box-shadow: 0px 0px 3px #747474
    text-align: center
    position: relative
    .register-title
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
        background-image: url('../assets/icon/left-circle.png')
        background-size: cover
      .text-goback
        font-size: 16px
        width: 40px
        height: 30px
        line-height: 30px
        margin-top: 5px
        display: inline-block
  .logo
    width: 200px
    height: 70px
    padding-left: 7px
    margin-top: 30px
  .title
    font-size: 32px
    padding-left: 20px
    font-weight: normal
    font-family: '楷体'
    color: #000
  .text
    font-size: 14px
    padding-left: 20px
    font-weight: normal
    margin-top: 3px
    font-family: '楷体'
    color: #9C9C9C
</style>
