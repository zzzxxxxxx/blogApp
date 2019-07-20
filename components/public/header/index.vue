<template>
  <div class="m-header center">
    <h4>柒夜呦</h4>
    <ul>
      <li class="animated swing infinite"><span @click="handleToGit()"><i class="iconfont">&#xe718;</i>github</span></li>
      <li><nuxt-link to="/"><i class="iconfont">&#xe611;</i>首页</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "",
  data: function() {
    return {

    }
  },
  methods: {
    handleToGit() {
      window.location.href = 'https://github.com/zzzxxxxxx'
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/public/header/index.scss';
</style>
