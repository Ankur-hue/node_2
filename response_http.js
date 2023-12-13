const http = require('http') 

const server = http.createServer((req, res) =>{
    if(req.url==='/') {
        res.end("This is Home page")
    }

    if(req.url==='/about') {
        res.end("This is About Page")
    } // this is the syntax that we have to remember 

    res.end("This is error") 


})

server.listen(8000) 