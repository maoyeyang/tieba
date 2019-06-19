<template>
  <div>
    <div class="home-top"
         :class="isScroll?'top-scroll':''">
      <router-link tag="span"
                   class="home-top-item"
                   to="/home/focus">
        <span class="home-top-item-text">关注</span>
      </router-link>
      <router-link tag="span"
                   class="home-top-item"
                   to="/home/content">
        <span class="home-top-item-text">首页</span>
      </router-link>
      <router-link tag="span"
                   class="home-top-item"
                   to="/home/topic">
        <span class="home-top-item-text">话题</span>
      </router-link>
      <router-link tag="span"
                   class="home-top-item"
                   to="/home/live">
        <span class="home-top-item-text">直播</span>
      </router-link>
      <router-link tag="span"
                   class="home-top-right"
                   to="/search">
        <img class="home-top-search"
             src="../../assets/icon/search.png" />
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isScroll: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-top
  padding: 10px 0
  &.top-scroll
    box-shadow: 0px 0px 5px #747474
  .home-top-item
    width: 50px
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
        bottom: -5px
        left: 0px
        border-radius: 10px
        background-color: #FEF600
        z-index: -1
        content: ''
        width: 60px
        height: 15px
      .home-top-item-text
        font-size: 24px
  .home-top-right
    float: right
    margin-right: 20px
    .home-top-search
      width: 27px
      height: 27px
      vertical-align: middle
</style>
