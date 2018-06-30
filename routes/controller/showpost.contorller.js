const fs = require('fs')
const PostModel = require('../../models/post')

exports.showPost = async (ctx) => {
    ctx.body = fs.readFileSync('./views/post/showPost.html', 'utf-8')
}

exports.accessData = async (ctx) => {
    ctx.body =  await PostModel.find()
}