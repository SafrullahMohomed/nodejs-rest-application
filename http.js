const http_ = require('http');

const server = http_.createServer((req, res) =>{
    if(req.url === '/'){
        res.write(`<h1>hello there </h1>`);
        res.end();
    }
});



server.listen(2000);

console.log("Listening on port 3000---")