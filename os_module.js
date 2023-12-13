const os = require('os'); // Node knows that this is a builtin module . 

// Info about current user 

const user = os.userInfo(); 
 // console.log(user)  

 // method returns the system uptime in seconds 

console.log(`The system uptime is : ${os.uptime()} seconds `) 


const currentOs = {
    name: os.type() , 
    release: os.release() , 
    totalMemory : os.totalmem() ,
    freeMemory : os.freemem() 
}

console.log(currentOs) 