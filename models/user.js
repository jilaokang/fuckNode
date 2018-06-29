const mongoose = require('mongoose')
// schema：图表，模式
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    password: String
})

module.exports = User = mongoose.model('User', UserSchema)