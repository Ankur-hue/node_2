// Globals are the keywords that are used in Node js because node js does not support window keyword 
// Global variables can be used anywhere in the program .


//  __dirname  --> This give the path to the current directory
// __filename  --> This gives the name of the file that
//  require --> Used to use the modules  
// module --> Info about the current module 
// process --> Gives the info about the enviornment where the code has been executing 


console.log(__dirname) ;
console.log(process) ; 

setInterval(() =>{     // Syntax is  setInterval(()=>{})

    console.log("Hello World ") ;  // This setInterval func is used to display the text 
                                   //after the fixed amount of time . Here it is 1000                                   

}, 1000) ; 