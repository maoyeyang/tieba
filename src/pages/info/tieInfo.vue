<template>
  <div class="tieinfo">
    <Top></Top>
    <div class="tieinfo-bottom"
         @keyup.enter="addComment">
      <i-input placeholder="我有一个大胆的想法"
               class="input"
               v-model="comment"></i-input>
    </div>
    <div class="tie-item">
      <router-link :to="`/userinfo/${tieInfo.user_id}`"
                   tag="div"
                   class="tie-item-row-1">
        <img class="tie-item-avatar"
             :src="tieInfo.avatar_url">
        <h3 class="tie-item-nickname">{{tieInfo.nickname}}</h3>
        <span class="button-focus"
              v-if='!tieInfo.isFocus'
              @click.stop.prevent="focus">关注</span>
      </router-link>
      <div class="tie-item-row-2">
        <p class="tie-item-title">{{tieInfo.title}}</p>
        <p class="tie-item-content">{{tieInfo.content}}</p>
      </div>
      <div class="tie-item-row-3">
        <img v-for="(item,i) in tieInfo.images"
             :key='i'
             class="tie-item-img"
             :src="item"
             :preview="tieInfo.id" />
      </div>
      <div class="tie-item-row-4">
        <router-link :to="`/bainfo/${tieInfo.ba_id}`"
                     tag="p"
                     class="tie-item-ba">{{tieInfo.ba_name}}吧</router-link>
      </div>
      <div class="tie-item-row-5">
        <span class="tie-item-collect"
              @click="collect">
          <span class="icon-collect"
                :class="tieInfo.isCollect ? 'active':''"></span>
          收藏
        </span>
        <span class="tie-item-chat">
          <span class="icon-chat"></span>
          {{tieInfo.comments_count >0? tieInfo.comments_count :"回复"}}
        </span>
        <span class="tie-item-like"
              @click="like">
          <span class="icon-like"
                :class="tieInfo.isLike ? 'active':''"></span>
          {{tieInfo.likes}}
        </span>
      </div>
    </div>
    <div class="comment">
      <div class="option">
        <span class="all"
              :class="option?'active':''"
              @click="changeOption('all')">全部回复</span>
        <span class="louzhu"
              :class="!option?'active':''"
              @click="changeOption('louzhu')">只看楼主</span>
      </div>
      <div class="comment-item"
           v-for="(item,i) in listByOption"
           :key="item.id">
        <div class="comment-item-top">
          <img :src="item.avatar_url"
               class="comment-avatar">
          <div class="comment-top-right">
            <p class="comment-text">
              <span class="comment-nickname">{{item.nickname}}</span>
              <span class="comment-type"
                    v-if="item.isLouzhu">楼主</span>
            </p>
            <p class="comment-text">
              <span class="comment-number">第{{i+2}}楼</span>
              <span class="comment-time">{{item.created_at | dateDiff}}前</span>
            </p>
          </div>
        </div>
        <div class="comment-item-bottom">
          <p class="comment-content">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { likeTieWithAuth, unLikeTieWithAuth, collectTieWithAuth,
  addFocusWithAuth, removeCollectTieWithAuth, getTieInfo,
  getCommentList, addCommentWithAuth} from 'api'
import Top from 'components/top'
export default {
  name: 'TieInfo',
  data () {
    return {
      tieInfo: {},
      comment: '',
      commentList: [],
      option: true
    }
  },
  computed: {
    listByOption () {
      if (this.option === true) {
        return this.commentList
      } else {
        return this.commentList.filter(item => item.isLouzhu === true)
      }
    }
  },
  methods: {
    changeOption (str) {
      if (str === 'all') {
        this.option = true
      } else {
        this.option = false
      }
    },
    addComment () {
      if (!this.$Cookies.get('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      let data = {
        tie_id: this.tieInfo.id,
        content: this.comment
      }
      this.comment = ''
      addCommentWithAuth(data).then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.$Message.success('发帖成功')
          this.init()
        } else {
          this.$Message.success('发帖失败')
        }
      })
    },
    focus () {
      if (!this.$Cookies.get('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      addFocusWithAuth({ focus_id: this.tieInfo.user_id }).then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.tieInfo.isFocus = true
          return this.$Message.success('关注成功')
        } else {
          return this.$Message.error('关注失败')
        }
      })
    },
    collect () {
      if (!this.$Cookies.get('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      if (this.tieInfo.isCollect) {
        removeCollectTieWithAuth(this.tieInfo.id).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.tieInfo.isCollect = false
          } else {
            this.$Message.success('取消收藏失败')
          }
        })
      } else {
        collectTieWithAuth(this.tieInfo.id).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.tieInfo.isCollect = true
          } else {
            this.$Message.success('收藏失败')
          }
        })
      }
    },
    like () {
      if (!this.$Cookies.get('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      if (this.tieInfo.isLike) {
        unLikeTieWithAuth(this.tieInfo.id).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.tieInfo.isLike = false
            this.tieInfo.likes -= 1
          } else {
            this.$Message.success('取消点赞失败')
          }
        })
      } else {
        likeTieWithAuth(this.tieInfo.id).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.tieInfo.isLike = true
            this.tieInfo.likes += 1
          } else {
            this.$Message.success('点赞失败')
          }
        })
      }
    },
    setLocalStorage () {
      let arr = JSON.parse(localStorage.getItem('joinTie'))
      const obj = {
        id: this.tieInfo.id,
        ba_name: this.tieInfo.ba_name,
        title: this.tieInfo.title,
        time: new Date()
      }
      if (arr) {
        arr = arr.filter(item => item.id !== obj.id)
        arr.unshift(obj)
        localStorage.setItem('joinTie', JSON.stringify(arr))
        return
      }
      localStorage.setItem('joinTie', JSON.stringify([obj]))
    },
    init () {
      getTieInfo(parseInt(this.$route.params.id)).then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.tieInfo = data.data
          this.$previewRefresh()
          if (this.$Cookies.get('username')) {
            this.setLocalStorage()
          }
        }
      })
      getCommentList(parseInt(this.$route.params.id)).then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.commentList = data.data
        }
      })
    }
  },
  created () {
    this.init()
  },
  components: {
    Top
  }
}
</script>

