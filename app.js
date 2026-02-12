const http = require('http');

const routes = require("./routes.js");

console.log(routes.sometext);

const server = http.createServer(routes.handle || routes);

server.on('error', (err) => {
	if (err && err.code === 'EADDRINUSE') {
		console.error('Port 3000 is already in use.');
		process.exit(1);
	}
	console.error(err);
});

server.listen(3100);
