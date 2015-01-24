var http = require('http');
var port = 1337;
var hostname = 'localhost';

http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
	res.write('こんにちは！');
	res.end();
}).listen(port, hostname);

console.log('Server running at http://' + hostname + ':' + port + '/');
