// Modules are used to split our code into chunks so that it is easy to develop and debug also 


const names = require('./mdule_1')

const sayhi = require('./module_2')


 sayhi(names.john) ;  // This is like we are accessing only john and peter from name 
 
 sayhi(names.peter) ; 
 sayhi('susan') ; 

// Every file in a node is a module

// Nodejs uses Common Js in order to create modules 


//Now what we can do is we will seperately write function in another file and then import it in this file 

