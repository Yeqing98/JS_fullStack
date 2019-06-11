const router = require('koa-router')();

router.get('/signin', async (ctx) => {
    ctx.body = 'signin page';
})