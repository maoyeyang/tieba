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
                 to="/join">
      <span class="tabbar-item-icon icon-join">
      </span>
      <span class="tabbar-item-label">进吧</span>
    </router-link>
    <span class="tabbar-item click"
          @click="release">
      <div class="tabbar-item-center"
           :class="this.$store.getters.isMask ? 'isClick' : ''"
           ref="release_X">×</div>
    </span>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/message">
      <span class="tabbar-item-icon icon-message">
        <span class="tabbar-message-number"
              v-show="message_number>0">{{message_number > 99 ? '99+':message_number}}</span>
      </span>
      <span class="tabbar-item-label">消息</span>
    </router-link>
    <router-link tag="span"
                 class="tabbar-item"
                 to="/user">
      <span class="tabbar-item-icon icon-user">
      </span>
      <span class="tabbar-item-label">我的</span>
    </router-link>
    <MaskButtom></MaskButtom>
  </nav>
</template>

<script>
import MaskButtom from 'components/maskButtom'
export default {
  name: 'Tabbar',
  data () {
    return {
      isRefresh: false,
      message_number: 100
    }
  },
  methods: {
    release () {
      if (!this.$Cookies.get('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      if (this.$store.getters.isMask) {
        this.$store.dispatch('hiddenMask')
      } else {
        this.$store.dispatch('showMask')
      }
    }
  },
  components: {
    MaskButtom
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
  background-color: #fff
  box-shadow: 0px 0px 3px #747474
  .tabbar-item
    flex: 1
    text-align: center
    .tabbar-item-icon
      margin: 5px auto 0
      height: 30px
      width: 30px
      display: block
      background-size: cover
      &.icon-home
        background-image: url('../assets/icon/home.png')
      &.icon-join
        background-image: url('../assets/icon/join.png')
      &.icon-message
        background-image: url('../assets/icon/message.png')
        position: relative
        .tabbar-message-number
          position: absolute
          top: -4px
          left: 50%
          background-color: red
          color: #fff
          font-weight: bold
          padding: 0 7px
          text-align: center
          box-shadow: 0px 0px 5px red
          border-radius: 15px
      &.icon-user
        background-image: url('../assets/icon/user.png')
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
      line-height: 52px
      margin: 0 auto
      border-radius: 25%
      background: linear-gradient(to right, #02B0F0, #007BEE)
      box-shadow: 2px 2px 15px #95C9FF
      transform: translateY(-15px) rotate(45deg)
      transform-origin: 50% 50%
      text-align: center
      color: #ffffff
      font-size: 35px
      transition: all 0.3s linear
      z-index: 8
      &.isClick
        transform: translateY(-60px) rotate(90deg)
        z-index: 9
  .tabbar-item.click
    z-index: 9
</style>
