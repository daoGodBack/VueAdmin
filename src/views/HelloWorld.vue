<template>
  <el-form  :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
    </el-form-item>
     <!-- <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div> -->
  </el-form>
</template>

<script>
import { requestLogin } from '../api/api'
export default {
  data () {
    return {
      logining: false,
      ruleForm2: {
        account: 'daodao',
        checkPass: '123456'
      },
      rules2: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        checkPass: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      checked: true
    }
  },
  methods: {
    handleReset2 () {
      this.$refs.ruleForm2.resetFields()
    },
    handleSubmit2 (ev) {
      // let _this = this
      this.$refs.ruleForm2.validate((valid) => {
        if (valid) {
          this.logining = true
          var loginParams = {username: this.ruleForm2.account, password: this.ruleForm2.checkPass}

          requestLogin(loginParams).then(data => {
            this.logining = false
            let {msg, code, user} = data
            console.log(data)
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              console.log(111)
              sessionStorage.setItem('user', JSON.stringify(user))
              this.$router.push({path: '/'})
            }
          })
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   scoped lang="scss" type="text/css">
@import './login';
</style>
