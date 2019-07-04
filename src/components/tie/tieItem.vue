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
             :preview="id"
             v-show="i < 3"
             :ref="`img-${i}`" />
        <div class="tie-item-mask"
             @click.stop.prevent=""
             v-if="(i === 2)  && (tieInfo.images.length > 3)">+{{tieInfo.images.length-3}}</div>
      </div>
    </div>
    <div class="tie-item-row-4"
         v-if="hiddenBa">
      <router-link :to="`/bainfo/${tieInfo.ba_id}`"
                   tag="p"
                   class="tie-item-ba">{{tieInfo.ba_name}}</router-link>
    </div>
    <div class="tie-item-row-5">
      <div class="tie-item-left">
        <div class="tie-item-collect"><span class="icon-star"></span>收藏</div>
        <router-link :to="`/bainfo/${tieInfo.ba_id}`"
                     tag="span"
                     class="tie-item-cmt"><span class="icon-chat"></span>{{tieInfo.comments_count}}</router-link>
      </div>
      <div class="tie-item-right">
        <span class="icon-like"></span>
        <span class="likes">{{tieInfo.likes}}</span>
        <span class="icon-unlike"></span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['tieInfo', 'hiddenBa', 'id'],
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.tie-item
  width: 100%
  padding: 0 20px 5px 20px
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
      padding: 3px 0 0 0
    .tie-item-content
      font-size: 12px
      text-indent: 2em
      overflow: hidden
      text-overflow: ellipsis
      display: -webkit-box
      -webkit-line-clamp: 4
      -webkit-box-orient: vertical
  .tie-item-row-3
    width: 100%
    padding: 2px 0
    display: flex
    justify-content: space-around
    .tie-item-imglist
      position: relative
      img
        width: 26vw
        height: 26vw
        object-fit: cover
        display: inline-block
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
    margin-top: 5px
    width: 100%
    display: flex
    justify-content: space-between
    .tie-item-left
      display: flex
      justify-content: flex-start
      .tie-item-collect
        font-size: 14px
        display: flex
        height: 25px
        line-height: 25px
        justify-content: flex-start
        .icon-star
          width: 25px
          margin-right: 3px
          height: 25px
          display: block
          background-size: 22px 22px
          background-repeat: no-repeat
          background-position: top center
          background-image: url('../../assets/icon/star.png')
          &.active
            background-image: url('../../assets/icon/star_active.png')
      .tie-item-cmt
        margin-left: 15px
        line-height: 25px
        height: 25px
        font-size: 14px
        display: flex
        justify-content: flex-start
        .icon-chat
          width: 25px
          margin-right: 3px
          height: 25px
          display: block
          background-size: 20px 20px
          background-repeat: no-repeat
          background-position: center 20%
          background-image: url('../../assets/icon/chat.png')
    .tie-item-right
      display: flex
      justify-content: flex-start
      .icon-like
        width: 25px
        height: 25px
        display: block
        background-size: 20px 20px
        background-repeat: no-repeat
        background-position: top center
        background-image: url('../../assets/icon/like.png')
      .likes
        font-size: 16px
        line-height: 25px
        margin: 0 3px
      .icon-unlike
        width: 25px
        height: 25px
        display: block
        background-size: 20px 20px
        background-repeat: no-repeat
        background-position: bottom center
        background-image: url('../../assets/icon/unlike.png')
</style>
