<template>
  <el-container>
    <el-header>
      <MyHeader/>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
        <el-main>
          <nuxt />
        </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
  import MyHeader from '@/components/public/header/index.vue'
  export default {
    components: {
      MyHeader
    }
  }
</script>
<style>
</style>
