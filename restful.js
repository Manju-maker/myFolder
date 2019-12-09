// var express = require('express');
// var app = express();
// var fs = require("fs");

// var user={
//     user4:{
//         "name":"Manju",
//         "password":"Passsword4",
//         "profession":"Engineer",
//         "id":4
//     }
// }

// app.post('/addUser', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//      data["user4"]=user["user4"];
//       console.log( data );
//       res.end( JSON.stringify(data));
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })

var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})