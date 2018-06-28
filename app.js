const mongoose = require('mongoose')
const config = require('./config/config')
const myBlogPost = require('./models/post')

mongoose.connect(config.mongodb);

// Model实例化
const post = new myBlogPost({
    author: 'kaso',
    title: 'fuck node js',
    body: 'nodejs is so hard',
    data: new Date()
})
// 执行操作
post.save()

const koa = require('koa')

const app = new koa();

const PORT = 3000;


app.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`Server has benn start on ${PORT}`)
})