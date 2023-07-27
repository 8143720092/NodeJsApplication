
// ---   Synchronouse process with "callback function"

var callMe = function(){

    console.log("Start of code");
    setTimeout(function(){},5000);
    console.log("End of code");
}
callMe();

/// Asynchronouse process ( function displays remainong code after 5 seconds)

var callMe = function(){

    console.log("Start of code");
    setTimeout(function(){
        console.log("End of code");
    },5000);
    
}
callMe();
