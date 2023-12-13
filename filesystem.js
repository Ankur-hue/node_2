// There are 2 methods to interact with files  1. Asynchronous and Non Blocking   2. Synchronously and Blocking 

// 1.
const {readFileSync, writeFileSync} = require('fs') 

const first = readFileSync('./content/first.txt' , 'utf8')
const second = readFileSync('./content/second.txt' , 'utf8')

console.log(first , second ) ;

writeFileSync('./content/result-sync.txt' ,
                `Here is the result : ${first} , ${second}` , {flag: 'a'})

// Argument of writefilesync is the address where u want to create the file and then the content to be present in the file 

// If we want to override the file content then in the above syntax we will write : {flag:'a'} means append mode . After writing flag syntax then everytime the same text will be appended in the same file . If not then not 


// The above approcah is synchronous approach 






// 2. 
const fs  = require('fs')
fs.readFileSync() 

// Both 1. and 2. methods are same
// we can directly import the functions that we want or can do by this way 

