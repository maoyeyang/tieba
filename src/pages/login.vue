<template>
  <div class="login">
    <Top>
      <slot>快速登录</slot>
    </Top>
    <img class="logo"
         src="../assets/images/bd_logo.png">
    <h1 class="title">欢迎登录百度账号</h1>
    <p class="text">输入用户密码,快速登录</p>
    <LoginInput></LoginInput>
  </div>
</template>

<script>
import LoginInput from 'components/input/loginInput'
import Top from 'components/top'
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  components: {
    LoginInput,
    Top
  }
}
</script>

<style lang="stylus" scoped>
.login
  width: 100%
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
