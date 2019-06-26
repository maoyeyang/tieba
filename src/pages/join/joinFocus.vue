<template>
  <div class="join-focus">
    <searchInput></searchInput>
  </div>
</template>

<script>
import searchInput from 'components/search/searchInput'
export default {
  name: 'JoinFocus',
  components: {
    searchInput
  }
}
</script>

<style lang="stylus" scoped>
.join-focus
  padding-top: 56px
  padding-bottom: 60px
  font-size: 20px
</style>
