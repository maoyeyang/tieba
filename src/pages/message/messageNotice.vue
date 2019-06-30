<template>
  <div>
    <img class="img-blue"
         src="../../assets/images/blue_bg.png" />
    <p class="text">暂时没有系统通知</p>
  </div>
</template>

<script>
export default {
  name: 'MessageNotice',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.message-content-item
  width: 100%
  height: 100%
  text-align: center
  .img-blue
    margin-top: 100px
    width: 160px
    height: 160px
  .text
    margin-top: 30px
    margin-bottom: 15px
    font-size: 12px
    color: #BFBCBC
  .button
    font-size: 16px
    padding: 5px 85px
    border-radius: 5px
    outline: none
    border: none
    background: linear-gradient(to right bottom, #17BFFD, #007BEE)
    color: #fff
</style>
