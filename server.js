var config = require('./amapa.json');
var url = require("url");
var http = require("http");
var querystring = require("querystring");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var s = querystring.parse(request.url)["s"];
    var t = querystring.parse(request.url)["t"];

    console.log("Request received.");

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html><html><head>");
    response.write("<title>Test</title>");
    response.write("</head><body>");
    response.write("<h1>Hello World</h1>");
    response.write("<p>Pathname <b>" + pathname + "</b></p>");
    response.write("<p>S <b>" + s + "</b></p>");
    response.write("<p>T <b>" + t + "</b></p>");
    response.write("</body></html>");
    response.end();
  }

  http.createServer(onRequest).listen(config.port, 'localhost');
  console.log("Server has started.");
}

exports.start = start;
