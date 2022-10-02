const fs = require('fs');

const ourReadStream = fs.createReadStream('./bigData.txt');

ourReadStream.on('data', (chunk) => {
  // every chunk is a buffer
  console.log(chunk);
});
