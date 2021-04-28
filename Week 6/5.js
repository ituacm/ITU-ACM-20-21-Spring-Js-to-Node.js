const fs = require("fs");

// Buffer

let b1 = Buffer.alloc(4);
console.log(b1);
b1.writeInt32BE(42);
console.log(b1);

// Fs

const ex = fs.readFileSync("example.txt");
console.log(ex);

const exStr = fs.readFileSync("example.txt", "utf8");
console.log(exStr);
