<template>
  <div class="aside-category area">
    <h3>我的标签</h3>
    <ul>
      <li v-for="(item, index) in tags" :key="index">
        <nuxt-link :to="'/category?types=' + item">{{item}}(0)</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "",
  data: function()  {
    return {
      tags: ['javascript', 'nodejs', 'vue', 'react']
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/public/aside/category.scss';
</style>
