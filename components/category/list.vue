<template>
  <div class="category-list container-box">
    <el-row>
      <h2 class="category-title">随笔分类 - {{articleType}}</h2>
    </el-row>
    <el-row class="category-blogs" v-for="(item, index) in blogs" :key="item.id">
      <h3 class="category-blogs-title">
        <nuxt-link class="title-hover" :to="'/models/article?keyword=' + encodeURIComponent(item.title)">{{item.title}}</nuxt-link>
      </h3>
      <p class="category-blogs-content">摘要：{{item.content}}
        <nuxt-link :to="'/models/article?keyword=' + encodeURIComponent(item.title)">阅读全文</nuxt-link>
      </p>
      <div class="category-blogs-footer">
        <span class="">{{item.time}}</span>
        <span class="">{{item.author}}</span>
        <span class="">阅读({{item.readNum}})</span>
        <span class="">评论({{item.commendNum}})</span>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "",
  props: ['childBlogs'],
  data: function() {
    return {
      blogs: this.childBlogs
    }
  },
  watch: {
    childBlogs: function() {
      this.blogs = this.childBlogs
    }
  },
  computed: {
    articleType: function() {
      return this.blogs[0].articleType
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/category/list.scss';
</style>
