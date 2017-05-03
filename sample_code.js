//Here we require/import the http module
var http = require("http");

//Here we define aport to listen to
var PORT = 8080;

//Her we create a general request to handle request and responses
function handleRequest(request, response) {

	//The below statement is triggered (client-side) whent he user visits the PORT URL
	response.end("It works!! Path hit: " + request.url);
}

//Here we use the Node HTTP package to create our server.
//We then pass it the handleRequest function to empower it with functionality
var server = http.createServer(handleRequest);


//Here we start our server so that it can begin to listen to client request
server.listen(PORT, function() {

	//The below statement is triggered (server-side) when a user visits the PORT URL
	console.log("Server listening on: http://localhost:%s", PORT);
});