const path = require('path');

const myPath= '/Users/sonam/myfile.js';
//Properties
console.log(path.delimiter);
//console.log(path.posix);
console.log(path.sep);
//console.log(path.win32);

const filename = path.basename(myPath);
console.log(filename);
console.log(path.dirname(myPath))
//extention
console.log(path.extname('index.html'));
console.log(path.extname('app.js'));
console.log(path.extname('image.jpeg'));

//format
let formattedPath = path.format({
    dir: 'project\\main\\js',
    base: 'logic.js'
});

console.log("Formated path: "+formattedPath);

//absolute
let result = path.isAbsolute('C:\\node.js\\');
console.log(result); // true

result = path.isAbsolute('C:/node.js/');
console.log(result); // true

result = path.isAbsolute('/myfile.js');
console.log(result); // true

result = path.isAbsolute('images/');
console.log(result); // false

//Join multiple string and create path
let pathToDir = path.join('/script', 'js', 'dist', 'script.js');
console.log(pathToDir);
//Parse
let pathObj = path.parse('d:/sonam/js/app.js');
console.log(pathObj);
//normalize is normalize path from multiple // to /
let normalizedPath = path.normalize('C:\\ecommerce//module/js///dist');
console.log(normalizedPath);
//relative compare 2 path and returns the second parameters relative path
let relativePath = path.relative('/project/module/test/config/','/project/module/js/')
console.log(relativePath);// ../../js

//resolve accepts path and return it to its absolte path
//if don't pass anything then it will return current dir path
console.log(path.resolve());
console.log(path.resolve("/dist/js/script.js"));

path1 = path.resolve("assignment1", "index.html");
console.log(path1)

path2 = path.resolve("assignment1", "js", "app.js");
console.log(path2)

path3 = path.resolve("/assignment1/pages", "about.html");
console.log(path3);
