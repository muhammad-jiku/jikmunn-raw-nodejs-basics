const path = require('path');
const myPath = 'D:\back-end\1_node.js_basics_raw nodejs';

console.log(path?.basename(myPath));
console.log(path?.dirname(myPath));
console.log(path?.extname(myPath));
console.log(path?.isAbsolute(myPath));
console.log(path?.parse(myPath));
console.log(path?.normalize(myPath));
console.log(path?.toNamespacedPath(myPath));
