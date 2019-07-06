<template>
  <div>
    <Top></Top>
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
  </div>
</template>

<script>
import { likeTieWithAuth, unLikeTieWithAuth, collectTieWithAuth,
  addFocusWithAuth, removeCollectTieWithAuth, getTieInfo} from 'api'
import { getCookie } from 'common/methods'
import Top from 'components/top'
export default {
  name: 'TieInfo',
  data () {
    return {
      tieInfo: {}
    }
  },
  methods: {
    focus () {
      if (!getCookie('username')) {
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
      if (!getCookie('username')) {
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
      if (!getCookie('username')) {
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
    }
  },
  created () {
    getTieInfo(parseInt(this.$route.params.id)).then(({ data }) => {
      if (data && data.statusCode === 200) {
        this.tieInfo = data.data
        this.$previewRefresh()
        if (getCookie('username')) {
          this.setLocalStorage()
        }
      }
    })
  },
  components: {
    Top
  }
}
</script>

<style lang="stylus" scoped>
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
</style>
