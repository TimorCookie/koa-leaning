var http = require('http');
// 导入这三个类
const context = require('./context')
const request = require('./request')
const response = require("./response")

class JKoa {
  constructor() {
    this.middlewares = []
  }
  listen(...args) {
    const server = http.createServer(async(req, res)=> {
      // 创建上下文
      let ctx = this.createContext(req, res)
      // 中间件合成
      const fn = this.compose(this.middlewares);
      await fn(ctx)
      // 响应
      res.end(ctx.body)
    })
    
    server.listen(...args)
  }
  use(callback) {
    // 将中间件加到数组里
    this.middlewares.push(callback)
  }
  createContext(req, res) {
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)

    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res

    return ctx
  }
  // 合成函数
  compose(middlewares) {
    return function(ctx) {
      return dispatch(0)
      function dispatch(i) {
        let fn = middlewares[i]
        if(!fn) {
          return Promise.resolve()
        }
        return Promise.resolve(fn(ctx, function next(){
          return dispatch(i+1)
        }))
      }
    }
  }
}
module.exports= JKoa