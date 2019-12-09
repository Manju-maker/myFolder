const mongoose = require('mongoose');
var fields = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
});

module.exports=mongoose.model('user',fields);