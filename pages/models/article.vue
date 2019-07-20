<template>
  <div class="models-article">
    <h4 class="article-title">{{ blogArticle.title }}</h4>
    <el-row class="article-content" v-html="blogArticle.content"></el-row>
  </div>
</template>
<script>
export default {
  name: "",
  data: function() {
    return {
        blogArticle: {}
    }
  },
  watchQuery: ['keyword'],
  async asyncData(ctx) {
    let keyword = ctx.query.keyword;
    let {data} = await ctx.$axios.get('/render/getArticle', {
      params: {
        keyword
      }
    })
    return {
      blogArticle: data.result
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/models/index.scss';
</style>
