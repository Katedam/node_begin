//requires the http module that ships with node.js and makes it accessible through 'http'
var http = require('http');

//createServer() is a function offered by http. This function returns an
// object, and this object has a method named listen, and takes a numeric value which indicates the
// port number our HTTP server is going to listen on

// http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World!");
//     response.end();
// }).listen(8888);

//asynchronous 
//request and response are objects and they have methods that handle the details of the HTTP request and to respond
// function onRequest(request, response) {
//     console.log("Request received. ");
    // Whenever a request is received, it uses the response.writeHead()
    // function to send an HTTP status 200 and content-type in the HTTP response header, and the
    // response.write() function to send the text “Hello World” in the HTTP response body
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.write('Hello World');
//     response.end();
// }

// http.createServer(onRequest).listen(8888);

// console.log('listening on port 8888');

//creating and exporting modules
function start() {
    function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("listening on 8888");
}

exports.start = start;