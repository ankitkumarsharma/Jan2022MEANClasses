// add express js module
var express = require('express');
var app = express();

var hello = require('./hello.js');

app.use('/hello', hello);
// send data // app.get(route,callback)
app.get('/', function(req,res){
    res.send("helllll");
});

// listing server
app.listen(3000, ()=>{
    console.log('Server is running')
});
