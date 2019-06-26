<template>
  <router-link to="/search"
               tag='div'
               class="search-input">
    <i-input :placeholder="'大家都在搜:'+allsearch"
             style="width: 90%;margin: 10px 5%;box-shadow: 0 0 5px #D6D6D6;border-radius: 5px">
      <Icon type="ios-search"
            slot="prefix" />
    </i-input>
  </router-link>
</template>

<script>
export default {
  data () {
    return {
      allsearch: '抢着买单一人溺亡'
    }
  }
}
</script>

<style lang="stylus" scoped></style>
