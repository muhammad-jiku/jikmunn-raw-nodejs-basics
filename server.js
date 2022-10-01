const http = require('http');

const server = http.createServer();

const port = process.env.PORT || 5000;

console.log('running http in server');
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
