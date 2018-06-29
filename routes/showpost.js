const Router = require('koa-router');
const postCtl = require('./controller/showpost.contorller')
const router = new Router();

router.get('/showpost', postCtl.showPost)

module.exports = router