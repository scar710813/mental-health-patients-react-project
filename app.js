const http = require('http'),
    fs = require('fs'),
    path = require('path');

const hostname = '10.138.0.2';
const port = 80;
const server = http.createServer((req, res) => {
    const { method, url } = req;
    const surl = new URL(url, 'http://connectmymind.ddns.net/');
    if (method == 'GET' && surl.pathname == '/favicon.ico') {
        fs.readFile('/home/alexander_i_bakalov/ConnectMyMind/ConnectMyMind/client/connect-my-mind/public/favicon.ico', function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'image/x-icon' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/') {
        fs.readFile('/home/alexander_i_bakalov/ConnectMyMind/ConnectMyMind/client/connect-my-mind/public/index.html', function (err, html) {
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
    res.end(`Not found:`);
    return;
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});