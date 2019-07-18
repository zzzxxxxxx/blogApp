const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

import bodyParse from 'koa-bodyparser';
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import json from 'koa-json';

import passport from './interface/utils/passport'

import mongoose from 'mongoose';
import dbConfig from './dbs/config';

// 引入路由
import articles from './interface/article'
import users from './interface/user'

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  app.keys = ['7yuer', 'keyskeys']
  app.proxy = true

  // session处理
  app.use(session({
    key: '7yuer',
    prefix: '7yuer:uid',
    store: new Redis()
  }))

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  app.use(bodyParse({
    extendTypes: ['json', 'form', 'text']
  }))
  app.use(json())


  //连接数据库
  mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
  })
  app.use(passport.initialize())
  app.use(passport.session())
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(articles.routes()).use(articles.allowedMethods())
  app.use(users.routes()).use(users.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })



  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
