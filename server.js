const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf-8');
  myReadStream.pipe(res);
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
