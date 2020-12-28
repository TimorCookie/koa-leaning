var http = require('http');

class JKoa {
  listen(...args) {
    console.log('传入的参数',args)
    const server = http.createServer((req, res)=> {
      this.callback(req, res)
    })
    server.listen(...args)
  }
  use(callback) {
    this.callback = callback
  }
}
module.exports= JKoa