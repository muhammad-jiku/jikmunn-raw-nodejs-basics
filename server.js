const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write(
      'RYAN: hey, hugh! wanna play WOLVERINE one more time?\nHUGH: yeah! SURE!! ryan!'
    );
    res.end();
  } else if (req.url === '/deadpool') {
    res.write('RYAN: Thank you Kevin Feige!!\nHUGH: Love ya Kevin Feige!');
    res.end();
  } else {
    res.write('DEADPOOL x WOLVERINE');
    res.end();
  }
});

const port = process.env.PORT || 5000;

server.on('connection', () => {
  console.log('listening to an event...in http!!');
});

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
