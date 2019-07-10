<template>
  <router-link :to="`/tieinfo/${tieInfo.id}`"
               tag="div"
               class="tie-item">
    <router-link :to="`/userinfo/${tieInfo.user_id}`"
                 tag="div"
                 class="tie-item-row-1">
      <img class="tie-item-avatar"
           :src="tieInfo.avatar_url">
      <h3 class="tie-item-nickname">{{tieInfo.nickname}}</h3>
      <span class="icon-jing"
            v-if='tieInfo.type'></span>
    </router-link>
    <div class="tie-item-row-2">
      <p class="tie-item-title">{{tieInfo.title}}</p>
      <p class="tie-item-content">{{tieInfo.content}}</p>
    </div>
    <div class="tie-item-row-3">
      <div v-for="(item,i) in tieInfo.images"
           :key='i'
           class="tie-item-imglist">
        <img class="tie-item-img"
             :src="item"
             :preview="tieInfo.id"
             v-show="i < 3" />
        <div class="tie-item-mask"
             @click.stop.prevent=""
             v-if="(i === 2)  && (tieInfo.images.length > 3)">+{{tieInfo.images.length-3}}</div>
      </div>
    </div>
    <div class="tie-item-row-4"
         v-if="hiddenBa">
      <router-link :to="`/bainfo/${tieInfo.ba_id}`"
                   tag="p"
                   class="tie-item-ba">{{tieInfo.ba_name}}吧</router-link>
    </div>
    <div class="tie-item-row-5">
      <span class="tie-item-collect"
            @click.stop.prevent="collect">
        <span class="icon-collect"
              :class="tieInfo.isCollect ? 'active':''"></span>
        收藏
      </span>
      <span class="tie-item-chat">
        <span class="icon-chat"></span>
        {{tieInfo.comments_count >0? tieInfo.comments_count :"回复"}}
      </span>
      <span class="tie-item-like"
            @click.stop.prevent="like">
        <span class="icon-like"
              :class="tieInfo.isLike ? 'active':''"></span>
        {{tieInfo.likes}}
      </span>
    </div>
  </router-link>
</template>

<script>
import { likeTieWithAuth, unLikeTieWithAuth, collectTieWithAuth, removeCollectTieWithAuth } from 'api'
export default {
  props: ['tieInfo', 'hiddenBa'],
  methods: {
    collect () {
      if (!this.$Cookies.get('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      if (this.tieInfo.isCollect) {
        removeCollectTieWithAuth(this.tieInfo.id).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.tieInfo.isCollect = false
          } else {
            this.$Message.success('取消收藏失败')
          }
        })
      } else {
        collectTieWithAuth(this.tieInfo.id).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.tieInfo.isCollect = true
          } else {
            this.$Message.success('收藏失败')
          }
        })
      }
    },
    like () {
      if (!this.$Cookies.get('username')) {
        this.$router.push({ path: '/login' })
        return
      }
      if (this.tieInfo.isLike) {
        unLikeTieWithAuth(this.tieInfo.id).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.tieInfo.isLike = false
            this.tieInfo.likes -= 1
          } else {
            this.$Message.success('取消点赞失败')
          }
        })
      } else {
        likeTieWithAuth(this.tieInfo.id).then(({ data }) => {
          if (data && data.statusCode === 200) {
            this.tieInfo.isLike = true
            this.tieInfo.likes += 1
          } else {
            this.$Message.success('点赞失败')
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tie-item
  width: 100%
  padding: 0 20px 10px 20px
  border-bottom: 4px solid #ccc
  .tie-item-row-1
    display: flex
    padding: 10px 0 5px 0
    justify-content: space-between
    .tie-item-avatar
      width: 40px
      height: 40px
      flex: 0 0 40px
      object-fit: cover
      border-radius: 50%
      border: 1px solid #eee
    .tie-item-nickname
      width: 100%
      text-align: left
      margin-left: 15px
      font-size: 16px
      font-weight: normal
      line-height: 40px
    .icon-jing
      width: 27px
      height: 27px
      margin-top: 5px
      flex: 0 0 27px
      display: block
      background-size: 27px 27px
      background-repeat: no-repeat
      background-position: center center
      background-image: url('../../assets/icon/jing.png')
  .tie-item-row-2
    .tie-item-title
      font-weight: bold
      font-size: 14px
      padding: 3px 0 0 5px
    .tie-item-content
      font-size: 12px
      padding-left: 5px
      overflow: hidden
      text-overflow: ellipsis
      display: -webkit-box
      -webkit-line-clamp: 4
      -webkit-box-orient: vertical
  .tie-item-row-3
    width: 100%
    padding: 2px 0
    display: flex
    justify-content: flex-start
    .tie-item-imglist
      position: relative
      margin-right: 3vw
      img
        width: 26vw
        height: 26vw
        object-fit: cover
        display: inline-block
        border-radius: 5px
      .tie-item-mask
        background-color: rgba(0, 0, 0, 0.5)
        z-index: 9
        font-size: 30px
        color: #fff
        width: 26vw
        height: 26vw
        position: absolute
        text-align: center
        line-height: 26vw
        top: 0
        left: 0
  .tie-item-row-4
    display: flex
    justify-content: flex-start
    margin-top: 5px
    .tie-item-ba
      background-color: #eee
      font-size: 14px
      line-height: 27px
      height: 25px
      display: block
      padding: 0 5px
  .tie-item-row-5
    display: flex
    height: 30px
    line-height: 30px
    font-size: 16px
    justify-content: space-between
    margin-top: 3px
    .tie-item-collect
      display: flex
      justify-content: flex-start
      line-height: 30px
      .icon-collect
        width: 30px
        height: 30px
        display: block
        background-image: url('../../assets/icon/star.png')
        background-repeat: no-repeat
        background-position: center center
        background-size: 25px 25px
        &.active
          background-image: url('../../assets/icon/star_active.png')
    .tie-item-chat
      display: flex
      justify-content: flex-start
      line-height: 30px
      .icon-chat
        width: 30px
        height: 30px
        display: block
        background-image: url('../../assets/icon/chat.png')
        background-repeat: no-repeat
        background-position: center center
        background-size: 25px 25px
    .tie-item-like
      display: flex
      justify-content: flex-start
      line-height: 30px
      margin-right: 20px
      .icon-like
        width: 30px
        height: 30px
        display: block
        background-image: url('../../assets/icon/heart.png')
        background-repeat: no-repeat
        background-position: center center
        background-size: 25px 25px
        &.active
          background-image: url('../../assets/icon/heart_active.png')
</style>
