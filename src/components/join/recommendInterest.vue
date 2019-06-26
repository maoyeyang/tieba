<template>
  <div class="rec-int">
    <div class="rec-int-top">
      <h3 class="rec-int-title">你的兴趣我懂的</h3>
      <span class="rec-int-span">换一批</span>
    </div>
    <ul class="rec-int-content">
      <li v-for="(item,i) in tiebaListBy4"
          :key="i"
          class="rec-int-item">
        <img class="rec-int-item-img"
             :src="item.src" />
        <p class="rec-int-item-title">{{item.name}}</p>
        <p class="rec-int-item-info">关注:{{item.fans}}&nbsp;&nbsp;&nbsp;帖子:{{item.post}}</p>
        <p class="rec-int-item-des">{{item.description}}</p>
        <span class="rec-int-item-focus">关注</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tiebaListBy4: [{
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        fans: '87.8W',
        post: '37.6W',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        fans: '87.8W',
        post: '37.6W',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        fans: '87.8W',
        post: '37.6W',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        fans: '87.8W',
        post: '37.6W',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }],
      tiebaList: []
    }
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
    list-style: none
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
</style>
