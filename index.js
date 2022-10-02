const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

ourReadStream.on('data', (chunk) => {
  // every chunk is a buffer
  console.log(chunk?.toString());
});
