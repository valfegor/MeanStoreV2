const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name:String,
    location:String,
    city:String,
    dbstatus:Boolean,
    date:{type:Date , default:Date.now},
});


const store = mongoose.model('store',storeSchema);

module.exports = store;