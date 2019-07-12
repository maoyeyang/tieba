<template>
  <div class="focuslist">
    <Top>
      <slot>我关注的人</slot>
    </Top>
    <div class="fix-option">
      <span>全部关注{{focusList.length}}人</span>
      <Dropdown @on-click="changeMenu"
                trigger="click">
        <a href="javascript:void(0)"
           v-html='this.MenuText'
           style="color: #A09F9F">
          全部关注
        </a>
        <Icon type="ios-arrow-down"></Icon>
        <DropdownMenu slot="list"
                      style="color: #A09F9F">
          <DropdownItem name="all">全部关注</DropdownItem>
          <DropdownItem name="mutual">互相关注</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    <div class="focus-content">
      <router-link :to="`/userinfo/${item.id}`"
                   v-for="(item,i) in focusListByValue"
                   :key="item.id"
                   tag="div"
                   class="focus-item">
        <div class="focus-left">
          <img class="focus-img"
               :src="item.avatar_url">
          <div class="focus-info">
            <p class="focus-title">{{item.nickname}}</p>
            <p class="focus-text">{{item.introduction}}</p>
          </div>
        </div>
        <button class="focus-button"
                :ref="'button-'+i"
                @touchstart.stop.prevent='addactive(`button-${i}`)'
                @touchend.stop.prevent='rmactive(`button-${i}`,item.id)'>{{item.mutual ? '互相关注':'已关注'}}</button>
      </router-link>
    </div>
    <div class="focus-bottom"
         v-show="this.$store.getters.isMask">
      <p class="bottom-text">确定不再关注此人?</p>
      <p class="bottom-option"
         @click="removeFocus">确定</p>
      <p class="bottom-option"
         @click="cancel">取消</p>
    </div>
  </div>
</template>

<script>
import { getUserFocusListWithAuth, reomveFocusWithAuth } from 'api'
import Top from 'components/top'
export default {
  name: 'FocusList',
  data () {
    return {
      focusList: {},
      MenuText: '全部关注',
      id: 0
    }
  },
  computed: {
    focusListByValue () {
      if (this.MenuText === '全部关注') { return this.focusList }
      if (this.MenuText === '互相关注') {
        return this.focusList.filter(item => {
          return item.mutual
        })
      }
    }
  },
  methods: {
    removeFocus () {
      reomveFocusWithAuth({ focus_id: this.id }).then(({ data }) => {
        this.$Message.success('取消关注成功')
        this.focusList = this.focusList.filter(item => item.id !== this.id)
      })
      this.$store.dispatch('hiddenMask')
    },
    cancel () {
      this.$store.dispatch('hiddenMask')
    },
    changeMenu (name) {
      if (name === 'all') {
        this.MenuText = '全部关注'
      }
      if (name === 'mutual') {
        this.MenuText = '互相关注'
      }
    },
    getAllAndCountByFocus () {
      getUserFocusListWithAuth().then(({ data }) => {
        this.focusList = data.data
      })
    },
    addactive (name) {
      this.$refs[name][0].classList.add('active')
    },
    rmactive (name, id) {
      this.$refs[name][0].classList.remove('active')
      this.id = id
      this.$store.dispatch('showMask')
    }
  },
  components: {
    Top
  },
  created () {
    this.getAllAndCountByFocus()
  }
}
</script>

<style lang="stylus" scoped>
.focuslist
  width: 100%
  .fix-option
    position: fixed
    height: 35px
    line-height: 35px
    padding: 0 15px
    font-size: 14px
    background-color: #fff
    width: 100%
    top: 42px
    left: 0
    display: flex
    justify-content: space-between
    color: #A09F9F
  .focus-content
    width: 100%
    height: 100%
    padding: 80px 0 0 0
    .focus-item
      height: 66px
      width: 100%
      display: flex
      justify-content: space-between
      border-bottom: 1px solid #D2D2D2
      padding: 10px 15px
      touch-action: none
      &:active
        background-color: #D2D2D2
      .focus-left
        display: flex
        justify-content: flex-start
        .focus-img
          flex: 0 0 45px
          height: 45px
          border-radius: 50%
          border: 1px solid #eee
          object-fit: cover
        .focus-info
          margin-left: 15px
          font-size: 16px
          margin-top: 3px
        .focus-text
          font-size: 12px
          color: #A5A5A5
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          max-width: 200px
      .focus-button
        flex: 0 0 60px
        outline: none
        border: 1px solid #A5A5A5
        border-radius: 5px
        margin-top: 8px
        height: 29px
        width: 60px
        display: block
        background-color: transparent
        color: #A5A5A5
        line-height: 29px
        &.active
          background-color: #A5A5A5
          color: #ffffff
  .focus-bottom
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
