const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const userData = mongoose.model("User", userSchema)
module.exports = userData
