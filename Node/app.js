var http = require('http');
var port = 9000;

var server = http.createServer(function(req,res){
    console.log(req.url)
    res.write("<html><body><h1>"+req.url+"</h1></body></html>")
    res.end();
})

server.listen(9000);

/*MEAN
MERN*/
