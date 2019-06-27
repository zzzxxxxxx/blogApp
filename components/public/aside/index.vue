<template>
  <div class="m-aside">
    <el-row>
      <aside-search/>
    </el-row>
    <el-row>
      <aside-category/>
    </el-row>
    <el-row>
      <aside-about/>
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
