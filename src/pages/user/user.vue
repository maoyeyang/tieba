<template>
  <div class="user">
    <div class="user-top">
      <div class="user-top-left">
        <span class="user-top-icon icon-sweep"
              @click="saoma"></span>
        <span class="user-top-icon"></span>
      </div>
      <div class="user-top-title">我的</div>
      <div class="user-top-right">
        <router-link to="/store"
                     tag="span"><span class="user-top-icon icon-store"></span></router-link>
        <router-link to="/setting"
                     tag="span"><span class="user-top-icon icon-setting"></span></router-link>
      </div>
    </div>
    <router-link to="/userhome"
                 tag="span">
      <div class="user-info">
        <img class="user-info-avatar"
             :src="userInfo.avatar_url" />
        <div class="user-info-title">
          <p class="user-info-name">
            <span class="user-info-icon-large"
                  :class="!userInfo.member ? 'icon-crown-1' : 'icon-crown-2'"></span>
            <span class="user-info-nickname">{{userInfo.nickname}}</span>
            <span class="user-info-icon-small icon-man"
                  v-if="userInfo.sex ==='men'"></span>
            <span class="user-info-icon-small icon-woman"
                  v-if="userInfo.sex ==='women'"></span>
          </p>
          <p class="user-info-prompt">
            查看个人主页和编辑资料
          </p>
        </div>
        <span class="user-info-right icon-right"></span>
      </div>
    </router-link>
    <Row class="user-message">
      <router-link to="/focuslist"
                   tag="span">
        <i-col span="6">
          <p class="user-message-number">{{userMessage.focusCount}}</p>
          <p class="user-message-des">关注</p>
        </i-col>
      </router-link>
      <router-link to="/fanslist"
                   tag="span">
        <i-col span="6">
          <p class="user-message-number">{{userMessage.fansCount}}</p>
          <p class="user-message-des">粉丝</p>
        </i-col>
      </router-link>
      <router-link to="/focusbalist"
                   tag="span">
        <i-col span="6">
          <p class="user-message-number">{{userMessage.focusBaCount}}</p>
          <p class="user-message-des">关注的吧</p>
        </i-col>
      </router-link>
      <router-link to="/articlelist"
                   tag="span">
        <i-col span="6">
          <p class="user-message-number">{{userMessage.tieCount}}</p>
          <p class="user-message-des">帖子</p>
        </i-col>
      </router-link>
    </Row>
    <div class="user-mid">
      <router-link to="/collection"
                   tag="div"
                   class="user-mid-item">
        <i-col span="4">
          <span class="user-mid-icon icon-collection"></span>
        </i-col>
        <i-col span="17">
          <p class="user-mid-text">我的收藏</p>
        </i-col>
        <i-col span="3">
          <p class="user-mid-right"></p>
        </i-col>
      </router-link>
      <router-link to="/collection"
                   tag="div"
                   class="user-mid-item">
        <i-col span="4">
          <span class="user-mid-icon icon-watchhistory"></span>
        </i-col>
        <i-col span="17">
          <p class="user-mid-text">浏览历史</p>
        </i-col>
        <i-col span="3">
          <p class="user-mid-right"></p>
        </i-col>
      </router-link>
      <router-link to="/collection"
                   tag="div"
                   class="user-mid-item">
        <i-col span="4">
          <span class="user-mid-icon icon-team"></span>
        </i-col>
        <i-col span="17">
          <p class="user-mid-text">我的群组</p>
        </i-col>
        <i-col span="3">
          <p class="user-mid-right"></p>
        </i-col>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      userInfo: {},
      userMessage: {
        focusCount: 0,
        fansCount: 0,
        focusBaCount: 0,
        tieCount: 0
      }
    }
  },
  methods: {
    saoma () {
      this.$Message.warning('该功能暂未被实现,请勿点击!!!')
    },
    getUserInfo () {
      this.$http.get('/auth/userinfo').then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.userInfo = data.data
        } else {
          this.$Message.error('登录认证失败')
        }
      })
    },
    getUserFocusCount () {
      this.$http.get('/auth/focuscount').then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.userMessage = { ...(this.userMessage), ...(data.data) }
        } else {
          this.$Message.error('登录认证失败')
        }
      })
    },
    getFocusBaCount () {
      this.$http.get('/auth/focusbacount').then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.userMessage = { ...(this.userMessage), ...(data.data) }
        } else {
          this.$Message.error('登录认证失败')
        }
      })
    },
    getTieCount () {
      this.$http.get('/auth/usertiecount').then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.userMessage = { ...(this.userMessage), ...(data.data) }
        } else {
          this.$Message.error('登录认证失败')
        }
      })
    }
  },
  created () {
    this.getUserInfo()
    this.getUserFocusCount()
    this.getFocusBaCount()
    this.getTieCount()
  }
}
</script>

