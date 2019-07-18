<template>
  <div class="page-login">
    <div class="login-panel">
      <div class="banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
      </div>
      <div class="form">
        <h4>管理员登录</h4>
        <el-input class="username" v-model="username" placeholder="用户名"></el-input>
        <el-input class="password" v-model="password" placeholder="密码" show-password></el-input>
        <p>
          <nuxt-link to="">忘了密码？？</nuxt-link>
        </p>
        <el-button class="form-btn" @click="handleSignin()">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import CryptoJS from 'crypto-js'
export default {
  name: "",
  layout: 'blank',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    handleSignin: function() {
      let self = this;
      self.$axios.post('/user/signin', {
        username: self.username,
        password: CryptoJS.MD5(self.password).toString()
      }).then(({status, data}) => {
        if(status === 200) {
          if(data && data.code === 0) {
            location.href="/manager"
          }
        }else {
          console.log(`服务器错误${status}`)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/login/index.scss'
</style>
