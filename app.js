const http = require('http'),
    fs = require('fs'),
    path = require('path');

const hostname = 'connectmymind.ddns.net';
const port = 80;
const server = http.createServer((req, res) => {
    const { method, url } = req;
    const surl = new URL(url, 'http://connectmymind.ddns.net/');
    if (method == 'GET' && surl.pathname == '/') {
        fs.readFile('./client/connect-my-mind/src/app.js', function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
        });
        return;
    }
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404;
    res.end(`Not found1:`);
    return;
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});