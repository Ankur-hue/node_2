const path = require('path')
console.log(path.sep) // It shows the path seperator operator



const filepath = path.join('/content/' , 'test.txt')

console.log(filepath) 

// If we want  to look over to only the file name that i s test.txt here 
// then we only have to print the base path

const base = path.basename(filepath)

console.log(base)  // This will only show the base path that is test.txt 

// To show the absolute path that is path from the full directory start itself then command is : 

const absolutePath = path.resolve(__dirname,'content' , 'test.txt')
// Remember always for absolute path resolve function is used and then first parameter of this function is __dirname and then all the files and folder names 

console.log(absolutePath)

