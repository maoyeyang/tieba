<template>
  <div>
    <img class="img-blue"
         src="../../assets/images/blue_bg.png" />
    <p class="text">你还没有给任何人发过消息,快找朋友聊聊天吧</p>
    <button class="button"
            @click="chat">开始聊天</button>
  </div>
</template>

<script>
export default {
  name: 'MessageChat',
  data () {
    return {

    }
  },
  methods: {
    chat () {
      this.$Message.warning('该功能暂未被实现,请勿点击!!!')
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
