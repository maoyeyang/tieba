<template>
  <div class="tie">
    <Top>
      <slot>帖子</slot>
    </Top>
    <div class="tie-content">
      <router-link tag="div"
                   :to="`/tieinfo/${item.id}`"
                   v-for="(item,i) in userTieList"
                   :key="item.id"
                   class="item">
        <div class="time">
          <p class="day">{{item.createdAt | dateByDay}}</p>
          <p class="month">{{item.createdAt | dateByMonth}}月</p>
        </div>
        <div>
          <div class="info">
            <p class="title">{{item.ba_name}}</p>
            <p class="text">{{item.title}}</p>
          </div>
          <div class="item-bottom">
            <span class="collect"
                  @click.stop.prevent="collect(i)">
              <span class="icon-collect"
                    :class="item.isCollect ? 'active':''"></span>
              收藏
            </span>
            <span class="cmt">
              <span class="icon-chat"></span>
              {{(item.comments_count === 0) ? '回复' :item.comments_count}}
            </span>
            <span class="like"
                  @click.stop.prevent="like(i)">
              <span class="icon-like"
                    :class="item.isLike ? 'active':''"></span>
              {{item.likes}}
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getUserTieListWithAuth, likeTieWithAuth, collectTieWithAuth, removeCollectTieWithAuth, unLikeTieWithAuth } from 'api'
import Top from 'components/top'
export default {
  name: 'TieList',
  data () {
    return {
      userTieList: []
    }
  },
  methods: {
    collect (i) {
      if (this.userTieList[i].isCollect) {
        removeCollectTieWithAuth(this.userTieList[i].id).then(() => {
          this.userTieList[i].isCollect = false
        })
      } else {
        collectTieWithAuth(this.userTieList[i].id).then(() => {
          this.userTieList[i].isCollect = true
        })
      }
    },
    like (i) {
      if (this.userTieList[i].isLike) {
        unLikeTieWithAuth(this.userTieList[i].id).then(() => {
          this.userTieList[i].isLike = false
          this.userTieList[i].likes -= 1
        })
      } else {
        likeTieWithAuth(this.userTieList[i].id).then(() => {
          this.userTieList[i].isLike = true
          this.userTieList[i].likes += 1
        })
      }
    }
  },
  created () {
    getUserTieListWithAuth().then(({ data }) => {
      this.userTieList = data.data
    })
  },
  components: {
    Top
  }
}
</script>

<style lang="stylus" scoped>
.tie
  .tie-content
    width: 100%
    height: 100%
    padding-top: 42px
    .item
      width: 100%
      height: 90px
      display: grid
      grid-template-columns: 50px auto
      padding: 3px 15px
      border-bottom: 1px dashed #eee
      .time
        text-align: center
        .day
          margin-top: 5px
          font-size: 30px
        .month
          font-size: 16px
          color: #888
      .info
        width: 100%
        .title
          margin-top: 8px
          font-size: 14px
          color: #888
        .text
          font-size: 18px
          width: 80vw
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
      .item-bottom
        font-size: 14px
        display: flex
        justify-content: space-between
        .collect
          display: flex
          font-size: 14px
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
        .cmt
          font-size: 14px
          display: flex
          line-height: 30px
          justify-content: flex-start
          .icon-chat
            background-image: url('../../assets/icon/chat.png')
            background-size: 25px 25px
            background-repeat: no-repeat
            background-position: center center
            width: 30px
            height: 30px
            display: block
        .like
          margin-right: 50px
          display: flex
          font-size: 14px
          line-height: 30px
          justify-content: flex-start
          .icon-like
            background-image: url('../../assets/icon/heart.png')
            background-size: 25px 25px
            margin-right: 5px
            background-repeat: no-repeat
            background-position: center center
            width: 30px
            height: 30px
            display: block
            &.active
              background-image: url('../../assets/icon/heart_active.png')
</style>
