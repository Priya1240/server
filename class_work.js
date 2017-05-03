
var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {

	response.end("You're a rock star!");
	response.end("You are a good developer");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

	console.log("Server listening!");
})

