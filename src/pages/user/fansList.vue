<template>
  <div class="fanslist">
    <Top>
      <slot>我的粉丝</slot>
    </Top>
    <div class="fans-content">
      <router-link :to="`/${item.id}/userinfo`"
                   v-for="(item,i) in fansList"
                   :key="item.id"
                   tag="div"
                   class="fans-item">
        <div class="fans-left">
          <img class="fans-img"
               :src="item.avatar_url">
          <div class="fans-info">
            <p class="fans-title">{{item.nickname}}</p>
            <p class="fans-text">{{item.introduction}}</p>
          </div>
        </div>
        <button class="fans-button"
                :ref="'button-'+i"
                :class="!item.mutual ? 'blue':'null'"
                @touchstart.stop.prevent='addactive(`button-${i}`)'
                @touchend.stop.prevent='rmactive(`button-${i}`,item.id,item.mutual)'>{{item.mutual ? '互相关注':'+ 关注'}}</button>
      </router-link>
    </div>
    <div class="fans-bottom"
         v-show="this.$store.getters.isMask">
      <p class="bottom-text">确定不再关注此人?</p>
      <p class="bottom-option"
         @click="removeFans">确定</p>
      <p class="bottom-option"
         @click="cancel">取消</p>
    </div>
  </div>
</template>

<script>
import Top from 'components/top'
export default {
  name: 'FansList',
  data () {
    return {
      fansList: {},
      id: 0
    }
  },
  methods: {
    removeFans () {
      this.$http.post('/auth/reomvefocus', { focus_id: this.id }).then(({ data }) => {
        if (data.statusCode === 200) {
          this.fansList = this.fansList.map(item => {
            if (item.id === this.id) {
              item.mutual = false
            }
            return item
          })
          return this.$Message.success('取消关注成功')
        } else {
          return this.$Message.error('取消关注失败')
        }
      })
      this.$store.dispatch('hiddenMask')
    },
    cancel () {
      this.$store.dispatch('hiddenMask')
    },
    getAllAndCountByFans () {
      this.$http.get('/auth/fanslist').then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.fansList = data.data
        } else {
          this.$message.error('资源获取失败')
        }
      })
    },
    addactive (name) {
      this.$refs[name][0].classList.add('active')
    },
    rmactive (name, id, mutual) {
      if (mutual) {
        this.$refs[name][0].classList.remove('active')
        this.id = id
        this.$store.dispatch('showMask')
      } else {
        this.id = id
        this.$http.post('/auth/addfocus', { focus_id: id }).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.fansList = this.fansList.map(item => {
              if (item.id === this.id) {
                item.mutual = true
              }
              return item
            })
            return this.$Message.success('关注成功')
          } else {
            return this.$Message.error('关注失败')
          }
        })
      }
    }
  },
  components: {
    Top
  },
  created () {
    this.getAllAndCountByFans()
  }
}
</script>

<style lang="stylus" scoped>
.fanslist
  width: 100%
  .fans-content
    width: 100%
    height: 100%
    padding: 42px 0 0 0
    .fans-item
      height: 66px
      width: 100%
      display: flex
      justify-content: space-between
      border-bottom: 1px solid #D2D2D2
      padding: 10px 15px
      touch-action: none
      &:active
        background-color: #D2D2D2
      .fans-left
        display: flex
        justify-content: flex-start
        .fans-img
          flex: 0 0 45px
          height: 45px
          object-fit: cover
        .fans-info
          margin-left: 15px
          font-size: 16px
          margin-top: 3px
        .fans-text
          font-size: 12px
          color: #A5A5A5
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          max-width: 200px
      .fans-button
        flex: 0 0 60px
        outline: none
        border-radius: 5px
        margin-top: 8px
        height: 29px
        width: 60px
        display: block
        background-color: transparent
        line-height: 29px
        &.blue
          color: blue
          border: 1px solid blue
          &.active
            background-color: blue
            color: #ffffff
        &.null
          color: #A5A5A5
          border: 1px solid #A5A5A5
          &.active
            background-color: #A5A5A5
            color: #ffffff
  .fans-bottom
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 110px
    background-color: #fff
    z-index: 7
    text-align: center
    border-radius: 5px 5px 0 0
    .bottom-text
      font-size: 16px
      width: 100%
      line-height: 30px
      color: #959595
      height: 30px
    .bottom-option
      width: 100%
      height: 40px
      line-height: 40px
      font-size: 16px
</style>
