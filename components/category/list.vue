<template>
  <div class="category-list container-box">
    <el-row>
      <h2 class="category-title">随笔分类 - Gulp</h2>
      <p class="category-name">前端自动化工具</p>
    </el-row>
    <el-row class="category-blogs" v-for="(item, index) in blogs" :key="item.id">
      <h3 class="category-blogs-title">
        <nuxt-link to="">{{item.title}}</nuxt-link>
      </h3>
      <p class="category-blogs-content">摘要：{{item.content}}
        <nuxt-link to="">阅读全文</nuxt-link>
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
  data: function() {
    return {
      blogs: [{
        id: '0001',
        title: '水调歌头·明月几时有',
        content: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？(何似 一作：何时；又恐 一作：惟 / 唯恐)转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。',
        time: '2017-06-24 15:10',
        author: '柒夜',
        readNum: '521',
        commendNum: '123'
      },{
        id: '0002',
        title: '水调歌头·明月几时有',
        content: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？(何似 一作：何时；又恐 一作：惟 / 唯恐)转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。',
        time: '2017-06-24 15:10',
        author: '柒夜',
        readNum: '521',
        commendNum: '123'
      }]
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/category/list.scss';
</style>
