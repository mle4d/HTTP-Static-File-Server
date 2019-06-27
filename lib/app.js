const { createServer } = require('http');
//const { parse } = require('url');

const app = createServer((req, res) => {
  res.end('hello');
  // const { pathname } = parse(req.url);

  
});

module.exports = app;
