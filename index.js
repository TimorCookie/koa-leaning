// const koa = require('koa')

// const app = new koa()
// const router = require('koa-router')()
// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })
// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })
// app.use(router.routes())
// app.use((ctx, next) => {
//   ctx.body = [
//     { name: 'tom' }
//   ]
//   next()
// })

// app.listen(3000)

// 简单实现
const JKoa = require('./JKoa')
const app = new JKoa()

app.use((ctx) => {
  ctx.body = 'hello, timokie'
});

app.listen(8081, () => {
  console.log("app is starting at http://localhost:8081");
})