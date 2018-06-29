const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Schema:定义数据结构
const BlogPost = new Schema({
    author: String,
    title: String,
    body: String,
    date: Date
})

// Model：具体的增删改查实现
// model('数据库中的表名', 图表模式)
module.exports = Post = mongoose.model('BlogPost', BlogPost)