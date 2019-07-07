<template>
  <div class="like">
    <Top>点赞</Top>
    <div class="like-content">
      <div class="like-item"
           v-for="item in likeList"
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
          赞了我的帖子
        </div>
        <router-link class="item-row-3"
                     :to="`/tieinfo/${item['tie.id']}`"
                     tag="div">
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Top from 'components/top'
import { getLikeList } from 'api'
export default {
  name: 'Like',
  data () {
    return {
      likeList: []
    }
  },
  components: {
    Top
  },
  created () {
    getLikeList().then(({ data }) => {
      if (data && data.statusCode === 200) {
        this.likeList = data.data
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.like
  .like-content
    width: 100%
    padding-top: 41px
    .like-item
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
