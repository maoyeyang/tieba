<template>
  <div class="home-content">
    <div ref="srcoll"
         class="home-swiper">
      <div>
        <TieItem :tieInfo="item"
                 :hiddenBa="hiddenBa"
                 v-for="item in tieInfoList"
                 :key="item.id"></TieItem>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { getTieList } from 'api'
import TieItem from 'components/tie/tieItem'
export default {
  name: 'HomeContent',
  data () {
    return {
      tieInfoList: [],
      hiddenBa: true
    }
  },
  computed: {
    refreshData () {
      return this.$store.getters.refreshData
    }
  },
  watch: {
    refreshData: function (newVal) {
      if (newVal) {
        this.initData()
        this.scroll.refresh()
        this.scroll.scrollTo(0, 0, 300)
        this.$store.commit('updateRefreshData', false)
        this.$store.commit('updateRefreshStatus', false)
      }
    }
  },
  methods: {
    initScroll () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs['srcoll'], {
          click: true,
          scrollY: true,
          probeType: 3
        })
        this.scroll.on('touchEnd', (pos) => {
          if (pos.y > 100) {
            this.initData()
          }
        })
        this.scroll.on('scroll', (pos) => {
          if (pos.y < 0 && !this.$store.getters.isScroll) {
            this.$store.commit('updateScrollStatus', true)
          }
          if (pos.y >= 0 && this.$store.getters.isScroll) {
            this.$store.commit('updateScrollStatus', false)
          }
          if (pos.y < -500 && !this.$store.getters.isRefresh) {
            this.$store.commit('updateRefreshStatus', true)
          }
          if (pos.y >= -500 && this.$store.getters.isRefresh) {
            this.$store.commit('updateRefreshStatus', false)
          }
        })
      })
    },
    initData () {
      getTieList().then(({ data }) => {
        this.tieInfoList = data.data
        this.initScroll()
      })
    }
  },
  created () {
    this.initData()
    this.$store.commit('updateScrollStatus', false)
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