<style lang="stylus" scoped>
.user
  padding-bottom: 60px
  font-size: 20px
  .user-top
    display: flex
    width: 100%
    height: 40px
    padding: 5px 0
    justify-content: space-between
    position: fixed
    top: 0
    left: 0
    .user-top-title
      width: 100%
      text-align: center
      height: 30px
      font-size: 18px
      line-height: 30px
    .user-top-left, .user-top-right
      width: 150px
      height: 30px
      display: block
      .user-top-icon
        width: 30px
        height: 30px
        display: inline-block
        background-size: 25px 25px
        background-position: center center
        background-repeat: no-repeat
        &.icon-sweep
          background-image: url('../../assets/icon/sweep.png')
          margin-left: 10px
        &.icon-store
          background-image: url('../../assets/icon/store.png')
        &.icon-setting
          background-image: url('../../assets/icon/setting.png')
  .user-info
    width: 100%
    height: 70px
    margin-top: 40px
    display: flex
    justify-content: space-between
    padding: 5px 0 10px 0
    border-bottom: 1px solid #F2F4F3
    .user-info-avatar
      width: 60px
      height: 60px
      flex: 0 0 60px
      display: block
      margin-left: 10px
      border-radius: 50%
    .user-info-title
      height: 70px
      width: 100%
      margin-left: 5px
      .user-info-name
        height: 35px
        line-height: 35px
        display: flex
        justify-content: flex-start
        justify-items: flex-start
        .user-info-nickname
          display: inline-block
          line-height: 40px
          font-size: 14px
          padding: 0 8px
          max-width: 160px
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .user-info-icon-large
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
        .user-info-icon-small
          width: 20px
          height: 20px
          display: inline-block
          background-size: 16px 16px
          background-position: center center
          border-radius: 50%
          margin-top: 9px
          &.icon-man
            background-image: url('../../assets/icon/man.png')
            background-color: #2696FE
          &.icon-woman
            background-image: url('../../assets/icon/woman.png')
            background-color: #FF294F
      .user-info-prompt
        height: 30px
        line-height: 30px
        font-size: 12px
    .user-info-right.icon-right
      margin-right: 10px
      line-height: 60px
      color: #444
      width: 40px
      height: 70px
      background-size: cover
      background-repeat: no-repeat
      background-size: 20px 20px
      background-position: center center
      background-image: url('../../assets/icon/right.png')
  .user-message
    text-align: center
    font-size: 12px
    div
      padding: 10px 0
      border-bottom: 5px solid #F2F3F2
    .ivu-col.ivu-col-span-6
      &:active
        background-color: #F2F3F2
    .user-message-number
      font-size: 20px
      height: 25px
      line-height: 30px
    .user-message-des
      text-align: center
  .user-mid
    border-bottom: 5px solid #F2F3F2
    .user-mid-item
      height: 50px
      padding-top: 10px
      border-bottom: 1px solid #FBF9FA
      &:active
        background-color: #F2F3F2
      .user-mid-icon
        width: 30px
        height: 30px
        background-size: cover
        display: block
        margin-left: 10px
        background-size: 25px 25px
        background-position: center center
        background-repeat: no-repeat
        &.icon-collection
          background-image: url('../../assets/icon/star.png')
        &.icon-watchhistory
          background-image: url('../../assets/icon/time-circle.png')
        &.icon-team
          background-image: url('../../assets/icon/team.png')
      .user-mid-text
        font-size: 14px
        line-height: 30px
      .user-mid-right
        width: 40px
        height: 30px
        background-repeat: no-repeat
        background-size: 20px 20px
        background-position: center center
        background-image: url('../../assets/icon/right.png')
</style>
