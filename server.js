const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('De Colombia pal mundo, Alejo y Sebas');
});

server.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
