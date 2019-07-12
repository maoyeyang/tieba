<template>
  <div class="user-edit">
    <Top>我的资料</Top>
    <div class="content">
      <Upload action=''
              :before-upload="handleUpload">
        <img class="img"
             ref="image"
             :src="url" />
        <span class="icon-camera"></span>
      </Upload>
      <Form :model="userInfo"
            :label-width="70"
            class="form">
        <FormItem label="用户名">
          <i-input disabled
                   v-model="userInfo.username"></i-input>
        </FormItem>
        <FormItem label="昵称">
          <i-input v-model="userInfo.nickname"></i-input>
        </FormItem>
        <FormItem label="性别">
          <div @click="changeSex">
            <i-input disabled
                     :placeholder="userInfo.sex ? '男' :'女'"></i-input>
          </div>
        </FormItem>
        <FormItem label="原密码">
          <i-input v-model="userInfo.old"
                   type='password'
                   placeholder="最少6位,最多16位"></i-input>
        </FormItem>
        <FormItem label="新密码">
          <i-input v-model="userInfo.new"
                   type='password'
                   placeholder="最少6位,最多16位"></i-input>
        </FormItem>
        <FormItem label="个性签名">
          <i-input v-model="userInfo.introduction"
                   type="textarea"
                   :autosize="{minRows: 1,maxRows: 5}"></i-input>
        </FormItem>
        <FormItem>
          <Button type="primary"
                  style="margin-right:70px"
                  @click="update">保存</Button>
        </FormItem>
      </Form>
    </div>
    <div class="user-bottom"
         v-show="this.$store.getters.isMask">
      <p class="bottom-text">选择性别</p>
      <p class="bottom-option"
         @click="change(true)">男</p>
      <p class="bottom-option"
         @click="change(false)">女</p>
      <p class="bottom-option"
         @click="cancel">取消</p>
    </div>
  </div>
</template>

<script>
import { getUserInfoWithAuth, editUserInfoWithAuth } from 'api'
import Top from 'components/top'
export default {
  name: 'UserEdit',
  components: {
    Top
  },
  data () {
    return {
      userInfo: {
        old: '',
        new: ''
      },
      file: null,
      url: ''
    }
  },
  methods: {
    change (bool) {
      this.userInfo.sex = bool
      this.$store.dispatch('hiddenMask')
    },
    cancel () {
      this.$store.dispatch('hiddenMask')
    },
    changeSex () {
      this.$store.dispatch('showMask')
    },
    async update () {
      let fd = new FormData()
      fd.append('nickname', this.userInfo.nickname)
      fd.append('sex', this.userInfo.sex)
      fd.append('old', this.userInfo.old)
      fd.append('new', this.userInfo.new)
      fd.append('introduction', this.userInfo.introduction)
      if (this.file) {
        fd.append('file', this.file)
      }
      const { data } = await editUserInfoWithAuth(fd)
      if (data && data.success === true) {
        this.$Message.success(data.message)
      } else {
        this.$Message.error(data.message)
      }
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
      let index = file.type.lastIndexOf('/')
      let suffix = file.type.substr(index + 1)
      this.userInfo.avatar_url = `./images/user_images/avatar_${this.userInfo.id}.${suffix}`
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.$refs.image.src = fileReader.result
      })
      fileReader.readAsDataURL(file)
      this.file = file
      return false
    }
  },
  created () {
    this.$nextTick(() => {
      getUserInfoWithAuth().then(({ data }) => {
        this.userInfo = {
          ...(data.data),
          ...(this.userInfo)
        }
        this.url = this.userInfo.avatar_url
      })
    })
  }
}
</script>

<style lang="stylus">
.user-edit
  width: 100%
  height: 100%
  padding-top: 42px
  .content
    width: 100%
    padding: 50px 20px 0 20px
    text-align: center
    .ivu-upload
      width: 150px
      margin: 0 auto
      .ivu-upload.ivu-upload-select
        position: relative
        .img
          width: 150px
          height: 150px
          overflow: hidden
          object-fit: cover
          border-radius: 50%
          border: 1px solid #ddd
        .icon-camera
          position: absolute
          bottom: -5px
          right: -5px
          background-image: url('../../assets/icon/camera_white.png')
          border-radius: 50%
          background-color: rgba(30, 155, 253, 0.7)
          width: 50px
          height: 50px
          background-size: 35px 35px
          background-repeat: no-repeat
          background-position: center center
          display: block
    .form
      margin-top: 30px
      .ivu-form-item
        margin-bottom: 5px
      .ivu-form-item-label
        text-align: left
        font-size: 14px
      .ivu-input
        outline: none
        border: none
        color: #000
        font-size: 15px
        &.ivu-input-default.ivu-input-disabled
          &::-webkit-input-placeholder
            color: #000
          &:-moz-placeholder
            color: #000
          &::-moz-placeholder
            color: #000
          &:-ms-input-placeholder
            color: #000
        &.ivu-input-disabled
          background-color: #fff
  .user-bottom
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 150px
    background-color: #fff
    z-index: 7
    text-align: center
    border-radius: 5px 5px 0 0
    .bottom-text
      font-size: 16px
      width: 100%
      line-height: 30px
      color: #959595
      height: 30px
    .bottom-option
      width: 100%
      height: 40px
      line-height: 40px
      font-size: 16px
</style>
