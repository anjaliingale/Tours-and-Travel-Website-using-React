const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String
},{timestamps:true});
module.exports = mongoose.model('User',productSchema);