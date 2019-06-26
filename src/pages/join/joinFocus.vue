<template>
  <div class="join-focus">
    <searchInput></searchInput>
    <newWatch v-if="isLogin"></newWatch>
    <focusBa v-if="isLogin"></focusBa>
    <noLogin v-if="!isLogin"></noLogin>
  </div>
</template>

<script>
import searchInput from 'components/search/searchInput'
import newWatch from 'components/join/newWatch'
import focusBa from 'components/join/focusBa'
import noLogin from 'components/join/noLogin'
export default {
  name: 'JoinFocus',
  data () {
    return {
      isLogin: true
    }
  },
  components: {
    searchInput,
    newWatch,
    focusBa,
    noLogin
  }
}
</script>

<style lang="stylus" scoped>
.join-focus
  padding-top: 56px
  padding-bottom: 60px
  font-size: 20px
</style>
