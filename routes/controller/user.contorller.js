const userModel = require('../../models/user')
const fs = require('fs')

exports.Signup = async (ctx) => {
    let data = ctx.request.body

    let backupData = {}
    await userModel.findOne({username: data.username}, (error, result) => {
        if (!result) {
            new userModel(data).save();
            backupData.exist = false
        } else {
            backupData.exist = true;
            (result.password == data.password) ? backupData.verify = true : backupData.verify = false;
        }
        // 设置cookie暴露你他妈的账号和密码嘻嘻嘻
        ctx.cookies.set(`username`,`${data.username}`, {httpOnly: false});

        ctx.body = backupData
        ctx.response.status = 200;
    })
}

exports.Render = ctx => {
    const fuckfs = fs.readFileSync('./views/index.html', 'utf-8')
    ctx.body = fuckfs
}