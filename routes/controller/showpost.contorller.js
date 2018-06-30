const fs = require('fs')
const PostModel = require('../../models/post')

exports.showPost = async (ctx) => {
    const fuckfs = fs.readFileSync('./views/post/showPost.html', 'utf-8')

    ctx.body = fuckfs
    ctx.status = 200
}

exports.accessData = async (ctx) => {
    const result = await PostModel.find()

    ctx.body = result

}