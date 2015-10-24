import Koa from 'koa';
import route from 'koa-route';
const app = new Koa();

const PORT = 3000;

app.use(async (ctx, next) => {
  ctx.body = 'a';
  next();
});

app.use(async (ctx, next) => {
  ctx.body += 'b';

  next();
});

app.use(async (ctx, next) => {
  ctx.body += ` - ${Date.now()}`;

  next();
});

app.use(async (ctx, next) => {
  let _old = ctx.body;
  ctx.body = {msg: `${Date.now()}`};

  next();
});

app.listen(PORT);

console.log(`running: ${PORT}`);
