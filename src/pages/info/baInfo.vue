<template>
  <div class="ba">
    <div class="top"
         :class="!isScroll ?'scroll':''">
      <div class="go-back"
           @click="goBack">
        <span class="icon-goback"></span>
        <span class="text-goback">返回</span>
      </div>
      <span class="top-title"
            v-show="!isScroll">
        {{baInfo.ba_name}}
      </span>
    </div>
    <div class="release"
         :class="this.$store.getters.isMask ? 'isClick' :''"
         @click="release">×</div>
    <div class="mask-bottom"
         v-show="this.$store.getters.isMask">
      <router-link tag="div"
                   :to="`/release/${baInfo.id}`"
                   class="mask-item"><span class="mask-item-icon"><img src="../../assets/icon/font.png" /></span><span class="mask-item-text">文字</span></router-link>
      <div class="mask-item"><span class="mask-item-icon"><img src="../../assets/icon/camera.png" /></span><span class="mask-item-text">拍摄</span></div>
      <div class="mask-item"><span class="mask-item-icon"><img src="../../assets/icon/image.png" /></span><span class="mask-item-text">相册</span></div>
      <div class="mask-item"><span class="mask-item-icon"><img src="../../assets/icon/live.png" /></span><span class="mask-item-text">直播</span></div>
    </div>
    <div class="content">
      <div class="ba-info">
        <div class="ba-content">
          <img class="ba-img"
               :src="baInfo.theme_url" />
          <div class="ba-mid">
            <div class="ba-name">{{baInfo.ba_name}}</div>
            <div class="ba-mid-bottom">
              <span class="ba-fans">关注 {{baInfo.fans_count | numberByW}}</span>
              <span class="ba-tiecount">帖子 {{baInfo.tie_count | numberByW}}</span>
            </div>
          </div>
          <div class="ba-botton"
               @click="focus">{{ baInfo.isFocus ? '签到' : '关注'}}</div>
        </div>
      </div>
      <div class="option">
        <span class="option-item"
              :class="option ?'active':''"
              @click="change('new')">最新</span>
        <span class="option-item"
              :class="!option ?'active':''"
              @click="change('jing')">精华</span>
      </div>
      <div class="tie">
        <TieItem :tieInfo="item"
                 :hiddenBa="false"
                 v-for="item in tieInfoList"
                 :key="item.id"></TieItem>
      </div>
    </div>

  </div>
</template>

<script>
import { getBaInfo, addFocusBaWithAuth, getTieListByBa } from 'api'
import { getCookie } from 'common/methods'
import TieItem from 'components/tie/tieItem'
export default {
  name: 'BaInfo',
  data () {
    return {
      baInfo: {},
      option: true,
      isScroll: false,
      tieInfoList: []
    }
  },
  methods: {
    change (str) {
      if (str === 'new') {
        this.option = true
      } else {
        this.option = false
      }
    },
    focus () {
      if (!getCookie('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      if (this.baInfo.isFocus) {
        this.$Message.warning('该功能还未开启,请问频繁点击')
      } else {
        addFocusBaWithAuth({ ba_id: this.baInfo.id }).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.$Message.success('关注该贴吧成功')
            this.baInfo.isFocus = true
          }
        })
      }
    },
    release () {
      if (this.$store.getters.isMask === false) {
        this.$store.dispatch('showMask')
      } else {
        this.$store.dispatch('hiddenMask')
      }
    },
    goBack () {
      this.$router.go(-1)
    },
    setLocalStorage () {
      let newWatchList = JSON.parse(localStorage.getItem('joinBa'))
      const obj = {
        id: this.baInfo.id,
        ba_name: this.baInfo.ba_name,
        theme_url: this.baInfo.theme_url,
        fans_count: this.baInfo.fans_count
      }
      if (newWatchList) {
        newWatchList = newWatchList.filter(item => item.id !== obj.id)
        if (newWatchList.length >= 20) {
          newWatchList.pop()
        }
        newWatchList.unshift(obj)
        localStorage.setItem('joinBa', JSON.stringify(newWatchList))
        return
      }
      localStorage.setItem('joinBa', JSON.stringify([obj]))
    }
  },
  created () {
    getBaInfo(parseInt(this.$route.params.id)).then(({ data }) => {
      if (data && data.statusCode === 200) {
        this.baInfo = data.data
        if (getCookie('username')) {
          this.setLocalStorage()
        }
      }
    })
    getTieListByBa(parseInt(this.$route.params.id)).then(({ data }) => {
      if (data && data.statusCode === 200) {
        this.tieInfoList = data.data
      }
    })
  },
  components: {
    TieItem
  }
}
</script>

<style lang="stylus" scoped>
.ba
  .top
    width: 100%
    height: 40px
    text-align: center
    position: fixed
    top: 0
    left: 0
    &.scroll
      background-color: #fff
      box-shadow: 0px 0px 3px #747474
    .top-title
      margin-top: 5px
      line-height: 30px
      font-size: 22px
      font-weight: normal
      font-family: '楷体'
      display: inline-block
    .go-back
      position: absolute
      left: 0
      top: 0
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
  .mask-bottom
    width: 100%
    height: 260px
    position: fixed
    bottom: 0
    left: 0
    border-radius: 10px 10px 0 0
    background-color: rgba(240, 240, 240, 0.9)
    z-index: 7
    display: flex
    justify-content: space-around
    padding-top: 40px
    .mask-item
      width: 100%
      height: 100px
      text-align: center
      .mask-item-icon
        width: 60px
        height: 60px
        display: block
        margin: 0 auto
        background-color: #fff
        border-radius: 20px
        img
          width: 40px
          height: 40px
          margin: 10px auto
      .mask-item-text
        font-size: 16px
        line-height: 30px
  .release
    position: fixed
    bottom: 50px
    left: 85vw
    width: 50px
    height: 50px
    line-height: 52px
    margin: 0 auto
    border-radius: 25%
    background: linear-gradient(to right, #02B0F0, #007BEE)
    box-shadow: 2px 2px 15px #95C9FF
    transform: translateX(-50%) rotate(45deg)
    transform-origin: 50% 50%
    text-align: center
    color: #ffffff
    font-size: 35px
    transition: all 0.3s linear
    z-index: 8
    &.isClick
      left: 50vw
      transform: translateX(-50%) rotate(270deg)
      z-index: 9
  .content
    width: 100%
    height: 100vh
    .ba-info
      width: 100%
      height: 200px
      background-color: #00CBD5
      .ba-content
        width: 100%
        height: 155px
        padding: 90px 5% 0
        display: flex
        justify-content: space-between
        .ba-img
          width: 75px
          height: 75px
          flex: 0 0 75px
          border: 3px solid #fff
          background-color: #fff
          border-radius: 20px
        .ba-mid
          width: 100%
          margin-left: 20px
          .ba-name
            font-size: 28px
            font-weight: bold
            color: #fff
          .ba-mid-bottom
            display: flex
            justify-content: space-between
            color: #fff
            font-size: 16px
            .ba-tiecount
              margin-right: 50px
        .ba-botton
          flex: 0 0 60px
          height: 30px
          line-height: 30px
          text-align: center
          margin-top: 22px
          font-size: 16px
          background-color: #fff
          border-radius: 5px
          color: #000
    .option
      width: 100%
      height: 35px
      line-height: 35px
      padding: 0 20px
      border-bottom: 1px solid #ccc
      .option-item
        margin-right: 20px
        font-size: 16px
        display: inline-block
        width: 40px
        height: 20px
        text-align: center
        &.active
          font-size: 18px
          font-weight: bold
</style>
