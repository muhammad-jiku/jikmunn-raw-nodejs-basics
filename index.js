const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<html><head><title>FORM</title></head>');
    res.write(
      '<body><form method="post" action="/process"><input type="text" name="message" placeholder="message" /></form></body>'
    );

    res.end();
  } else if (req.url === '/process' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      console.log(chunk?.toString());
      body.push(chunk);
    });
    req.on('end', () => {
      console.log('Stream Finished');
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.write('Thank YOU!');
      res.end();
    });
  } else {
    res.write('DEADPOOL x WOLVERINE');
    res.end();
  }
});

const port = process.env.PORT || 5001;

// server.on('connection', () => {
//   console.log('listening to an event...in http!!');
// });

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
