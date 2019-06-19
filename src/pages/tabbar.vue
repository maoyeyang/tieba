<template>
  <nav class="tabbar">
    <router-link tag="span"
                 class="tabbar-item"
                 to="/home">
      <img class="tabbar-item-icon"
           src="../assets/icon/home.png" />
      <span class="tabbar-item-label">首页</span>
    </router-link>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/member">
      <img class="tabbar-item-icon"
           src="../assets/icon/login.png" />
      <span class="tabbar-item-label">进吧</span>
    </router-link>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/top">
      <div class="tabbar-item-center">×</div>
    </router-link>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/shopcar">
      <img class="tabbar-item-icon"
           src="../assets/icon/bell.png" />
      <span class="tabbar-item-label">消息</span>
    </router-link>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/search">
      <img class="tabbar-item-icon"
           src="../assets/icon/user.png" />
      <span class="tabbar-item-label">我的</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.tabbar
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  height: 60px
  display: flex
  box-shadow: 0px 0px 3px #747474
  .tabbar-item
    flex: 1
    text-align: center
    .tabbar-item-icon
      padding-top: 5px
      margin: 0 auto
      height: 30px
      width: 30px
      display: block
    .tabbar-item-label
      font-size: 12px
    .tabbar-item-center
      width: 50px
      height: 50px
      line-height: 45px
      margin: 0 auto
      background-color: blue
      border-radius: 25%
      background: linear-gradient(to right, #02B0F0, #007BEE)
      box-shadow: 2px 2px 15px #95C9FF
      transform: translateY(-15px) rotate(45deg)
      transform-origin: 50% 50%
      text-align: center
      color: #ffffff
      font-size: 35px
</style>
