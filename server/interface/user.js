import Router from 'koa-router';
import Redis from 'koa-redis';
import User from '../dbs/models/user'
import Passport from './utils/passport';
import axios from './utils/axios';

let router = new Router({
  prefix: '/user'
})

let Store = new Redis().client

router.post('/signin', async (ctx, next) => {
  console.log(ctx.request.body)
  return Passport.authenticate('local', function(err, user, info, status) {
    if(err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    }else {
      if(user) {
        ctx.body = {
          code: 0,
          msg: '登录成功',
          user
        }
        return ctx.login(user)
      }else {
        ctx.body = {
          code: 1,
          msg: info
        }
      }
    }
  })(ctx, next)
})

export default router
