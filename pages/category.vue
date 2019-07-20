<template>
  <div class="m-category">
    <category-list :childBlogs="list"/>
  </div>
</template>
<script>
import CategoryList from '@/components/category/list.vue';
export default {
  name: "",
  data: function() {
    return {
      list: []
    }
  },
  components: {
    CategoryList
  },
  watchQuery: ['types'],
  async asyncData(ctx) {
    let types = ctx.query.types
    let {data} = await ctx.$axios.get('/render/searchArticleList', {
      params:{
        types
      }
    })
    return {
      list: data.result
    }
  }
}
</script>
<style lang="scss">
</style>
