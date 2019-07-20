<template>
  <div class="m-aside">
    <el-row>
      <!-- <aside-search class="container-box"/> -->
    </el-row>
    <el-row>
      <aside-category class="container-box"/>
    </el-row>
    <el-row>
      <aside-about class="container-box"/>
    </el-row>
  </div>
</template>
<script>
import AsideCategory from '@/components/public/aside/category.vue'
import AsideSearch from '@/components/public/aside/search.vue'
import AsideAbout from '@/components/public/aside/about.vue'
export default {
  name: "",
  data: function() {
    return {

    }
  },
  components: {
    AsideCategory,
    AsideSearch,
    AsideAbout
  }
}
</script>
<style lang="scss">
@import '@/assets/css/public/aside/index.scss';
</style>
