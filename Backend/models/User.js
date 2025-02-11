const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    phoneNumber : Number,
    companyName: String,
    websiteUrl : String
})


const User = mongoose.model('User', userSchema)

module.exports = User;