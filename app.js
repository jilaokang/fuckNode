const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/fucknodejs');

// Schema:定义数据结构
const BlogPost = new Schema({
    author: String,
    title: String,
    body: String,
    date: Date
})

// Model：具体的增删改查实现
const myBlogPost = mongoose.model('BlogPost', BlogPost)

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