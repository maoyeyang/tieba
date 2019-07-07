<template>
  <div class="collection">
    <div class="top">
      <div class="go-back"
           @click="goBack">
        <span class="icon-goback"></span>
        <span class="text-goback">返回</span>
      </div>
      <span class="top-title">
        我的收藏
      </span>
      <span class="top-right"
            @click="edit">{{!isEdit ? '编辑' :'完成'}}</span>
    </div>
    <div class="content">
      <div class="swiper">
        <div class="item"
             v-for="(item,i) in collectionList"
             :key="item.id">
          <div class="reduce"
               v-show="isEdit"
               @click="removeCollect(item.id,i)"><span class="red">-</span></div>
          <div class="info">
            <div class="row-1">
              <img class="avatar"
                   :src="item.avatar_url" />
              <span class="nickname">{{item.nickname}}</span>
              <span class="focus"
                    v-if="!item.isFocus"
                    @click="focus(item.user_id,i)">+关注</span>
            </div>
            <div class="row-2">
              <img class="tie-img"
                   :src="item.images[0]"
                   v-if="item.images.length > 0" />
              <p class="title">{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCollectList, addFocusWithAuth, removeCollectTieWithAuth } from 'api'
export default {
  name: 'Collection',
  data () {
    return {
      collectionList: [],
      isEdit: false
    }
  },
  methods: {
    removeCollect (id, i) {
      removeCollectTieWithAuth(id).then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.collectionList.splice(i, 1)
          this.$Message.success('取消收藏成功')
        } else {
          this.$Message.error('取消收藏失败')
        }
      })
    },
    focus (id, i) {
      addFocusWithAuth({ focus_id: id }).then(({ data }) => {
        if (data && data.statusCode === 200) {
          this.collectionList[i].isFocus = true
          this.$Message.success('关注用户成功')
        } else {
          this.$Message.error('关注用户失败')
        }
      })
    },
    edit () {
      this.isEdit = !this.isEdit
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  created () {
    getCollectList().then(({ data }) => {
      if (data && data.statusCode === 200) {
        this.collectionList = data.data
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.collection
  .top
    width: 100%
    height: 40px
    box-shadow: 0px 0px 3px #747474
    text-align: center
    position: fixed
    background-color: #fff
    display: flex
    justify-content: space-between
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
        background-image: url('../../assets/icon/left-circle.png')
        background-size: cover
      .text-goback
        font-size: 16px
        width: 40px
        height: 30px
        line-height: 30px
        margin-top: 5px
        display: inline-block
    .top-right
      width: 80px
      font-size: 18px
      color: #2A91FF
      height: 40px
      line-height: 40px
  .content
    width: 100%
    padding-top: 42px
    .swiper
      .item
        width: 100%
        padding: 10px 15px
        display: flex
        justify-content: flex-start
        border-bottom: 5px solid #eee
        .reduce
          flex: 0 0 50px
          text-align: center
          .red
            display: block
            width: 25px
            height: 25px
            border-radius: 50%
            background-color: red
            line-height: 25px
            font-size: 24px
            margin-top: 25px
            margin-left: 10px
            font-weight: bold
            color: #fff
        .info
          width: 100%
          .row-1
            display: flex
            margin-bottom: 5px
            justify-content: flex-start
            .avatar
              width: 40px
              height: 40px
              border-radius: 50%
              object-fit: cover
            .nickname
              height: 40px
              width: 100%
              line-height: 40px
              font-size: 18px
              margin-left: 10px
            .focus
              flex: 0 0 60px
              text-align: center
              line-height: 30px
              margin-top: 5px
              height: 30px
              font-size: 16px
              color: blue
              border-radius: 5px
              border: 1px solid blue
          .row-2
            display: flex
            justify-content: flex-start
            .tie-img
              width: 80px
              flex: 0 0 80px
              height: 80px
              object-fit: cover
            .title
              line-height: 30px
              font-size: 18px
              margin-left: 10px
</style>
