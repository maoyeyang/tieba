<template>
  <div class="search">
    <div class="search-top">
      <span class="search-icon"
            @click="search"></span>
      <input class="search-input"
             :placeholder="'大家都在搜:'+allsearch"
             v-model="searchInput"
             @keyup.enter="search" />
      <span class="search-cancel"
            @click="goBack">取消</span>
    </div>
    <Progress :percent="percent"
              :stroke-width="2"
              hide-info
              v-show="isProgress"
              class="progress" />
    <div v-for="(item,i) in searchHistory"
         :key="i"
         class="search-item">
      <span class="search-item-icon"></span>
      <span class="search-item-message">{{item.message}}</span>
      <span class="search-item-delete"
            @click="deleteSearchHistory(i)">×</span>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      allsearch: '抢着买单一人溺亡',
      percent: 0,
      isProgress: true,
      searchHistory: [{ message: '前端' }],
      searchInput: ''
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
      this.$store.dispatch('showTabbar')
    },
    search () {
      let searchHistory = this.searchHistory
      if (this.searchInput.trim() === '') {
        this.searchInput = ''
        return
      }
      if (searchHistory.length > 9) {
        searchHistory.pop()
      }
      searchHistory.unshift({ message: this.searchInput })
      this.searchInput = ''
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
    },
    deleteSearchHistory (i) {
      this.searchHistory.splice(i, 1)
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory))
    }
  },
  created () {
    this.$store.dispatch('hiddenTabbar')
    const timeID = setInterval(() => {
      this.percent += 10
      if (this.percent === 130) {
        clearInterval(timeID)
        this.isProgress = false
      }
    }, 100)
    if (localStorage.getItem('searchHistory')) {
      this.searchHistory = JSON.parse(localStorage.getItem('searchHistory'))
    }
  }
}
</script>

<style lang="stylus" scoped>
.search
  background-color: #fff
  .search-top
    width: 100%
    height: 40px
    display: flex
    justify-content: space-between
    background-color: #fff
    border-bottom: 1px solid #F2F5F3
    .search-icon
      width: 35px
      height: 30px
      margin: 5px 0 0 5px
      background-size: cover
      background-image: url('../assets/icon/search.png')
    .search-input
      width: 100%
      height: 38px
      margin: 1px 0 0 15px
      border: none
      outline: none
      font-size: 16px
      line-height: 40px
      caret-color: #1D89F0
    .search-cancel
      width: 70px
      height: 30px
      margin: 5px 0 0 5px
      line-height: 30px
      color: #1D89F0
      font-size: 16px
      padding: 0 15px 0 5px
      text-align: center
  .progress
    position: fixed
    top: 30px
    left: 0
  .search-item
    width: 90%
    margin: 5px 5% 0px 5%
    height: 30px
    background-color: #fff
    line-height: 25px
    display: flex
    justify-content: space-between
    border-bottom: 1px solid #E8E8E8
    .search-item-icon
      background-image: url('../assets/icon/time-circle.png')
      height: 20px
      width: 23px
      margin: 2px 0 0 5px
      background-size: cover
    .search-item-message
      width: 100%
      padding-left: 10px
      font-size: 16px
    .search-item-delete
      font-size: 16px
      padding: 0 10px
  .line
    width: 100%
    height: 7px
    background-color: #F9F6F8
</style>
