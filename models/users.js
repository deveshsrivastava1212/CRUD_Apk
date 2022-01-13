const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        maxlength:10,
        minlength:2
    },
    lastname:{
        type:String,
        required:true,
        minlength:2,
        maxlength:10
    },
    email :{
        type: String,
        required:true,
        minlength:11
    },
    age: {
        type:Number,
        require:true,
    },
    password: {
        type:String,
        required:true,
        minlength:2,
    },
    img: {
        type: String
    },
    isUser: {
        type:Boolean,
        default:true
    }
    
})

module.exports = {
    User:  mongoose.model('user', userSchema)
}