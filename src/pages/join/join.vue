<template>
  <div>
    <div class="home-top"
         :class="this.$store.getters.isScroll?'top-scroll':''">
      <router-link tag="span"
                   class="home-top-item"
                   to="/join/focus">
        <span class="home-top-item-text">关注</span>
      </router-link>
      <router-link tag="span"
                   class="home-top-item"
                   to="/join/recommend">
        <span class="home-top-item-text">推荐</span>
      </router-link>
      <span @click="warning"
            class="home-top-right">
        <img class="home-top-sign"
             src="../../assets/icon/sign.png" />
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data () {
    return {
      isScroll: true
    }
  },
  methods: {
    warning () {
      this.$Message.warning('该功能暂未被实现,请勿点击!!!')
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-top
  padding: 10px 0
  position: fixed
  top: 0
  left: 0
  width: 100%
  background-color: #fff
  &.top-scroll
    box-shadow: 0px 0px 5px #747474
  .home-top-item
    width: 60px
    display: inline-block
    margin-left: 5px
    padding: 0 5px
    text-align: center
    position: relative
    .home-top-item-text
      font-size: 20px
      font-family: '楷体'
    &.active
      &:before
        position: absolute
        display: inline-block
        bottom: 0px
        left: 0px
        border-radius: 10px
        background-color: #FEF600
        z-index: -1
        content: ''
        width: 60px
        height: 10px
      .home-top-item-text
        font-size: 24px
  .home-top-right
    float: right
    margin-right: 20px
    .home-top-sign
      width: 36px
      height: 36px
      vertical-align: middle
</style>
