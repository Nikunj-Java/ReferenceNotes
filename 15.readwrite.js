var fs = require('fs');
var readableStream = fs.createReadStream('./files/input.txt');
var writableStream = fs.createWriteStream('./files/output.txt');

readableStream.on('data', function(chunk) {
   writableStream.write(chunk);
   console.log("Data Written Successfully")
});


