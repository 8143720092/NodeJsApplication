
/// var use any name like(call,reuse) -- this is like INCLUDE programing likein ABAP


var call = require('./03ReuseFunModule'); // Called Reusable Modul

var arr = ["Apple","Banana","Cherry"];
var arr1 = ["Sangamesh","Eklare","Abhishake","Rahul","sachin"];


call.printf(arr);
call.printf(arr1);

call.getCount(arr);
call.getCount(arr1);

console.log(arr1);      // result --> [ 'Sangamesh', 'Eklare', 'Abhishake', 'Rahul', 'sachin' ]
call.removeItem(arr1);  // [ 'Abhishake', 'Rahul', 'sachin' ]
console.log(arr1);
