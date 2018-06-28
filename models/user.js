const mongoose = require('mongoose')
// schema：图表，模式
const Schema = mongoose.Schema

const UserSchema = new Schema({
    user: String,
    password: String
})

module.exports = new mongoose.model('User', UserSchema)
