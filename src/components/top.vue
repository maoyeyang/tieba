<template>
  <div class="top">
    <div class="go-back"
         @click="goBack">
      <span class="icon-goback"></span>
      <span class="text-goback">返回</span>
    </div>
    <span class="top-title">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.top
  width: 100%
  height: 40px
  box-shadow: 0px 0px 3px #747474
  text-align: center
  position: fixed
  background-color: #fff
  top: 0
  left: 0
  .top-title
    margin-top: 5px
    line-height: 30px
    font-size: 22px
    font-weight: normal
    font-family: '楷体'
    display: inline-block
  .go-back
    position: absolute
    left: 0
    top: 0
    width: 80px
    height: 40px
    display: flex
    justify-content: flex-start
    .icon-goback
      width: 20px
      height: 20px
      display: inline-block
      margin-top: 10px
      margin-left: 10px
      background-image: url('../assets/icon/left-circle.png')
      background-size: cover
    .text-goback
      font-size: 16px
      width: 40px
      height: 30px
      line-height: 30px
      margin-top: 5px
      display: inline-block
</style>
