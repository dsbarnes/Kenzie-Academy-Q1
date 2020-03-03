const resources = { "/IP": "Internet Protocol", "/TCP": "Transmission Control Protocol" };
const textBody = require("body");

// const time = new Date()
// const message = "Hello, the time is " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
// console.log(message)

const http = require('http')
const hostname = '127.0.0.1'
const port = 8000
const server = http.createServer( (req, res) => {
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/plain')
    // res.end('Hello World\n')
if(req.method === "GET") {
    
    if(resources[req.url] === undefined) {
        res.statusCode = 404;
        res.end("ERROR NOT FOUND");
    } 
    else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        const responseBody = resources[req.url];
        res.end(responseBody);
    }
}
else if(req.method === "PUT") {
    res.statusCode = 201;
    textBody(req, res, (err, requestBody) => {
        resources[req.url] = requestBody;
        const responseBody = resources[req.url];
        res.end(responseBody);
        })
    }
})


server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`)
})
