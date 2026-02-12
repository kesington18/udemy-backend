const http = require('http');

const routes = require("./routes.js");

console.log(routes.sometext);

const server = http.createServer(routes.handle || routes);


server.listen(3100);
