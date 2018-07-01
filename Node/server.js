var http = require('http');
var express = require('express');
var app = express();
var port= 5600;

app.get('/', function(req,res){
    res.send("hiiiiii")
})


app.listen(5600);


