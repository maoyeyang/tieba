<template>
  <div class="no-login">
    <p class="no-login-title">关注的吧</p>
    <div class="no-login-content">
      <img class="no-login-img"
           src='../../assets/images/moon.png'>
      <p class="no-login-text">登录获取精彩内容></p>
    </div>
  </div>
</template>

<script>
export default {

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
      width: 200px
      height: 180px
    .no-login-text
      font-size: 14px
      color: blue
</style>
