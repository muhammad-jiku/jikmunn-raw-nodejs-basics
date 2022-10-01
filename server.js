const http = require('http');

const server = http.createServer((req, res) => {
  res.write(
    'RYAN: hey, hugh! wanna play WOLVERINE one more time?\nHUGH: yeah! SURE!! ryan!'
  );
  res.end();
});

const port = process.env.PORT || 5000;

server.on('connection', () => {
  console.log('listening to an event...in http!!');
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
