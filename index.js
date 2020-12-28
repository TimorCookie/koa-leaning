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

// app.use((ctx) => {
//   ctx.body = 'hello, timokie'
// });
const delay = () => new Promise(resolve => setTimeout(() => resolve(), 2000));
app.use(async (ctx, next) => {
  ctx.body = "1";
  await next();
  ctx.body += "5";
});
app.use(async (ctx, next) => {
  ctx.body += "2";
  await delay();
  await next();
  ctx.body += "4";
});
app.use(async (ctx, next) => {
  ctx.body += "3";
});

// 以上输出“12345”
app.listen(8081, () => {
  console.log("app is starting at http://localhost:8081");
})