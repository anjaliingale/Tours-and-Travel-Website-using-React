const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    mobile:Number,
    password:String,
},{timestamps:true});
module.exports = mongoose.model('User',productSchema);