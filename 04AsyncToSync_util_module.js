
// Node JS provide an inbuilt "Util" module to have Async to Sync 
//promisify Utility function


let util = require('util');
let waitSngu = util.promisify((ms, f) => setTimeout(f, ms));

console.log("Before calling my module...--------------------->");

 waitSngu(5000).then( ()=> {
    console.log("sangu is wait function"); 
 });
console.log("After calling my module----------------------------->");

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// const util = require('node:util');
// const fs = require('node:fs');
// const { error } = require('console');

// const stat = util.promisify(fs.stat);
// stat('.').then((stats) => {
//   // Do something with `stats`
// }).catch((error) => {
//   // Handle the error.
// });
