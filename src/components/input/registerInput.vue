<template>
  <Form ref="formRegister"
        :model="formRegister"
        :rules="ruleRegister">
    <FormItem prop="username">
      <i-input type="text"
               v-model="formRegister.username"
               placeholder="Username">
        <Icon type="ios-person-outline"
              slot="prepend"></Icon>
      </i-input>
    </FormItem>
    <FormItem prop="password">
      <i-input type="password"
               v-model="formRegister.password"
               placeholder="Password">
        <Icon type="ios-lock-outline"
              slot="prepend"></Icon>
      </i-input>
    </FormItem>
    <FormItem prop="confirmPassword">
      <i-input type="password"
               v-model="formRegister.confirmPassword"
               placeholder="confirmPassword">
        <Icon type="ios-lock-outline"
              slot="prepend"></Icon>
      </i-input>
    </FormItem>
    <FormItem class="button-register">
      <Button type="primary"
              @click="onSubmit('formRegister')">注册</Button>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data () {
    const pwdCheckValidate = (rule, value, callback) => {
      if (this.formRegister.password !== value) {
        callback(new Error('新密码和确认密码应相同'))
      } else {
        callback()
      }
    }
    return {
      formRegister: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      ruleRegister: {
        username: [
          { required: true, message: '请输入你的用户名.', trigger: 'blur' },
          { type: 'string', min: 6, message: '用户名不应该少于6字符', trigger: 'blur' },
          { type: 'string', max: 16, message: '用户名不应该多于16字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入你的密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不应该少于6字符', trigger: 'blur' },
          { type: 'string', max: 16, message: '密码不应该多于16字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '确认你的密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不应该少于6字符', trigger: 'blur' },
          { type: 'string', max: 16, message: '密码不应该多于16字符', trigger: 'blur' },
          { required: true, validator: pwdCheckValidate, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          const user = {
            username: this.formRegister.username,
            password: this.formRegister.password
          }
          const { data } = await this.$http.post('/register', user)
          if (data && data.statusCode === 200) {
            this.$Message.success(data.message)
            this.$router.go(-1)
          } else if (data && data.statusCode === 400) {
            this.$Message.error(data.message)
          }
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.ivu-form.ivu-form-label-right
  padding: 20px 20px 10px
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
