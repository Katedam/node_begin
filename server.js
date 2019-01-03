//requires the http module that ships with node.js and makes it accessible through 'http'
var http = require('http');

//createServer() is a function offered by http. This function returns an
// object, and this object has a method named listen, and takes a numeric value which indicates the
// port number our HTTP server is going to listen on
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!");
    response.end();
}).listen(8888);