 //Examples of Java Script Objedt and Array with "PUSH","Splice", "stringify" key words
   
 var oEmp ={
     "empId" : 123,
	 "empName" : "sangamesh",
	 "empSalary" : 50000,
	 "cury" : "USD",
	 "hobies" : ["dancing", "cricket", "Caram"]  
  }
    console.log(oEmp);
    console.log(oEmp.hobies);
    console.log(oEmp.hobies.push('swimming'));
    console.log(oEmp);
//"Splice"
    console.log(oEmp.hobies.splice(0,0,'reading'));
    console.log(oEmp.hobies);
//"stringify"
   var stringJson = JSON.stringify(oEmp);
    console.log(stringJson);
    // console.log(JSON.parse(stringJson));    

//The slice() method returns selected elements in an array, as a new array.
    console.log(oEmp.hobies.slice(1, 2));

 
