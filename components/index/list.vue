<template>
  <div class="m-list">
    <el-row class="blog-list container-box" v-for="(item,index) in blogs" :key="item.id">
      <h3 class="titleFont">
        <nuxt-link class="title-hover" :to="'/models/article?keyword=' + encodeURIComponent(item.title)">{{item.title}}</nuxt-link>
      </h3>
      <p class="blogs-content">
        摘要：{{item.content}}
        <nuxt-link :to="'/models/article?keyword=' + encodeURIComponent(item.title)">阅读全文</nuxt-link>
      </p>
      <div class="blogs-footer">
        <span class="blog-time">{{item.time}}</span>
        <!-- <span class="blog-author">柒夜</span>
        <span class="read-num">阅读({{ item.readNum }})</span>
        <span class="comment-num">评论({{ item.commentNum }})</span>
        <nuxt-link to="">评论</nuxt-link> -->
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "",
  data: function() {
    return {
      blogs: []
    }
  },
  async mounted() {
    //do something after mounting vue instance
    let self = this;
    await self.$axios.get('/render/article').then(({status, data}) => {
      if(status === 200) {
        if(data && data.code === 0) {
          console.log(data.result)
          self.blogs = data.result
        }
      }else{
        console.log(`服务器错误${status}`);
      }
    })
  }
}
</script>
<style lang="scss">
@import '@/assets/css/index/list.scss';
</style>
