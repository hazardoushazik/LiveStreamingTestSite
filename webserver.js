
var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var io = require('socket.io')(http) //require socket.io module and pass the http object (server)

http.listen(8080); //listen to port 8080

function handler (req, res) { //create server
	fs.readFile(__dirname + '/index.html', function(err, data) { //read file index.html in public folder
		if (err) {
		res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
		return res.end("404 Not Found");
		} 
		res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
		res.write(data); //write data from index.html
		return res.end();
	});
}

io.sockets.on('connection', function (socket) {// WebSocket Connection
});

process.on('SIGINT', function () { //on ctrl+c
console.log("0 RESET");
process.exit(); //exit completely
});