<template>
  <Form ref="formLogin"
        :model="formLogin"
        :rules="ruleLogin">
    <FormItem prop="username">
      <i-input type="text"
               v-model="formLogin.username"
               placeholder="Username">
        <Icon type="ios-person-outline"
              slot="prepend"></Icon>
      </i-input>
    </FormItem>
    <FormItem prop="password">
      <i-input type="password"
               v-model="formLogin.password"
               placeholder="Password">
        <Icon type="ios-lock-outline"
              slot="prepend"></Icon>
      </i-input>
    </FormItem>
    <FormItem class="user-info"
              label="是否保存用户信息">
      <i-switch v-model="formLogin.switch"
                size="large">
        <span slot="open">保存</span>
        <span slot="close">不保存</span>
      </i-switch>
    </FormItem>
    <FormItem class="button-login-register">
      <Button type="primary"
              @click="onSubmit('formLogin')">登录</Button>
      <Button type="primary"
              @click="ToRegister">注册</Button>
    </FormItem>
  </Form>
</template>

<script>
import { login } from 'api'
export default {
  data () {
    return {
      formLogin: {
        username: '',
        password: '',
        switch: false
      },
      ruleLogin: {
        username: [
          { required: true, message: '请输入你的用户名.', trigger: 'blur' },
          { type: 'string', min: 6, message: '用户名不应该少于6字符', trigger: 'blur' },
          { type: 'string', max: 16, message: '用户名不应该多于16字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入你的密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不应该少于6字符', trigger: 'blur' },
          { type: 'string', max: 16, message: '密码不应该多于16字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          const user = {
            username: this.formLogin.username,
            password: this.formLogin.password
          }
          const { data } = await login(user)
          if (data && data.statusCode === 200) {
            this.$Cookies.set('username', data.data.token)
            this.$Cookies.get('username')
            this.saveInfo()
            this.$Message.success(`恭喜 ${data.data.nickname} ,登录成功!`)
            this.$router.push({ path: '/home/content' })
            this.$store.dispatch('showTabbar')
          } else if (data && data.statusCode === 400) {
            this.$Message.error(data.message)
          }
        }
      })
    },
    ToRegister () {
      this.$router.push({ path: '/register' })
    },
    saveInfo () {
      const { username, password } = this.formLogin
      const userInfo = { username, password }
      if (this.formLogin.switch === true) {
        localStorage.setItem('user', JSON.stringify(userInfo))
      } else {
        localStorage.removeItem('user')
      }
    }
  },
  created () {
    if (localStorage.getItem('user')) {
      let userInfo = JSON.parse(localStorage.getItem('user'))
      this.formLogin = { ...userInfo, switch: true }
    }
  }
}
</script>

<style lang="stylus" scoped>
.ivu-form.ivu-form-label-right
  padding: 30px 20px 10px
  width: 100%
  min-width: 250px
  .ivu-form-item
    margin-bottom: 20px
    &.user-info
      margin-bottom: 5px
    .ivu-form-item-content
      .ivu-switch.ivu-switch-large
        width: 70px
      .ivu-switch-large.ivu-switch-checked
        &:after
          left: 49px
      .ivu-btn.ivu-btn-primary
        margin-right: 13%
</style>
