//console.log(arguments);

// console.log(__dirname);
// console.log(__filename);

var Module = require("module");
  
(function (varx) {
  Module.wrap = function (message) {
    message = "console.log('modifiedMWF');" + message;
  
    return varx(message);
  };
})(Module.wrap);
  
require("./myfile.js");

