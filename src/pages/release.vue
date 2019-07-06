<template>
  <div class="release">
    <div class="top">
      <div class="go-back"
           @click="goBack">
        <span class="icon-goback"></span>
      </div>
      <span class="top-title">
        发布到{{this.baInfo.ba_name}}吧
      </span>
      <span class="top-right"
            @click="release">发布</span>
    </div>
    <input v-model="tieInfo.title"
           class="input-title"
           placeholder="标题" />
    <textarea v-model="tieInfo.content"
              class="input-content"
              placeholder="内容">
    </textarea>
    <div class="img-list">
      <div v-for="(item,i) in imgList"
           :key="i"
           class="item">
        <img class="img"
             :src="item" />
        <span class="icon-close"
              @click="deleteImg(i)"></span>
      </div>
      <Upload action=''
              multiple
              :before-upload="handleUpload">
        <span class="button-upload">+</span>
      </Upload>
    </div>
  </div>
</template>

<script>
import { getBaInfo } from 'api'
export default {
  name: 'Release',
  data () {
    return {
      baInfo: {},
      imgList: [],
      tieInfo: {
        title: '',
        content: '',
        images: []
      },
      files: []
    }
  },
  methods: {
    deleteImg (i) {
      this.imgList.splice(i, 1)
      this.files.splice(i, 1)
    },
    release () {

    },
    goBack () {
      this.$router.go(-1)
    },
    handleUpload (file) {
      const reg = /jpg$|jpeg$|gif$|png$/i
      if (!reg.test(file.type)) {
        this.$Message.warning('这不是一张图片,请选择正确图片类型!!!')
        return false
      }
      if (file.size >= 2 * 1024 * 1024) {
        this.$Message.warning('图片太大(仅支持2M已下的图片')
        return false
      }

      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        if (this.imgList.length >= 9) {
          this.$Message.warning('一个帖子最多只能上传9张图片')
          return false
        }
        this.imgList.push(fileReader.result)
      })
      fileReader.readAsDataURL(file)
      this.files.push(file)
      return false
    }
  },
  beforeCreate () {
    this.$store.dispatch('hiddenMask')
  },
  created () {
    getBaInfo(parseInt(this.$route.params.id)).then(({ data }) => {
      if (data && data.statusCode === 200) {
        this.baInfo = data.data
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.release
  .top
    width: 100%
    height: 40px
    box-shadow: 0px 0px 3px #747474
    text-align: center
    background-color: #fff
    display: flex
    justify-content: space-between
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
        background-image: url('../assets/icon/close.png')
        background-size: cover
    .top-right
      width: 80px
      font-size: 18px
      color: #2A91FF
      height: 40px
      line-height: 40px
  .input-title
    width: 100%
    outline: none
    border: none
    padding: 10px 5%
    font-size: 18px
  .input-content
    width: 100%
    outline: none
    border: none
    height: 300px
    padding: 10px 5%
    font-size: 16px
    word-wrap: break-word
    overflow-x: hidden
    overflow-y: auto
    resize: none
  .img-list
    width: 100%
    padding: 0 5%
    display: flex
    flex-direction: row
    flex-wrap: wrap
    align-content: space-between
    .item
      width: 28vw
      height: 28vw
      margin-right: 2vw
      margin-bottom: 2vw
      position: relative
      .img
        width: 100%
        height: 100%
        object-fit: cover
      .icon-close
        position: absolute
        top: 0
        right: 0
        width: 35px
        height: 35px
        background-size: 20px 20px
        background-repeat: no-repeat
        background-position: center center
        background-color: rgba(0, 0, 0, 0.1)
        border-radius: 50%
        background-image: url('../assets/icon/close.png')
    .button-upload
      width: 28vw
      line-height: 28vw
      background-color: rgba(0, 0, 0, 0.3)
      font-size: 100px
      text-align: center
      display: block
      height: 28vw
</style>
