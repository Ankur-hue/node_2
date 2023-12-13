const http = require('http') ; 

const server = http.createServer((req , res)=>{   //Http module has 2 parameters   1. incoming req(requests)  2. response (res)
    console.log(req)
    res.write('Welcome to Home page')
    res.end()
        

})

server.listen(5000)  // This will 