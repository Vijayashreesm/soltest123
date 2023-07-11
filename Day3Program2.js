const http = require ('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 8081;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type','text/plain');
fs.readFile('./Day3Program2.txt', null, function(error, data) {
	if(error) {
		res.writeHead(404);
		res.write('file not found');
	}
	else
	{
		res.write(data);
	}
	res.end();
});
});
server.listen(port, hostname, () => {
console.log('Server running a http://${hostname}:${port}/');
});