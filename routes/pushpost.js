const Router = require('koa-router')
const router = new Router()
const pushPostCtl = require('./controller/pushpost.contorller')

const checkLogin = require('../middleware/check').checkLogin

router.get('/pushpost', checkLogin, pushPostCtl.Render)
router.post('/pushpost', checkLogin, pushPostCtl.PushPost)

module.exports = router