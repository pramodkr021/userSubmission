const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FormSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    city:String,
    phone:{
        type: Number,
        required: true
    },
    email:{
        type : String,
        required: true,
        unique: true
    },
    password:{
        type : String,
        required: true
    },
    role: {
        type : String,
        default : 'user'
    } 
})

module.exports = mongoose.model("Form", FormSchema)