const http =require('http');
const port = 9090;	
const server = http.createServer((req, res) => {
	
	const a = 1;
	const b = 2;
	const c = a+b;
	res.setHeader('content-Type','text/plain'); //text/plain:: server is respondingwith text data
	res.end('The Value of c is'+c);
});

server.listen(port, () => {
	console.log(`server running at http://localhost:${port}`);
});