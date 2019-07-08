<template>
  <div class="mask-bottom"
       v-show="this.$store.getters.isMask">
    <div class="mask-item"
         @click="toRelease"><span class="mask-item-icon"><img src="../assets/icon/font.png" /></span><span class="mask-item-text">文字</span></div>
    <div class="mask-item"><span class="mask-item-icon"><img src="../assets/icon/camera.png" /></span><span class="mask-item-text">拍摄</span></div>
    <div class="mask-item"><span class="mask-item-icon"><img src="../assets/icon/image.png" /></span><span class="mask-item-text">相册</span></div>
    <div class="mask-item"><span class="mask-item-icon"><img src="../assets/icon/live.png" /></span><span class="mask-item-text">直播</span></div>
  </div>
</template>

<script>
export default {
  methods: {
    toRelease () {
      if (!this.$Cookies.get('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      this.$router.push({ path: '/release' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.mask-bottom
  width: 100%
  height: 260px
  position: fixed
  bottom: 0
  left: 0
  border-radius: 10px 10px 0 0
  background-color: rgba(240, 240, 240, 0.9)
  z-index: 7
  display: flex
  justify-content: space-around
  padding-top: 40px
  .mask-item
    width: 100%
    height: 100px
    text-align: center
    .mask-item-icon
      width: 60px
      height: 60px
      display: block
      margin: 0 auto
      background-color: #fff
      border-radius: 20px
      img
        width: 40px
        height: 40px
        margin: 10px auto
    .mask-item-text
      font-size: 16px
      line-height: 30px
</style>
