<template>
  <div class="page-login">
    <div class="login-panel">
      <div class="banner">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
      </div>
      <div class="form">
        <h4>管理员登录</h4>
        <el-input class="username" v-model="input" placeholder="用户名"></el-input>
        <el-input class="password" v-model="pwd" placeholder="密码" show-password></el-input>
        <p>
          <nuxt-link to="">忘了密码？？</nuxt-link>
        </p>
        <el-button class="form-btn">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  layout: 'blank',
  data: () => ({
    input: '',
    pwd: ''
  })
}
</script>
<style lang="scss">
@import '@/assets/css/login/index.scss'
</style>
