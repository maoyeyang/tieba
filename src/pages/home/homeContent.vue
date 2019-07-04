<template>
  <div class="home-content">
    <div ref="srcoll"
         class="home-swiper">
      <div>
        <TieItem :tieInfo="item"
                 :id="item.id"
                 :hiddenBa="hiddenBa"
                 v-for="item in tieInfoList"
                 :key="item.id"></TieItem>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { getTieList } from 'api/tieAPI'
import TieItem from 'components/tie/tieItem'
export default {
  name: 'HomeContent',
  data () {
    return {
      tieInfoList: [],
      hiddenBa: true
    }
  },
  methods: {
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs['srcoll'], {
          click: true,
          scrollY: true
        })
        this.scroll.on('touchEnd', (pos) => {
          if (pos.y > 120) {
          }
        })
      })
    }
  },
  created () {
    getTieList().then(({ data }) => {
      if (data && data.statusCode === 200) {
        this.tieInfoList = data.data
        this.initScroll()
      }
    })
  },
  components: {
    TieItem
  }
}
</script>

<style lang="stylus" scoped>
.home-content
  width: 100%
  height: 100vh
  padding-top: 56px
  padding-bottom: 60px
  font-size: 20px
  .home-swiper
    height: 100%
    overflow: hidden
</style>
