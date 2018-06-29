const Router = require('koa-router');
const router = new Router();

router.get('/post', (ctx, next) => {
    ctx.body = 'post'
})

module.exports = router