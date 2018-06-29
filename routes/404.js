const Router = require('koa-router')
const router = new Router()
const fs = require('fs')

router.get('/*', async (ctx) => {
    ctx.body = fs.readFileSync('./views/error/404.html', 'utf-8')
})

module.exports = router