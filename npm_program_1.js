const _ = require('loadsh') ; 

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items) ; 

console.log(newItems) ; 

// _ is used when we dont want to use any variable 
 
// .flatten is a method in loadsh package which is used to flatten a array or list or anything .

// loadsh package is used to provide easy methods to work with arrays , nubers, strings 

