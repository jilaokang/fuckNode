const userModel = require('../../models/user')
const fs = require('fs')

exports.Signup = async (ctx) => {
    let data = ctx.request.body

    await userModel.findOne({username: data.username}, (error, result) => {
        if (!result) {
            new userModel(data).save();
            ctx.body = {success: true}
        } else {
            ctx.body = {success: false}
        }

        console.log(result);
        ctx.response.status = 200
    })
}

exports.Render = ctx => {
    const fuckfs = fs.readFileSync('./views/index.html', 'utf-8')
    ctx.body = fuckfs
}