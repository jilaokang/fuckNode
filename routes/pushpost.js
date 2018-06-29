const Router = require('koa-router')
const router = new Router()
const pushPostCtl = require('./controller/pushpost.contorller')

router.get('/pushpost',pushPostCtl.Render)

module.exports = router