const fs = require('fs');

// creating a synchornise file
fs.writeFileSync('myFirstFile.txt', 'Dadu!! I LOVE YOOU!!');
// appeniding to the file
fs.appendFileSync('myFirstFile.txt', ' and also DADA');

// reading file
const readData = fs.readFileSync('myFirstFile.txt');
console.log(readData);
console.log(readData?.toString());
