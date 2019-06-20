<template>
  <Form ref="formLogin"
        :model="formLogin"
        :rules="ruleLogin">
    <FormItem prop="user">
      <i-input type="text"
               v-model="formLogin.user"
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
              @click="handleSubmit('formLogin')">登录</Button>
      <Button type="primary"
              @click="handleSubmit('formLogin')">注册</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data () {
    return {
      formLogin: {
        user: '',
        password: '',
        switch: false
      },
      ruleLogin: {
        user: [
          { required: true, message: '请输入你的用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入你的密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '这个密码不应该少于6字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
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
