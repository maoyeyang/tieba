<template>
  <div class="new-watch">
    <div class="new-watch-top">
      <h3 class="new-watch-top-title">
        最近逛的吧
      </h3>
      <span class="new-watch-top-icon"
            :class="show ? '':'close'"
            @click="showAndHidden"></span>
    </div>
    <div class="new-wacth-wrapper"
         ref="scroll_watch"
         v-show="show">
      <div class="new-wacth-content">
        <router-link :to="`/bainfo/${item.id}`"
                     class="new-wacth-item"
                     v-for="(item, i) in NewWatchList"
                     :key="i">
          <img class="new-wacth-img"
               :src="item.theme_url">
          <p class="new-wacth-name">{{item.ba_name | numberByW}}</p>
          <p class="new-wacth-fans">关注:{{item.fans_count | numberByW}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  data () {
    return {
      NewWatchList: [],
      show: true
    }
  },
  methods: {
    showAndHidden () {
      this.show = !this.show
    },
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs['scroll_watch'], {
          startX: 0,
          click: true,
          scrollX: true
        })
      })
    },
    getNewWatchList () {
      this.NewWatchList = JSON.parse(localStorage.getItem('joinBa'))
    }
  },
  created () {
    this.getNewWatchList()
  },
  mounted () {
    this.initScroll()
  }

}
</script>

<style lang="stylus" scoped>
.new-watch
  width: 97%
  margin: 10px 0 0 3%
  .new-watch-top
    display: flex
    justify-content: space-between
    .new-watch-top-title
      font-size: 16px
      font-weight: normal
    .new-watch-top-icon
      background-image: url('../../assets/icon/eye.png')
      width: 25px
      height: 25px
      display: block
      background-size: cover
      margin-right: 15px
      &.close
        background-image: url('../../assets/icon/eye_close.png')
  .new-wacth-wrapper
    width: 100%
    margin-top: 10px
    white-space: nowrap
    overflow: hidden
    .new-wacth-content
      justify-content: space-between
      display: inline-block
      padding: 0 5px 5px 5px
      .new-wacth-item
        width: 120px
        height: 150px
        display: inline-block
        margin-right: 10px
        text-align: center
        background-color: #ee
        border-radius: 10px 10px 0 0
        background: linear-gradient(#00CBD5, #00CBD5 45%, #ffffff 45%, #ffffff)
        box-shadow: 1px 0 7px #DCDBDB
        .new-wacth-img
          width: 50px
          height: 50px
          border: 2px solid #fff
          object-fit: cover
          margin-top: 30px
          border-radius: 20px
        .new-wacth-name
          width: 100%
          font-size: 16px
          height: 25px
          color: #000
        .new-wacth-fans
          width: 100%
          height: 25px
          font-size: 12px
          color: #ABABAC
</style>
