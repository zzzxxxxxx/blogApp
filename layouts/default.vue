<template>
  <el-container>
    <el-header>
      <my-header/>
    </el-header>
    <el-container class="center">
      <el-aside width="230px">
        <my-aside/>
      </el-aside>
        <el-main>
          <nuxt />
        </el-main>
    </el-container>
    <!-- 底部 -->
    <el-footer></el-footer>
    <el-backtop></el-backtop>
  </el-container>
</template>
<script>
import MyHeader from '@/components/public/header/index.vue'
import MyAside from '@/components/public/aside/index.vue'
  export default {
    components: {
      MyHeader,
      MyAside
    }
  }
</script>
<style>
</style>
