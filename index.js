import Koa from 'koa';
const app = new Koa();
const PORT = 3000;

app.use(async function(ctx){
  ctx.body = 'Hello World';
});

console.log(`running: ${PORT}`); 

app.listen(PORT);