const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    twilioauth = require('./video-auth');

const hostname = '10.138.0.2';
const port = 80;
const server = http.createServer((req, res) => {
    const { method, url } = req;
    const surl = new URL(url, 'http://connectmymind.ddns.net/');
    if (method == 'GET' && surl.pathname.startsWith('/static')) {
        let fileName = surl.pathname.substring(11);
        let extention = fileName.substring(fileName.lastIndexOf('.') + 1);
        let oldExtention;
        if (extention == "map" && surl.pathname.slice(-6) == "ss.map") {
            oldExtention = extention
            extention = "css"
        } else if (extention == "map" && surl.pathname.slice(-6) == "js.map") {
            oldExtention = extention
            extention = "js"
        } else if (extention == "otf") {
            oldExtention = extention;
            extention = "media"
            fileName = fileName.substring(4)
        }
        fs.readFile('/home/alexander_i_bakalov/ConnectMyMind/ConnectMyMind/client/connect-my-mind/build/static/' + extention + '/' + fileName, function (err, html) {
            if (err) {
                throw err;
            }
            if (oldExtention == undefined){
                res.writeHead(200, { 'Content-Type': 'text/' + extention});
            } else if (oldExtention == "otf") {
                res.writeHead(200, { 'Content-Type': 'application/x-font-opentype'});
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json'});
            }
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/identity') {
        let searchParams = surl.searchParams;
        let user = searchParams.get('user');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ accessToken: twilioauth.getAccessToken(user) }));
        res.end();
        return;
    }
    if (method == 'GET' && surl.pathname == '/favicon.ico') {
        fs.readFile('/home/alexander_i_bakalov/ConnectMyMind/ConnectMyMind/client/connect-my-mind/build/favicon.ico', function (err, html) {
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
        fs.readFile('/home/alexander_i_bakalov/ConnectMyMind/ConnectMyMind/client/connect-my-mind/build/index.html', function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/manifest.json') {
        fs.readFile('/home/alexander_i_bakalov/ConnectMyMind/ConnectMyMind/client/connect-my-mind/build/manifest.json', function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(html);
            res.end();
        });
        return;
    }
    if (method == 'GET' && surl.pathname == '/fontawesome.css') {
        fs.readFile('/home/alexander_i_bakalov/ConnectMyMind/ConnectMyMind/client/connect-my-mind/build/fontawesome.css', function (err, html) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
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