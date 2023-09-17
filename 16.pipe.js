// Accessing fs module
var fs = require("fs");
 
var readable = fs.createReadStream('./files/input.txt');
 
var writable = fs.createWriteStream('./files/output.txt');
 
readable.pipe(writable);
 
console.log("Program Finished");



