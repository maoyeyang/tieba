<template>
  <div class="focus-ba">
    <div class="focus-ba-top">
      <h3 class="focus-ba-top-title">关注的吧</h3>
      <span class="focus-ba-top-right"
            @click="changeList"
            ref="changeList">{{sortName}}<span class="focus-ba-top-icon"></span></span>
    </div>
    <div class="focus-ba-content">
      <div class="focus-ba-item"
           v-for="(item, i) in focusbaList"
           :key="i">
        <img class="focus-ba-img"
             :src="item.theme_url">
        <div class="focus-ba-info">
          <p class="focus-ba-name">{{item.ba_name}}
            <span class="focus-ba-level"
                  :class="[levelarr[i] > 9 ? 'level-red' :(levelarr[i] > 3 ? 'level-blue' :'level-cyan')]">{{levelarr[i]}}</span></p>
          <p class="focus-ba-des">{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { levelByEXP } from '../../common/methods'
export default {
  data () {
    return {
      focusbaList: [],
      levelarr: [],
      sortName: '等级排序'
    }
  },
  methods: {
    getFocusBaList () {
      this.$http.get('/auth/focusbalist').then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.focusbaList = data.data
          this.levelarr = data.data.map((item) => { return levelByEXP(item.exp) })
        } else {
          this.$Message.error('登录认证失败')
        }
      })
    },
    changeList () {
      if (this.sortName === '等级排序') {
        this.sortName = '更新排序'
        return
      }
      this.sortName = '等级排序'
      this.focusbaList.sort(function (a, b) {
        return b.exp - a.exp
      })
      this.levelarr = this.focusbaList.map((item) => { return levelByEXP(item.exp) })
    }
  },
  created () {
    this.getFocusBaList()
  }
}
</script>

<style lang="stylus" scoped>
.focus-ba
  width: 94%
  margin: 10px 3%
  .focus-ba-top
    width: 100%
    display: flex
    justify-content: space-between
    .focus-ba-top-title
      font-size: 16px
      font-weight: normal
    .focus-ba-top-title
      font-size: 16px
      font-weight: normal
    .focus-ba-top-right
      display: flex
      justify-content: flex-start
      font-size: 12px
      line-height: 24px
      .focus-ba-top-icon
        background-image: url('../../assets/icon/down.png')
        width: 20px
        height: 24px
        display: block
        background-size: 13px 13px
        background-position: center center
        background-repeat: no-repeat
  .focus-ba-content
    width: 100%
    margin-top: 10px
    .focus-ba-item
      width: 100%
      display: flex
      padding: 4px 0
      .focus-ba-img
        width: 45px
        height: 45px
        border-radius: 50%
        margin-right: 10px
      .focus-ba-info
        .focus-ba-name
          font-size: 14px
          display: flex
          line-height: 25px
          justify-content: flex-start
          .focus-ba-level
            padding: 3px 6px
            margin-left: 5px
            line-height: 12px
            text-align: center
            font-size: 8px
            display: block
            color: #fff
            width: 25px
            height: 25px
            background-size: cover
            &.level-red
              background-image: url('../../assets/icon/jewel-red.png')
            &.level-blue
              background-image: url('../../assets/icon/jewel-blue.png')
            &.level-cyan
              background-image: url('../../assets/icon/jewel-cyan.png')
        .focus-ba-des
          font-size: 12px
          color: #C4C1C2
</style>
