
//// --- Basics of Functions - Named functions --- ////
//// --- This type of Function can be used LOCALY( Not reusable, not everyone can call this) --- ////

var arr = ["Apple","Banana","Cherry"];
var arr1 = ["Sangamesh","Eklare","Abhishake","Rahul"];

var printf = function(arrObject){
    for (let i = 0; i < arrObject.length; i++) {
        const element = arrObject[i];
        console.log(element);
        
    }
}

printf(arr);
console.log("Hi How are you....");
printf(arr1);
///////////////////////////////////////////////////////////////////
