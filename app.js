const mongoose = require('mongoose')
const config = require('./config/config')

const Post = require('./models/post')
const UserUser = require('./models/user')

mongoose.connect(config.mongodb);

console.log(User)

// Model实例化
// const post = new Post({
//     author: 'kaso',
//     title: 'fuck node js',
//     body: 'nodejs is so hard',
//     data: new Date()
// })

// 执行操作
// post.save()


const kaso = new User({
    user: 'kaso',
    password: 'fucknodejs'
})

kaso.save()

const koa = require('koa')

const app = new koa();

const PORT = 3000;


app.listen(PORT, function (err) {
    if (err) throw err;
    console.log(`Server has benn start on ${PORT}`)
})