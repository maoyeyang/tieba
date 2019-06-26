<template>
  <div class="focus-ba">
    <div class="focus-ba-top">
      <h3 class="focus-ba-top-title">关注的吧</h3>
      <span class="focus-ba-top-right">等级排序<span class="focus-ba-top-icon"></span></span>
    </div>
    <div class="focus-ba-content">
      <div class="focus-ba-item"
           v-for="(item, i) in focusbaList"
           :key="i">
        <img class="focus-ba-img"
             :src="item.src">
        <div class="focus-ba-info">
          <p class="focus-ba-name">{{item.name}}<span></span></p>
          <p class="focus-ba-des">{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      focusbaList: [{
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }, {
        src: require('../../assets/images/img1.png'),
        name: '少年三国志',
        description: '好看的帖子千千万万,有趣的灵魂就差你'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.focus-ba
  width: 94%
  margin: 10px 3%
  .focus-ba-top
    width: 100%
    display: flex
    justify-content: space-between
    .focus-ba-top-title
      font-size: 16px
      font-weight: normal
    .focus-ba-top-title
      font-size: 16px
      font-weight: normal
    .focus-ba-top-right
      display: flex
      justify-content: flex-start
      font-size: 12px
      line-height: 24px
      .focus-ba-top-icon
        background-image: url('../../assets/icon/down.png')
        width: 20px
        height: 24px
        display: block
        background-size: 13px 13px
        background-position: center center
        background-repeat: no-repeat
  .focus-ba-content
    width: 100%
    margin-top: 10px
    .focus-ba-item
      width: 100%
      display: flex
      padding: 8px 0
      .focus-ba-img
        width: 40px
        height: 40px
        border-radius: 50%
        margin-right: 10px
      .focus-ba-info
        padding-top: 3px
        .focus-ba-name
          font-size: 14px
        .focus-ba-des
          font-size: 12px
          color: #C4C1C2
</style>
