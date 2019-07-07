<template>
  <div class="message">
    <div class="message-top">
      <span ref="message-title-0"
            class="message-top-title"
            @click="romve(0)">消息</span>
      <span ref="message-title-1"
            class="message-top-title"
            @click="romve(1)">聊天</span>
      <span ref="message-title-2"
            class="message-top-title"
            @click="romve(2)">通知</span>
      <span class="message-top-unline"
            ref="unline"></span>
      <span class="message-top-icon icon-comment"
            @click="chat"></span>
    </div>
    <div class="message-content"
         ref="message-content">
      <div class="message-content-in">
        <MessageHome class="message-content-item"></MessageHome>
        <MessageChat class="message-content-item"></MessageChat>
        <MessageNotice class="message-content-item"></MessageNotice>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import MessageNotice from './messageNotice'
import MessageChat from './messageChat'
import MessageHome from './messageHome'
export default {
  name: 'Message',
  data () {
    return {
      index: 0,
      oldX: -0
    }
  },
  methods: {
    chat () {
      this.$Message.warning('该功能暂未被实现,请勿点击!!!')
    },
    romve (index) {
      let name = 'message-title-' + index
      this.index = index
      this.oldX = -index * this.$refs['message-content'].offsetWidth
      this.$refs.unline.style.left = this.$refs[name].offsetLeft + 'px'
      this.contentScroll.scrollTo(-this.$refs['message-content'].offsetWidth * index, 0, 300)
    },
    initScroll () {
      this.$nextTick(() => {
        if (!this.contentScroll) {
          this.contentScroll = new BScroll(this.$refs['message-content'], {
            startX: 0,
            click: true,
            tap: true,
            scrollX: true,
            scrollY: false,
            momentum: false
          })
        } else {
          this.contentScroll.refresh()
        }
        this.contentScroll.on('scrollEnd', ({ x }) => {
          let width = this.$refs['message-content'].offsetWidth
          if (x !== -width && x !== -2 * width && x !== 0) {
            if (Math.abs(x - this.oldX) < width / 4) {
              this.contentScroll.scrollTo(-this.index * width, 0, 300)
            } else if (this.oldX > x) {
              this.contentScroll.scrollTo(-(++this.index) * width, 0, 300)
            } else {
              this.contentScroll.scrollTo(-(--this.index) * width, 0, 300)
            }
            this.oldX = -this.index * width
            this.romve(this.index)
          }
        })
        this.romve(0)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initScroll()
    })
    window.onresize = () => {
      this.initScroll()
    }
  },
  components: {
    MessageChat,
    MessageNotice,
    MessageHome
  }
}
</script>

<style lang="stylus" scoped>
.message
  width: 100%
  height: 100vh
  padding-bottom: 60px
  .message-top
    height: 40px
    width: 100%
    position: fixed
    left: 0
    top: 0
    display: flex
    justify-content: space-evenly
    background-color: #fff
    z-index: 5
    .message-top-title
      height: 40px
      font-size: 20px
      line-height: 40px
      text-align: center
    .message-top-unline
      transition: all 0.3s ease
      position: absolute
      bottom: 0
      left: 0
      height: 2px
      width: 40px
      background-color: #000
    .message-top-icon.icon-comment
      height: 40px
      width: 40px
      display: block
      position: absolute
      bottom: 0
      right: 0px
      background-image: url('../../assets/icon/comment.png')
      background-size: 25px 25px
      background-position: center 40%
      background-repeat: no-repeat
  .message-content
    width: 100%
    height: 100%
    padding-top: 40px
    overflow: hidden
    white-space: nowrap
    overflow-x: scroll
    .message-content-in
      width: 300%
      height: 100%
      display: flex
      justify-content: flex-start
      .message-content-item
        width: 33.333%
        height: 100%
        display: inline-block
</style>
