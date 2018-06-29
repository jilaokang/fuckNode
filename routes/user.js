const Router = require('koa-router');
const router = new Router()

router.get('/', (ctx, next) => {
    ctx.body = 'user'
})

module.exports = router