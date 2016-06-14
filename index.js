const https = require('https');
const fs = require('fs');
const Koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');
const app = new Koa();

const PORT = 3000;

app.use(router.routes())
app.use(serve('client/dev'))

router
  .get('/wtf', function *() {
    this.body = {"wtf": true};
  });

const opts = {
  key: fs.readFileSync(__dirname + '/cert/server.key'),
  cert: fs.readFileSync(__dirname + '/cert/server.crt')
}

https.createServer(opts, app.callback()).listen(PORT);

console.log(`running: ${PORT}`);
