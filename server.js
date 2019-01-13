var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received');
    // EXPECT the encoding of the received data to be UTF-8
    route(handle, pathname, response, request);
  }

  //createServer() is a function offered by http. This function returns an
  // object, and this object has a method named listen, 
  // and takes a numeric value which indicates the
  // port number our HTTP server is going to listen on
  http.createServer(onRequest).listen(8888);
  console.log('listening on 8888');
}

exports.start = start;
