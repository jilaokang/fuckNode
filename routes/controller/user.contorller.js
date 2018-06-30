const userModel = require('../../models/user')
const fs = require('fs')

exports.Signup = async (ctx) => {
    let data = ctx.request.body

    let backupData = {}
    await userModel.findOne({
        username: data.username
    }, (error, result) => {
        if (!result) {
            new userModel(data).save();
            backupData.exist = false
        } else {
            backupData.exist = true;
            (result.password == data.password) ? backupData.verify = true: backupData.verify = false;
        }


        ctx.body = backupData
        // 设置cookie暴露你他妈的账号和密码嘻嘻嘻
        var millisecond = new Date().getTime();
        var expiresTime = new Date(millisecond + 6* 1000 * 1);

        ctx.cookies.set(`username`, `${data.username}`, {
            httpOnly: false,
            expires: expiresTime,
        });

    })
}

exports.Render = ctx => {
    ctx.body = fs.readFileSync('./views/index.html', 'utf-8')
}

exports.delCookie = ctx => {
    ctx.cookies.set(`username`, null);
}