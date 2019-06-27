const { createServer } = require('http');
const { getPath } = require('../lib/file-path');
const { parse } = require('url');
const fs = require('fs');

const makeHtml = () => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello</title>
  </head>
  <body>
    <h1>Hello</h1>

  </body>
  </html>`;
};


const app = createServer((req, res) => {
  const { pathname } = parse(req.url);
  fs.readPath(getPath)(pathname), { encoding: 'utf8' }; 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if(pathname === '/index.html') {
    res.end(makeHtml('hello'));
  } else if(pathname === '/about.html') {
    res.end(makeHtml('about us'));
  } else if(pathname === '/contact') {
    res.end(makeHtml('contact us'));
  } else {
    res.statusCode = 404;
    res.end(makeHtml('Not Found'));
  }
});

module.exports = app;
