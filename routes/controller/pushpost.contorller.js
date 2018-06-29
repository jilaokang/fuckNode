const fs = require('fs')

exports.Render = async (ctx) => {
    const fuckfs = fs.readFileSync('./views/post/pushPost.html','utf-8')

    ctx.response.body = fuckfs
}