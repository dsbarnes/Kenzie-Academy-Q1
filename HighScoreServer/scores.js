// const textBody = require('body')
const http = require('http')
const jsonBody = require("body/json")

let scores = [{name: "Edwin", score: 50}, {name: "David", score: 39}];
const resources = { "/Scores": JSON.stringify(scores) }

const hostname = '127.0.0.1'
const port = 8000

const server = http.createServer( (req, res) => {

    if(req.method === "GET") {
        
        if(resources[req.url] === undefined) {
            res.statusCode = 404
            res.end('Goofed')
        }
        else { 
            jsonBody(req, res, function(err, body){
                res.setHeader('Content-Type', 'application/javascript')
                res.end(JSON.stringify(scores))
            })
        }
    }
    else if(req.method === "POST") {
    
        res.statusCode = 201
        
        jsonBody(req, res, (err, PUTrequestBody) => {
            
            scores.push(PUTrequestBody)
            scores = scores.sort( (a, b) => b.score - a.score).slice(0, 3)

            const responseBody = String(res.statusCode)
            res.end(responseBody)
        })
    }
})
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}/`)
})