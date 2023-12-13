const { readFile , writeFile}  = require('fs') 

// In asynchronous we will provide a callback function

readFile('./content/first.txt' ,'utf8',  (err , result)=>{
    if(err) {
        console.log(err) // err and result is must in every asynchronous function .
        return 
    }

    console.log(result) ; 
} )

// If we don't provide the utf encoding then in the result we will get the buffer of the file 
