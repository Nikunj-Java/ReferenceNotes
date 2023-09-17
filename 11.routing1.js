const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {

    const url = req.url;
    if (url === '/about') {
        fs.readFile("./pages/about.html", (err, fileContent) => {
            if(err){
                throw err;
            }
            res.end(fileContent);
        });
    } else if (url === '/contact') {
        fs.readFile("./pages/contact.html", (err, fileContent) => {
            if(err){
                throw err;
            }
            res.end(fileContent);
        });
    } else {
        res.write('Hello World!');
        res.end();
    }
})
server.listen(5000, function () {
    console.log("server start at port 5000");
});


