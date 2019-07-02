<template>
  <div class="focus-ba">
    <div class="focus-ba-top">
      <h3 class="focus-ba-top-title">关注的吧</h3>
      <Dropdown @on-click="changeMenu"
                trigger="click"
                class="focus-ba-top-right">
        <a href="javascript:void(0)"
           v-html='this.MenuText'
           style="color: #A09F9F">
          普通排序
        </a>
        <Icon type="ios-arrow-down"></Icon>
        <DropdownMenu slot="list"
                      style="color: #A09F9F">
          <DropdownItem name="normal">普通排序</DropdownItem>
          <DropdownItem name="level">等级排序</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="focus-ba-content">
      <div class="focus-ba-item"
           v-for="(item, i) in focusbaListByType"
           :key="i">
        <img class="focus-ba-img"
             :src="item.theme_url">
        <div class="focus-ba-info">
          <p class="focus-ba-name">{{item.ba_name}}
            <span class="focus-ba-level"
                  :class="[item.level > 10 ? 'level-red' :(item.level > 5 ? 'level-blue' :'level-cyan')]">{{item.level}}</span></p>
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
      MenuText: '普通排序'
    }
  },
  computed: {
    focusbaListByType () {
      if (this.focusbaList === []) {
        return null
      }
      let list = this.focusbaList
      list = list.map((item) => {
        item.level = levelByEXP(item.exp)
        return item
      })
      if (this.MenuText === '等级排序') {
        list.sort(function (a, b) {
          return b.exp - a.exp
        })
        return list
      }
      return list
    }
  },
  methods: {
    getFocusBaList () {
      this.$http.get('/auth/focusbalist').then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.focusbaList = data.data
        } else {
          this.$Message.error('登录认证失败')
        }
      })
    },
    changeMenu (name) {
      if (name === 'normal') {
        this.MenuText = '普通排序'
      }
      if (name === 'level') {
        this.MenuText = '等级排序'
      }
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
      font-size: 14px
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
            margin-top: 2px
            line-height: 15px
            text-align: center
            font-size: 10px
            display: block
            color: #fff
            width: 24px
            height: 20px
            background-size: 24px 20px
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
