const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express('./router');

mongoose.connect('mongodb://localhost:27017/databaseManju',{useNewUrlParser:true});


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);
app.use('/',router);

var server = app.listen(8081,(req,res)=>{
    var host = server.address().address,
    var port = server.address().port
    console.log('Myserver is running at '+ port);
})