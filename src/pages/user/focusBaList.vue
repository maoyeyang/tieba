<template>
  <div class="focusba">
    <div class="top">
      <div class="go-back"
           @click="goBack">
        <span class="icon-goback"></span>
        <span class="text-goback">返回</span>
      </div>
      <span class="top-title">
        我关注的吧
      </span>
      <span class="top-right"
            @click="edit">{{!isEdit ? '编辑' :'完成'}}</span>
    </div>
    <div class="focusba-content">
      <router-link tag="div"
                   :to='`/bainfo/${item.id}`'
                   class="item"
                   v-for="(item,i) in focusBaList"
                   :key="i">
        <img class="img"
             :src="item.theme_url">
        <div class="center">
          <p class="name">{{item.ba_name}}吧
            <span class="level"
                  :class="[levelarr[i] > 9 ? 'level-red' :(levelarr[i] > 3 ? 'level-blue' :'level-cyan')]">
              {{levelarr[i]}}
            </span>
          </p>
          <p class="exp">经验 {{item.exp}}/{{item.expByMax}}</p>
        </div>
        <div v-show="isEdit"
             class="delete"
             @click.stop.prevent="deleteById(item.id)">删除</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getFocusBaListWithAuth, reomveFocusBaWithAuth } from 'api'
import { levelByEXP, EXPByMax } from 'common/methods'
export default {
  name: 'FocusBaList',
  data () {
    return {
      focusBaList: [],
      levelarr: [],
      isEdit: false
    }
  },
  methods: {
    deleteById (id) {
      reomveFocusBaWithAuth({ ba_id: id }).then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.focusBaList = this.focusBaList.filter((item) => item.id !== id)
          this.$Message.success('成功取关该贴吧')
        } else {
          this.$Message.error('取关贴吧失败')
        }
      })
    },
    edit () {
      this.isEdit = !this.isEdit
    },
    goBack () {
      this.$router.go(-1)
    },
    getFocusBaList () {
      getFocusBaListWithAuth().then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.focusBaList = data.data.map((item) => {
            item.expByMax = EXPByMax(item.exp)
            return item
          })
          this.levelarr = data.data.map((item) => { return levelByEXP(item.exp) })
        } else {
          this.$Message.error('登录认证失败')
        }
      })
    }
  },
  created () {
    this.getFocusBaList()
  }
}
</script>

<style lang="stylus" scoped>
.focusba
  .top
    width: 100%
    height: 40px
    box-shadow: 0px 0px 3px #747474
    text-align: center
    position: fixed
    background-color: #fff
    display: flex
    justify-content: space-between
    top: 0
    left: 0
    .top-title
      margin-top: 5px
      line-height: 30px
      font-size: 22px
      font-weight: normal
      font-family: '楷体'
      display: inline-block
    .go-back
      width: 80px
      height: 40px
      display: flex
      justify-content: flex-start
      .icon-goback
        width: 20px
        height: 20px
        display: inline-block
        margin-top: 10px
        margin-left: 10px
        background-image: url('../../assets/icon/left-circle.png')
        background-size: cover
      .text-goback
        font-size: 16px
        width: 40px
        height: 30px
        line-height: 30px
        margin-top: 5px
        display: inline-block
    .top-right
      width: 80px
      font-size: 18px
      color: #2A91FF
      height: 40px
      line-height: 40px
  .focusba-content
    width: 100%
    height: 100%
    padding-top: 42px
    .item
      width: 100%
      padding: 7px 15px
      display: flex
      justify-content: space-between
      border-bottom: 1px solid #C1C2C2
      &:active
        background-color: #CBCBCB
      .img
        width: 45px
        height: 45px
      .center
        width: 100%
        margin-left: 15px
        .name
          font-size: 16px
          display: flex
          justify-content: flex-start
          .level
            display: block
            margin-left: 10px
            width: 24px
            height: 20px
            margin-top: 2px
            background-size: 24px 20px
            text-align: center
            font-size: 10px
            line-height: 18px
            color: #fff
            &.level-red
              background-image: url('../../assets/icon/jewel-red.png')
            &.level-blue
              background-image: url('../../assets/icon/jewel-blue.png')
            &.level-cyan
              background-image: url('../../assets/icon/jewel-cyan.png')
        .exp
          font-size: 12px
          color: #5D5D5D
      .delete
        flex: 0 0 50px
        text-align: center
        height: 25px
        margin-top: 10px
        line-height: 25px
        border-radius: 5px
        color: #fff
        background-color: red
</style>
