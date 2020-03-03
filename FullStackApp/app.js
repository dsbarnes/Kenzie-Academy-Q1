const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []
let available = true

app.get('/api/users', (req, res) => {
    res.send(users)
})

app.post('/api/users/', function (req, res) {
    
    users.forEach(e => { 
        if(e.userName === req.body.userName){
            available = false
        }
    })
    
    if(users.length === 0){
        res.status(201)
        users.push(req.body)
        res.send(users)
    }
    else if(available === false){
        res.status(409)
        available = true
        res.send('error')
    }
    else if(available === true){
        res.status(201)
        users.push(req.body)
        res.send(users)
    }

})

app.listen(3000)