<template>
  <div class="register">
    <Top>
      <slot>快速注册</slot>
    </Top>
    <img class="logo"
         src="../assets/images/bd_logo.png">
    <h1 class="title">欢迎注册百度账号</h1>
    <p class="text">输入用户密码,快速注册</p>
    <RegisterInput></RegisterInput>
  </div>
</template>

<script>
import Top from 'components/top'
import RegisterInput from 'components/input/registerInput'
export default {
  name: 'Register',
  data () {
    return {

    }
  },
  components: {
    RegisterInput,
    Top
  }
}
</script>

<style lang="stylus" scoped>
.register
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
