<template>
  <div class="tie">
    <Top>
      <slot>帖子</slot>
    </Top>
    <div class="tie-content">
      <div v-for="item in userTieList"
           :key="item.id"
           class="item">
        <div class="time">
          <p class="day">{{item.createdAt | dateByDay}}</p>
          <p class="month">{{item.createdAt | dateByMonth}}月</p>
        </div>
        <div class="info">
          <p class="title">{{item.ba_name}}</p>
          <p class="text">{{item.title}}</p>
        </div>
        <div class="likes">
          <div class="icon-add"
               :class="item.is_add ? 'active' : ''"
               @click="add(item.id)"></div>
          <div class="icon-collect"
               :class="item.is_collect ? 'active' : ''"
               @click="Collect(item.id)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserTieListWithAuth } from 'api/tieAPI'
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
      height: 77px
      display: flex
      justify-content: space-between
      padding: 3px 15px
      border-bottom: 1px dashed #eee
      .time
        flex: 0 0 50px
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
          font-size: 18px
          color: #888
        .text
          font-size: 18px
          max-width: 250px
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
      .likes
        flex: 0 0 35px
        div
          width: 35px
          height: 35px
          background-position: center center
          background-repeat: no-repeat
        .icon-add
          background-size: 26px 26px
          background-image: url('../../assets/icon/heart.png')
          &.active
            background-image: url('../../assets/icon/heart_active.png')
        .icon-collect
          background-size: 28px 28px
          background-image: url('../../assets/icon/star.png')
          &.active
            background-image: url('../../assets/icon/star_active.png')
</style>
