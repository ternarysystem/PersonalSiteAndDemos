const http = require('http');
const logger = require('node-color-log');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

try {
    const server = http.createServer(requestListener);
    server.listen(8080);
    logger.info("Server ready: Listening on port 8080");
} catch (err) {
    logger.error("Error initiating server:", err);
}