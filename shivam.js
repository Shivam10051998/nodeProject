const mongoose= require('mongoose')
const shivamSchema=new mongoose.Schema({
    name:String,
    age:Number
})

module.exports = mongoose.model('datalists',shivamSchema,'datalists')