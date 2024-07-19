// let str1 = "Hello";
// let str2 = " Sparsh";
// console.log(str1 + str2); // Hello Sparsh

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// console.log(1+2+"2"+3+3+"3"); // 32333

// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));

// convert string to Number
result = "4" - "2"; 
console.log(result, "-", typeof(result));

result = "4" - 2;
console.log(result, "-", typeof(result));

result = "4" * 2;
console.log(result, "-", typeof(result));

result = "4" / 2;
console.log(result, "-", typeof(result));