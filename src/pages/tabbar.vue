<template>
  <nav class="tabbar">
    <router-link tag="span"
                 class="tabbar-item"
                 to="/home"
                 :class="isRefresh? 'refresh' :''">
      <div class="tabbar-item-icon icon-home"
           :class="isRefresh? 'refresh' :''">
      </div>
      <span class="tabbar-item-label">首页</span>
    </router-link>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/member">
      <span class="tabbar-item-icon icon-join">
      </span>
      <span class="tabbar-item-label">进吧</span>
    </router-link>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/release">
      <div class="tabbar-item-center">×</div>
    </router-link>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/shopcar">
      <span class="tabbar-item-icon icon-message">
      </span>
      <span class="tabbar-item-label">消息</span>
    </router-link>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/search">
      <span class="tabbar-item-icon icon-user">
      </span>
      <span class="tabbar-item-label">我的</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Tabbar',
  data () {
    return {
      isRefresh: false
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
      margin: 5px auto 0
      height: 30px
      width: 30px
      display: block
      &.icon-home
        background-image: url('../assets/icon/home.png')
        background-size: cover
      &.icon-join
        background-image: url('../assets/icon/join.png')
        background-size: cover
      &.icon-message
        background-image: url('../assets/icon/message.png')
        background-size: cover
      &.icon-user
        background-image: url('../assets/icon/user.png')
        background-size: cover
    &.active
      .tabbar-item-icon
        &.icon-home
          background-image: url('../assets/icon/homeActive.png')
        &.icon-join
          background-image: url('../assets/icon/joinActive.png')
        &.icon-message
          background-image: url('../assets/icon/messageActive.png')
        &.icon-user
          background-image: url('../assets/icon/userActive.png')
        &.refresh
          background-image: url('../assets/icon/refresh.png')
          background-size: cover
      .tabbar-item-label
        color: #0083FF
      &.refresh
        .tabbar-item-label
          color: #FF1B19
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
