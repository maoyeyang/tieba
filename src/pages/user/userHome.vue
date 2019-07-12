<template>
  <div class="user-home">
    <Top>我的主页</Top>
    <div class="img"></div>
    <div class="info">
      <div class="info-1">
        <img class="avatar"
             :src="userInfo.avatar_url" />
        <div class="button"
             @click="toEdit">编辑资料</div>
      </div>
      <div class="info-2">
        <span class="icon-large"
              :class="!userInfo.member ? 'icon-crown-1' : 'icon-crown-2'"></span>
        <span class="nickname">{{userInfo.nickname}}</span>
        <span class="icon-small icon-man"
              v-if="userInfo.sex"></span>
        <span class="icon-small icon-woman"
              v-if="!userInfo.sex"></span>
      </div>
      <div class="info-3">
        <span class="info-message ">{{userInfo.focusCount}} 关注</span>
        <span class="info-message br">{{userInfo.fansCount}} 粉丝</span>
        <span class="info-message br">{{userInfo.focusBaCount}} 关注的吧</span>
      </div>
      <div class="info-4">
        吧龄:{{userInfo.createdAt | dateDiff}}
      </div>
      <div class="info-5">
        简介:{{userInfo.introduction}}
      </div>
    </div>
    <div class="dynamic">
      <img src="../../assets/images/cloud.png"
           class="img_cloud" />
      <p class="text">你还没有任何动态</p>
    </div>
  </div>
</template>

<script>
import { getUserInfoWithAuth } from 'api'
import Top from 'components/top'
export default {
  name: 'UserHome',
  components: {
    Top
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    toEdit () {
      this.$router.push({ path: '/useredit' })
    }
  },
  created () {
    getUserInfoWithAuth().then(({ data }) => {
      this.userInfo = data.data
    })
  }
}
</script>

<style lang="stylus">
.user-home
  width: 100%
  height: 100%
  padding-top: 42px
  .img
    width: 100%
    height: 200px
    background-image: url('../../assets/images/sky_bg.jpg')
    background-size: cover
    background-position: center center
  .info
    padding: 0 20px 20px 20px
    .info-1
      width: 100%
      height: 50px
      display: flex
      justify-content: space-between
      .avatar
        width: 100px
        height: 100px
        border-radius: 50%
        border: 3px solid #fff
        transform: translateY(-50px)
        background-color: #fff
        object-fit: cover
      .button
        background-color: #0B7BFB
        color: #ffffff
        border-radius: 5px
        height: 34px
        padding: 0 10px
        margin-top: 8px
        text-align: center
        line-height: 34px
        font-size: 16px
    .info-2
      height: 35px
      line-height: 35px
      display: flex
      justify-content: flex-start
      justify-items: flex-start
      .nickname
        display: inline-block
        line-height: 40px
        font-size: 20px
        padding: 0 15px
        max-width: 160px
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
      .icon-large
        width: 35px
        height: 35px
        display: inline-block
        background-size: 30px 30px
        background-position: center center
        background-repeat: no-repeat
        &.icon-crown-1
          background-image: url('../../assets/icon/crown-1.png')
        &.icon-crown-2
          background-image: url('../../assets/icon/crown-2.png')
      .icon-small
        width: 25px
        height: 25px
        display: inline-block
        background-size: 22px 22px
        background-position: center center
        border-radius: 50%
        margin-top: 5px
        &.icon-man
          background-image: url('../../assets/icon/man.png')
          background-color: #2696FE
        &.icon-woman
          background-image: url('../../assets/icon/woman.png')
          background-color: #FF294F
    .info-3
      .info-message
        font-size: 16px
        color: #747474
        padding: 3px 15px 0 0
        &.br
          border-left: 1px solid #747474
          padding-left: 15px
    .info-4
      margin-top: 5px
      font-size: 16px
    .info-5
      margin-top: 5px
      font-size: 16px
  .dynamic
    border-top: 4px solid #ccc
    width: 100%
    padding: 20px 12px
    text-align: center
    .img_cloud
      width: 150px
      height: 150px
    .text
      font-size: 16px
      padding-top: 15px
</style>