<style lang="stylus" scoped>
.tieinfo
  .tieinfo-bottom
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 42px
    border-top: 1px solid #eee
    padding: 3px 15px
  .tie-item
    width: 100%
    padding: 41px 20px 10px 20px
    border-bottom: 4px solid #ccc
    .tie-item-row-1
      display: flex
      padding: 10px 0 5px 0
      justify-content: space-between
      .tie-item-avatar
        width: 40px
        height: 40px
        flex: 0 0 40px
        object-fit: cover
      .tie-item-nickname
        width: 100%
        text-align: left
        margin-left: 15px
        font-size: 16px
        font-weight: normal
        line-height: 40px
      .button-focus
        background-color: #4C6FFF
        font-size: 16px
        line-height: 25px
        width: 90px
        text-align: center
        border-radius: 5px
        height: 25px
        margin-top: 7.5px
        color: #fff
    .tie-item-row-2
      .tie-item-title
        font-weight: bold
        font-size: 16px
        padding: 3px 0 0 0
      .tie-item-content
        font-size: 14px
        margin-top: 3px
        text-indent: 2em
    .tie-item-row-3
      width: 100%
      padding: 8px 0
      img
        width: 90vw
        height: auto
        margin-bottom: 5px
        border-radius: 5px
    .tie-item-row-4
      display: flex
      justify-content: flex-start
      margin-top: 5px
      .tie-item-ba
        background-color: #eee
        font-size: 16px
        line-height: 27px
        height: 32px
        display: block
        padding: 3px 10px
    .tie-item-row-5
      display: flex
      height: 30px
      line-height: 30px
      font-size: 16px
      justify-content: space-between
      margin-top: 3px
      .tie-item-collect
        display: flex
        justify-content: flex-start
        line-height: 30px
        .icon-collect
          width: 30px
          height: 30px
          display: block
          background-image: url('../../assets/icon/star.png')
          background-repeat: no-repeat
          background-position: center center
          background-size: 25px 25px
          &.active
            background-image: url('../../assets/icon/star_active.png')
      .tie-item-chat
        display: flex
        justify-content: flex-start
        line-height: 30px
        .icon-chat
          width: 30px
          height: 30px
          display: block
          background-image: url('../../assets/icon/chat.png')
          background-repeat: no-repeat
          background-position: center center
          background-size: 25px 25px
      .tie-item-like
        display: flex
        justify-content: flex-start
        line-height: 30px
        margin-right: 50px
        .icon-like
          width: 30px
          height: 30px
          display: block
          background-image: url('../../assets/icon/heart.png')
          background-repeat: no-repeat
          background-position: center center
          background-size: 25px 25px
          &.active
            background-image: url('../../assets/icon/heart_active.png')
  .comment
    width: 100%
    padding: 0 15px
    .option
      height: 35px
      width: 100%
      margin-top: 5px
      font-size: 16px
      line-height: 30px
      border-bottom: 1px solid #aaa
      .all
        width: 80px
        height: 30px
        display: inline-block
        text-align: center
        &.active
          font-weight: bold
          font-size: 18px
      .louzhu
        width: 80px
        height: 30px
        display: inline-block
        text-align: center
        &.active
          font-weight: bold
          font-size: 18px
    .comment-item
      padding: 10px 0
      border-bottom: 1px dotted #eee
      .comment-item-top
        height: 60px
        display: flex
        justify-content: flex-start
        .comment-avatar
          width: 50px
          height: 50px
          object-fit: cover
          margin-top: 5px
          border-radius: 50%
        .comment-top-right
          margin-left: 15px
          margin-top: 5px
          .comment-text
            display: flex
            justify-content: flex-start
            .comment-nickname
              font-size: 18px
              line-height: 30px
            .comment-type
              font-size: 14px
              line-height: 22px
              padding: 0 6px
              margin-top: 5px
              margin-left: 10px
              height: 22px
              background: linear-gradient(to right, #02B0F0, #007BEE)
              color: #fff
            .comment-number
              color: #999
              font-size: 14px
              margin-right: 15px
            .comment-time
              font-size: 14px
              color: #999
      .comment-item-bottom
        margin-left: 65px
        margin-top: 10px
        font-size: 15px
</style>
