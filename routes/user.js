const Router = require('koa-router');
const userCtl = require('./controller/user.contorller')
const router = new Router()

router.get('/', userCtl.Render)

router.post('/',userCtl.Signup)

module.exports = router