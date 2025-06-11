const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {
  res.end("Hello from Node.js app on GKE!");
});
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
