const fs = require('fs')

exports.showPost = async (ctx) => {
    const fuckfs = fs.readFileSync('./views/post/showPost.html','utf-8')

    ctx.response.body = fuckfs
}