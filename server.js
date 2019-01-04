//requires the http module that ships with node.js and makes it accessible through 'http'
var http = require('http');
var url = require('url');

//creating and exporting modules
function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received');

        route(handle, pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        var content = route(handle, pathname);
        response.write(content);
        response.end();
    }

    //createServer() is a function offered by http. This function returns an
    // object, and this object has a method named listen, and takes a numeric value which indicates the
    // port number our HTTP server is going to listen on
    http.createServer(onRequest).listen(8888);
    console.log("listening on 8888");
}

exports.start = start;
