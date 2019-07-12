<template>
  <div class="message-home">
    <div class="like"
         @touchstart="downAndUp"
         @touchend="downAndUp"
         @click="goLike"
         :class="down ?'active':''">
      <span class="icon-heart"></span>
      <span class="like-text">点赞</span>
      <span class="icon-right"></span>
    </div>
    <div class="comment-item"
         v-for="item in commentList"
         :key="item.id">
      <router-link :to="`/userinfo/${item.user_id}`"
                   class="item-row-1"
                   tag="div">
        <img :src="item.avatar_url"
             class="item-img" />
        <div>
          <p class="item-nickname">{{item.nickname}}</p>
          <p class="item-time">{{item.updated_at | dateDiff}}前</p>
        </div>
      </router-link>
      <div class="item-row-2">
        {{item.content}}
      </div>
      <router-link class="item-row-3"
                   :to="`/tieinfo/${item['tie.id']}`"
                   tag="div">
        {{item.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
import { getUserCommentList } from 'api'
export default {
  name: 'MessageHome',
  data () {
    return {
      down: false,
      commentList: []
    }
  },
  methods: {
    downAndUp () {
      this.down = !this.down
    },
    goLike () {
      this.$router.push({ path: '/message/like' })
    }
  },
  created () {
    getUserCommentList().then(({ data }) => {
      this.commentList = data.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.message-home
  width: 100%
  .like
    width: 100%
    height: 60px
    padding: 5px 15px
    display: flex
    justify-content: space-between
    border-bottom: 3px solid #eee
    &.active
      background-color: #eee
    .icon-heart
      flex: 0 0 50px
      background-image: url('../../assets/icon/heart_active.png')
      background-repeat: no-repeat
      background-size: 40px 40px
      background-position: center center
      display: block
    .like-text
      width: 100%
      font-size: 18px
      line-height: 50px
      margin-left: 20px
    .icon-right
      flex: 0 0 40px
      background-image: url('../../assets/icon/right.png')
      background-repeat: no-repeat
      background-size: 30px 30px
      background-position: center center
      display: block
  .comment-item
    width: 100%
    padding: 10px 15px
    border-bottom: 1px solid #eee
    .item-row-1
      display: flex
      justify-content: flex-start
      .item-img
        width: 50px
        height: 50px
        object-fit: cover
        border-radius: 50%
        border: 1px solid #eee
        margin-right: 20px
      .item-nickname
        line-height: 30px
        font-size: 20px
        height: 30px
      .item-time
        font-size: 14px
        color: #999
    .item-row-2
      margin-top: 5px
      padding: 10px 0
      font-size: 16px
    .item-row-3
      width: 100%
      padding: 20px 10px
      font-size: 15px
      background-color: #eee
</style>
