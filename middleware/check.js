module.exports = {
    checkLogin: (ctx, next) => {
        if (!ctx.cookies.get('username')) {
            ctx.response.redirect('/')
        }
        next()
    },
    checkNotLogin: (ctx, next) => {
        if (ctx.cookies.get('username')) {
            ctx.response.redirect('/showpost')
        }
        next()
    }
}