<template>
  <div class="tie">
    <Top>
      <slot>帖子</slot>
    </Top>
    <div class="tie-content">
      <router-link tag="div"
                   :to="`/tieinfo/${item.id}`"
                   v-for="item in userTieList"
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
            <span class="cmt"><span class="icon-chat"></span>{{(item.comments_count === 0) ? '回复' :item.comments_count}}</span>
            <span class="like"><span class="icon-like"></span>{{item.likes}}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getUserTieListWithAuth } from 'api'
import Top from 'components/top'
export default {
  name: 'TieList',
  data () {
    return {
      userTieList: []
    }
  },
  methods: {
    add (id) {
      this.userTieList = this.userTieList.map((item) => {
        if (item.id === id) {
          item.is_add = !item.is_add
        }
        return item
      })
    },
    Collect (id) {
      this.userTieList = this.userTieList.map((item) => {
        if (item.id === id) {
          item.is_collect = !item.is_collect
        }
        return item
      })
    }
  },
  created () {
    getUserTieListWithAuth().then(({ data }) => {
      if (data && data.statusCode === 200) {
        let List = data.data
        this.userTieList = List.map(item => {
          item.is_add = false
          item.is_collect = false
          return item
        })
      }
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
          font-size: 26px
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
        .cmt
          margin-left: 30px
          font-size: 14px
          display: flex
          line-height: 27px
          justify-content: flex-start
          .icon-chat
            background-image: url('../../assets/icon/chat.png')
            background-size: 20px 20px
            background-repeat: no-repeat
            background-position: center center
            width: 25px
            height: 25px
            display: block
        .like
          margin-right: 50px
          display: flex
          line-height: 27px
          justify-content: flex-start
          .icon-like
            background-image: url('../../assets/icon/heart.png')
            background-size: 20px 20px
            margin-right: 5px
            background-repeat: no-repeat
            background-position: center center
            width: 25px
            height: 25px
            display: block
</style>
