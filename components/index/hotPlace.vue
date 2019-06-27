<template>
  <div class="m-hotPlace container-box">
    <el-row class="hotPlace-lis" v-for="(item, index) in hotPlaces" :key="item.id">
      <h3 class="titleFont">[置顶] {{ item.title }}</h3>
      <p class="blogs-content">
        摘要：{{item.content}}
        <nuxt-link to="">阅读全文</nuxt-link>
      </p>
      <div class="blogs-footer">
        <span class="blog-time">2018-12-10 00:47</span>
        <span class="blog-author">柒夜</span>
        <span class="read-num">阅读({{ item.readNum }})</span>
        <span class="comment-num">评论({{ item.commentNum }})</span>
        <nuxt-link to="">评论</nuxt-link>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    hotPlaces: [{
      id: '0001',
      title: '这是一个标题',
      content: '浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月。忽闻水上琵琶声，主人忘归客不发。寻声暗问弹者谁，琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴。千呼万唤始出来，犹抱琵琶半遮面。转轴拨弦三两声，未成曲调先有情。弦弦掩抑声声思，似诉平生不得志。低眉信手续续弹，说尽心中无限事。轻拢慢捻抹复挑，初为《霓裳》后《六幺》。大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。间关莺语花底滑，幽咽泉流冰下难。冰泉冷涩弦凝绝，凝绝不通声暂歇。别有幽愁暗恨生，此时无声胜有声。银瓶乍破水浆迸，铁骑突出刀枪鸣。曲终收拨当心画，四弦一声如裂帛。东船西舫悄无言，唯见江心秋月白。',
      readNum: '152',
      commentNum: '952'
    },{
      id: '0002',
      title: '这是一个标题',
      content: '浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月。忽闻水上琵琶声，主人忘归客不发。寻声暗问弹者谁，琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴。千呼万唤始出来，犹抱琵琶半遮面。转轴拨弦三两声，未成曲调先有情。弦弦掩抑声声思，似诉平生不得志。低眉信手续续弹，说尽心中无限事。轻拢慢捻抹复挑，初为《霓裳》后《六幺》。大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。间关莺语花底滑，幽咽泉流冰下难。冰泉冷涩弦凝绝，凝绝不通声暂歇。别有幽愁暗恨生，此时无声胜有声。银瓶乍破水浆迸，铁骑突出刀枪鸣。曲终收拨当心画，四弦一声如裂帛。东船西舫悄无言，唯见江心秋月白。',
      readNum: '152',
      commentNum: '952'
    }]
  })
}
</script>
<style lang="scss">
@import '@/assets/css/index/hotPlace.scss';
</style>
