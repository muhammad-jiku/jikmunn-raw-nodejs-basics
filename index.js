const fs = require('fs');

const ourReadStream = fs.createReadStream('./bigData.txt', 'utf-8');

ourReadStream.on('data', (data) => {
  // every chunk is a buffer
  //   console.log(chunk);
  console.log(data);
});
