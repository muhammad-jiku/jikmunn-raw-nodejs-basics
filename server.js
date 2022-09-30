const fs = require('fs');

// creating a synchornise file
fs.writeFileSync('myFirstFile.txt', 'Dadu!! I LOVE YOOU!!');
// appeniding to the file
fs.appendFileSync('myFirstFile.txt', ' and also you DADA!!');

// reading file synchroniselly
const readData = fs.readFileSync('myFirstFile.txt');
console.log(readData);
console.log(readData?.toString());

// reading file asychorisely
fs.readFile('myFirstFile.txt', (err, data) => {
  console.log(data);
  console.log(data?.toString());
});
