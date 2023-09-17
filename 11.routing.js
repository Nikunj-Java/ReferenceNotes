const http = require('http');

const server = http.createServer(function (req, res) {

    const url = req.url;
    if (url === '/info') {
        res.write(' Info Page Loaded');
        res.end();
    } else if (url === '/success') {
        res.write(' Welsome to my Success Page ');
        res.end();
    } else {
        res.write('Hello World!');
        res.end();
    }
})
server.listen(5000, function () {
    console.log("server start at port 5000");
});


