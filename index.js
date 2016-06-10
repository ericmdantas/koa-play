const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const PORT = 3000;

app.use(router.routes())

router.get('/', function *() {
    this.body = "wtf";
  });

app.listen(PORT);

console.log(`running: ${PORT}`);
