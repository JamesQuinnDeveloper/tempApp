
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var MyReadStream = fs.createReadStream( 'main.html' , 'utf8');
  MyReadStream.pipe(res);
}).listen(8080);
console.log("listening on 8080")



