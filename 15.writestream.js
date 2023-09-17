var fs = require("fs");
var data = 'This is My Sample Data';

// Create a writable stream
var writerStream = fs.createWriteStream('./files/output.txt');
writerStream.write(data);
writerStream.end();
writerStream.on('finish', function() {
   console.log("Write completed.");
});
writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Finished");

