http = require('http');

const routeHandler = require('./routes/router');

const server = http.createServer(routeHandler);

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});


