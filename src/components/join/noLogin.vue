<template>
  <div class="no-login">
    <p class="no-login-title">关注的吧</p>
    <div class="no-login-content">
      <img class="no-login-img"
           src='../../assets/images/moon.png' />
      <div class="no-login-text"
           @click='onLogin'>登录获取精彩内容></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    onLogin () {
      this.$emit('onLogin')
    }
  }
}
</script>

<style lang="stylus" scoped>
.no-login
  width: 94%
  margin: 10px 3%
  .no-login-title
    font-size: 16px
  .no-login-content
    text-align: center
    .no-login-img
      margin-top: 10px
      width: 155px
      height: 140px
    .no-login-text
      font-size: 14px
      color: blue
      width: 180px
      margin: 5px auto
</style>
