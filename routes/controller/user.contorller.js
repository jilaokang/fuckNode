const userModel = require('../../models/user')
const fs = require('fs')

exports.Signup = ctx => {
    console.log(ctx.request.body)
    ctx.response.status = 200
}

exports.Render = ctx => {
    const fuckfs = fs.readFileSync('./views/index.html', 'utf-8')
    ctx.body = fuckfs
}