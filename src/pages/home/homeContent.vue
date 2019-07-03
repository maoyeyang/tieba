<template>
  <div class="home-content">
    <TieItem :tieInfo="tieInfo"
             :hiddenBa="hiddenBa"></TieItem>
  </div>
</template>

<script>
import TieItem from 'components/tie/tieItem'
export default {
  name: 'HomeContent',
  data () {
    return {
      tieInfo: {
        id: 1,
        avatar_url: 'http://192.168.43.114:3000/images/user_images/avatar_default.png',
        avatar_url1: 'http://192.168.43.114:3000/images/user_images/avatar_1.jpeg',
        commentsCount: 99,
        avatar_url2: 'http://192.168.43.114:3000/images/user_images/avatar_2.jpeg',
        nickname: 'adadawdada',
        title: '我要玩部落冲突',
        ba_id: 33,
        user_id: 3,
        ba_name: '部落冲突',
        likes: 23,
        type: true,
        content: '我要玩部落冲突 我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部我要玩部落冲突 我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突 我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突 我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突落冲突我要玩部落冲突我要玩部落冲突我要玩部落冲突'
      },
      hiddenBa: false
    }
  },
  components: {
    TieItem
  }
}
</script>

<style lang="stylus" scoped>
.home-content
  width: 100%
  padding-top: 56px
  padding-bottom: 60px
  font-size: 20px
</style>
