/* testBranch */
/* nem is */
const http = require('http');
const app = require('./app');
const port = 3000;

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const server = http.createServer(app);

server.listen(port);