var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var query1 = url.parse(req.url, true).query;
    var content = query1.abc + " "+query1.xyz;
    res.end(content);
}).listen(8080);
