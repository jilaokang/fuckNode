module.exports = {
    checkLogin: (ctx, next) => {
        console.log(ctx.cookies.get('username'))
        next()
    }
}