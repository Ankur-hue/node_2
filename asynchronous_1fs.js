// If we want all the synchronous function to work like asynchronous then : 

const {readFile , writeFile} = require('fs') 

readFile('./content/first.txt' , 'utf8' , (err, result)=>{
    if(err) {
        console.log(err) 
        return 
    }

    const first = result ; 

readFile('./content/second.txt' , 'utf8' , (err , result) =>{
    if(err){
        console.log(err) 
        return 

    }

    const second = result ; 

writeFile('./content/final-file.txt' ,` Answer : ${first} , ${second}` , (err , result)=>{
    if(err){
        console.log(err) 
        return 

    }
    console.log(result) 
})
})

})