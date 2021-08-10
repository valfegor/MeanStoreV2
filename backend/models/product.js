const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:String,
    price:Float,
    code:Integer,
    description:String,
    date:{type:Date , default:Date.now},
    bdstatus:Boolean,
});

const product = mongoose.model('product',productSchema);

module.exports = product;