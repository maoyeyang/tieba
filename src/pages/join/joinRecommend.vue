<template>
  <div class="join-recommend">
    <searchInput></searchInput>
  </div>
</template>

<script>
import searchInput from 'components/search/searchInput'
export default {
  name: 'JoinRecommend',
  components: {
    searchInput
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
