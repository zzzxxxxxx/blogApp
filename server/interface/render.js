import Router from 'koa-router';
import Article from '../dbs/models/article'
import axios from './utils/axios';

let router = new Router({
  prefix: '/render'
})
router.get('/article', async (ctx) => {
  let result = await Article.find()
  for(let i=0; i<result.length; i++) {
    result[i].content = removeTAG(result[i].content);
  }
  ctx.body = {
    result,
    code: 0
  }
})

router.get('/searchArticleList', async (ctx) => {
  let result = await Article.find({articleType: ctx.query.types})
  for(let i=0; i<result.length; i++) {
    result[i].content = removeTAG(result[i].content);
  }
  ctx.body = {
    result
  }
})

router.get('/getArticle', async (ctx) => {
  let result = await Article.findOne({'title': ctx.query.keyword})
  ctx.body = {
    result
  }
})

//清除富文本编辑器存储内容的标签
function removeTAG(str){
    return str.replace(/<[^>]+>/g, "").substring(0, 123) + '...';
}

export default router
