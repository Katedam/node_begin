var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received');
        // EXPECT the encoding of the received data to be UTF-8
        request.setEncoding("utf8");
        
        // STEP-by-step the listener fills 'postData with new chunks of data
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+
            postDataChunk + "'.");
        });

        // ROUTER is only called once all data is gathered so it's in the end event
        request.addListener("end", function() {
            route(handle, pathname, response);
        });

        // response.writeHead(200, {"Content-Type": "text/plain"});
    }

    //createServer() is a function offered by http. This function returns an
    // object, and this object has a method named listen, 
    // and takes a numeric value which indicates the
    // port number our HTTP server is going to listen on
    http.createServer(onRequest).listen(8888);
    console.log("listening on 8888");
}

exports.start = start;
