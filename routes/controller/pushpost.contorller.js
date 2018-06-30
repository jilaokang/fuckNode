const fs = require('fs')
const PostModel = require('../../models/post')

exports.Render = async (ctx) => {
    ctx.response.body = fs.readFileSync('./views/post/pushPost.html', 'utf-8')
}

exports.PushPost = async (ctx) => {
    const data = ctx.request.body
    new PostModel(data).save()
    ctx.status = 200
}