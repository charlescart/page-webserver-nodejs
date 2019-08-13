const http = require('http');
const port = 5000;
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let output = { name: `Charles Rodriguez`, age: 26, url: req.url };
    res.write(JSON.stringify(output));
    res.end();
})
    .listen(port);

console.log(`Listen in ${port}`);