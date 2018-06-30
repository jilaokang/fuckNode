const Router = require('koa-router');
const userCtl = require('./controller/user.contorller')
const router = new Router()

const checkNotLogin = require('../middleware/check').checkNotLogin

router.get('/', checkNotLogin, userCtl.Render)
router.post('/', userCtl.Signup)
router.delete('/', userCtl.delCookie)

module.exports = router