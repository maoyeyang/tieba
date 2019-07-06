<template>
  <div class="browse-history">
    <div class="top">
      <div class="go-back"
           @click="goBack">
        <span class="icon-goback"></span>
        <span class="text-goback">返回</span>
      </div>
      <span class="top-title">
        浏览历史
      </span>
      <span class="top-right"
            @click="empty">清空</span>
    </div>
    <div class="history-content">
      <div class="swiper">
        <router-link :to="`/tieinfo/${item.id}`"
                     tag="div"
                     class="history-item"
                     v-for="item in history"
                     :key="item.id">
          <div class="content-top">{{item.title}}</div>
          <div class="content-bottom">
            <span class="content-left">{{item.ba_name}}</span>
            <span class="content-right">{{item.time | dateDiff}}</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="box"
         v-show="this.$store.getters.isMask">
      <div class="text">你确定要删除所有的浏览历史?</div>
      <div class="bottom">
        <div class="botton border"
             @click="cancel">取消</div>
        <div class="botton"
             @click="check">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrowseHistory',
  data () {
    return {
      history: []
    }
  },
  methods: {
    cancel () {
      this.$store.dispatch('hiddenMask')
    },
    check () {
      this.cancel()
      this.history = []
      localStorage.setItem('joinTie', '[]')
    },
    goBack () {
      this.$router.go(-1)
    },
    empty () {
      this.$store.dispatch('showMask')
    }
  },
  created () {
    this.history = JSON.parse(localStorage.getItem('joinTie'))
  }
}
</script>

<style lang="stylus" scoped>
.browse-history
  .top
    width: 100%
    height: 40px
    box-shadow: 0px 0px 3px #747474
    text-align: center
    position: fixed
    background-color: #fff
    display: flex
    justify-content: space-between
    top: 0
    left: 0
    .top-title
      margin-top: 5px
      line-height: 30px
      font-size: 22px
      font-weight: normal
      font-family: '楷体'
      display: inline-block
    .go-back
      width: 80px
      height: 40px
      display: flex
      justify-content: flex-start
      .icon-goback
        width: 20px
        height: 20px
        display: inline-block
        margin-top: 10px
        margin-left: 10px
        background-image: url('../../assets/icon/left-circle.png')
        background-size: cover
      .text-goback
        font-size: 16px
        width: 40px
        height: 30px
        line-height: 30px
        margin-top: 5px
        display: inline-block
    .top-right
      width: 80px
      font-size: 18px
      color: #2A91FF
      height: 40px
      line-height: 40px
  .history-content
    padding-top: 42px
    padding-bottom: 60px
    width: 100%
    height: 100vh
    .swiper
      overflow: hidden
      width: 100%
      padding: 0 15px
      .history-item
        padding: 9px 0
        border-bottom: 1px solid #ccc
        .content-top
          font-size: 15px
          line-height: 22px
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          overflow: hidden
        .content-bottom
          margin-top: 5px
          font-size: 12px
          color: #999
          display: flex
          justify-content: space-between
  .box
    width: 280px
    position: fixed
    top: 50%
    left: 50%
    height: 170px
    transform: translate(-50%, -50%)
    z-index: 8
    border-radius: 15px
    overflow: hidden
    background-color: #fff
    .text
      width: 100%
      height: 120px
      font-size: 18px
      text-align: center
      line-height: 120px
      border-bottom: 1px solid #ccc
    .bottom
      width: 100%
      height: 50px
      display: flex
      .botton
        flex: 1
        color: blue
        text-align: center
        line-height: 50px
        font-size: 18px
        &.border
          border-right: 1px solid #ccc
</style>
