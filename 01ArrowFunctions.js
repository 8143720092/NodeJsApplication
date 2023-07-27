// -- Globle Functions variable example

this.tax = 10;   // tax is a globle variable

var x = function(a,b){
   return a + b + this.tax;  // hear ve are using globle variable in function 
   
   }
console.log(x(10,20));    // ------ It will give result as "NaN"

/// - - -  NOTE : we cant use globle variable in this type of abow function - - - ///
//-----------------------------------------------------------------------------------------------------------
// -- Arrow function "" => ""  example to axcess Globle variable "this.tax"

y = (a,b) => {
   return a + b + this.tax;
}
console.log(y(20,30));
