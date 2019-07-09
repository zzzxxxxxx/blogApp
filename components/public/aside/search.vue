<template>
  <div class="aside-search area">
    <h3>搜索</h3>
    <el-row class="search-area">
      <el-col :span="16">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" class="searchBtn">搜一哈</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "",
  data: function() {
    return {
      input: ''
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/public/aside/search.scss';
</style>
