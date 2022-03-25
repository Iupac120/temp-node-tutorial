const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url ==='./'){
        req.end('Welcome to our home page')
    }
    if(req.url ==='./about'){
        req.end('Here is our short history')
    }
    res.end(`
    <h1>OOps!</h1>
    <p>We cant seem to find the page</p>
    <a href="/">Back Home</a>
    `)
});
server.listen(5000)