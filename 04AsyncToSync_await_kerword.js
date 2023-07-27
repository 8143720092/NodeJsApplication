//***** await Keyword ******/
//****/ "Promise" function ""Making Async - > Sync"" using "await" Keywors *******


//const timerFunction = se => new Promise(resolve => setTimeout(resolve, se)); 
var timerFunction = se => new Promise(resolve => setTimeout(resolve, se)); 

const callMyFunction = () => {
    return timerFunction(5000).then( () => {

         console.log("I am the wait function"); 
    });
}

const myFunction = async () => {
    console.log("Before calling my module...--------------------->");
    await callMyFunction();
    console.log("After calling my module----------------------------->");
}

myFunction();



// y = (a,b) => {
//     return a + b + this.tax;
//  }
