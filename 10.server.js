const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/word' });
    res.write('<h1> World!</h1>');
    res.end();
})

server.listen(5000, "localhost", () => {
    console.log(`Server started on the Port No 5000`)
})