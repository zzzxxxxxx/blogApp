<template>
  <el-container class="layout-backstage">
    <el-header>
      <h2 class="center">Manager System</h2>
    </el-header>
    <el-container class="center">
      <el-aside width="230px">
        <h4 class="aside-title">
          <nuxt-link to="/manager"><i class="iconfont">&#xe611;</i>首页</nuxt-link>
        </h4>
        <el-collapse accordion>
          <el-collapse-item name="1">
            <template slot="title"><i class="iconfont">&#xe607;</i>内容管理</template>
            <ul>
              <li class="title-padding"><nuxt-link to="/manager/list">文章列表</nuxt-link></li>
              <li class="title-padding"><nuxt-link to="/manager/add">增加文章</nuxt-link></li>
            </ul>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div class="">哈哈哈哈</div>
            <div class="">哈哈哈哈</div>
          </el-collapse-item>
        </el-collapse>
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "",
  data: function() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/backstage/index.scss';
</style>
