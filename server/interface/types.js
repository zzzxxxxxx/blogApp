import Router from 'koa-router'
import Types from '../dbs/models/types'
import axios from './utils/axios'

let router = new Router({
  prefix: '/types'
})

router.get('/list', async (ctx) => {

})

router.post('/add', async (ctx) => {
  console.log(ctx.request.body)
  let {typesName, explain} = ctx.request.body
  let ntypes = await Types.create({typesName, explain})
  if(ntypes) {
    ctx.body = {
      code: 0,
      msg: '添加成功啦'
    }
  }else {
    ctx.body = {
      code: -1,
      msg: '添加失败了'
    }
  }
})

router.post('/getTypes', (ctx) => {
  let resultTypes = Types.find()
  ctx.body = {
    code: 0,
    result
  }
})

export default router;
