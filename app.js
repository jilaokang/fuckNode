const config = require('./config/config')

// 数据库配置
const mongoose = require('mongoose')
const Post = require('./models/post')
const UserUser = require('./models/user')

mongoose.connect(config.mongodb);

const koa = require('koa')
const app = new koa();

// body数据解析
const koaBody =require('koa-body')
app.use(koaBody())

// session
const session = require('koa-session')

// 路由配置
const userRouter = require('./routes/user')
const postRouter = require('./routes/showpost')
const pushpostRouter = require('./routes/pushpost')
const error404Router = require('./routes/404')
app.use(userRouter.routes())
app.use(postRouter.routes())
app.use(pushpostRouter.routes())
app.use(error404Router.routes())

app.listen(config.PORT, function (err) {
    if (err) throw err;
    console.log(`Server has benn start on ${config.PORT}`)
})