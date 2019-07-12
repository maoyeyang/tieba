<template>
  <div class="rec-int">
    <div class="rec-int-top">
      <h3 class="rec-int-title">你的兴趣我懂的</h3>
      <span class="rec-int-span"
            @click="change">换一批</span>
    </div>
    <div class="rec-int-content">
      <router-link :to="`/bainfo/${item.id}`"
                   tag="div"
                   v-for="(item,i) in tiebaListBy4"
                   :key="i"
                   class="rec-int-item">
        <img class="rec-int-item-img"
             :src="item.theme_url" />
        <p class="rec-int-item-title">{{item.ba_name}}</p>
        <p class="rec-int-item-info">关注:{{item.fans_count | numberByW}}&nbsp;&nbsp;
          帖子:{{item.tie_count | numberByW}}</p>
        <p class="rec-int-item-des">{{item.description}}</p>
        <span class="rec-int-item-focus"
              :class="item.isFocus ? 'focus':''"
              @click.stop.prevent="focusba(item.id)">{{item.isFocus?'已关注':'关注'}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { addFocusBaWithAuth, getTiebaList } from 'api'
export default {
  data () {
    return {
      tiebaList: []
    }
  },
  computed: {
    tiebaListBy4 () {
      return this.tiebaList.slice(0, 4)
    }
  },
  methods: {
    focusba (id) {
      if (!this.$Cookies.get('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      if (this.tiebaList.some(item => (item.id === id && item.isFocus === true))) {
        return
      }
      addFocusBaWithAuth({ ba_id: id }).then(({ data }) => {
        this.tiebaList = this.tiebaList.map((item) => {
          if (item.id === id) {
            item.isFocus = true
            item.fans_count = ++item.fans_count
          }
          return item
        })
        this.$Message.success(data.message)
      })
    },
    getTiebaList () {
      getTiebaList().then(({ data }) => {
        this.tiebaList = data.data
      })
    },
    change () {
      const list1 = this.tiebaList.slice(0, 4)
      const list2 = this.tiebaList.slice(4)
      this.tiebaList = list2.concat(list1)
    }
  },
  created () {
    this.getTiebaList()
  }
}
</script>

<style lang="stylus" scoped>
.rec-int
  width: 94%
  margin: 10px 3%
  .rec-int-top
    width: 100%
    display: flex
    justify-content: space-between
    font-size: 20px
    padding: 0 10px
    .rec-int-title
      font-size: 14px
      font-weight: normal
    .rec-int-span
      font-size: 12px
  .rec-int-content
    width: 100%
    display: flex
    justify-content: space-around
    flex-direction: row
    flex-wrap: wrap
    .rec-int-item
      margin-top: 10px
      width: 46%
      background-color: #fff
      border-radius: 10px
      text-align: center
      box-shadow: 0 0 5px #C0C0C0
      .rec-int-item-img
        width: 65px
        height: 65px
        margin-top: 20px
        border-radius: 20px
      .rec-int-item-title
        font-size: 14px
      .rec-int-item-info
        font-size: 10px
        color: #ACACAB
      .rec-int-item-des
        font-size: 12px
        padding: 0 15px
        height: 36px
        line-height: 18px
        margin: 3px 0
      .rec-int-item-focus
        margin: 15px auto 20px
        display: block
        width: 70px
        height: 28px
        font-size: 14px
        border: 1px solid #158AF8
        border-radius: 5px
        line-height: 28px
        color: #158AF8
        &.focus
          border: none
          color: #bbbbbb
</style>
