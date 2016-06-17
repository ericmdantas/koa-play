const https = require('https');
const fs = require('fs');
const Koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');
const app = new Koa();

const PORT = 3000;

class Ctrl {
  *go() {
    this.body = {wtf: true};
  }
}

app.use(router.routes())
app.use(serve(process.cwd() + '/client/dev'))

router
  .get('/wtf', new Ctrl().go);

const opts = {
  key: fs.readFileSync(process.cwd() + '/cert/server.key'),
  cert: fs.readFileSync(process.cwd() + '/cert/server.crt')
}

https.createServer(opts, app.callback()).listen(PORT);

console.log(`running: ${PORT}`);
