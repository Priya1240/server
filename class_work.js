
var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequestOne(request, response) {

	response.end("You're a rock star!");
	
}

function handleRequestTwo(request, response) {

	
	response.end("Bad Priya!");
}

var server = http.createServer(handleRequestOne);

server.listen(PORT1, function() {

	console.log("Server One listening!");
});

var server = http.createServer(handleRequestTwo);

server.listen(PORT2, function() {

	console.log("Server Two listening!");
})



var good = ["You're Great!", "You're Amazing", "You're the bomb!", "You're Awesome!"];







