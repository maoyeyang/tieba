<template>
  <div class="join-recommend">
    <searchInput></searchInput>
    <recommendInterest></recommendInterest>
  </div>
</template>

<script>
import searchInput from 'components/input/searchInput'
import recommendInterest from 'components/join/recommendInterest'
export default {
  name: 'JoinRecommend',
  components: {
    searchInput,
    recommendInterest
  }
}
</script>

<style lang="stylus" scoped>
.join-recommend
  padding-top: 56px
  padding-bottom: 60px
  font-size: 20px
  background-color: #F3F3F3
</style>
