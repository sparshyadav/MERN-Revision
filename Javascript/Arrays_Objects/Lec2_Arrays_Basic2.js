// const marvel=["Ironman", "Thor", "Captain America", "Black Widow"];
// const dc=["Batma,", "Superman", "Flash", "Wonder Women"];


// // console.log(marvel);
// // console.log(dc);
// // marvel.push(dc); // Both push and concat operation thinks of dc array as a single element and append the dc array into marvel array as an array element
// // console.log(marvel);

// // marvel.concat(dc);
// // console.log(marvel);

// // const allHeroes=marvel.concat(dc); // Storing the concatenated result will create a new array and store every element from both the arrays into the new array
// // console.log(allHeroes);


// // Spread Operator
// const allHeroes=[...marvel, ...dc]; // Spread Operator treats every element of the array as an individual element and copies them into the new array
// console.log(allHeroes);

const arr="Hello";
const nums=[...arr];
console.log(nums);


// Flat Operator
// const arr=[1, 2, [3, 4], 5, [6, 7, 8, [9, 10, [11]]]]; // When we have a nested array of known or unknown depths, we can use flat method to get every element in a single array
// const flatArr=arr.flat(Infinity);
// console.log(arr);
// console.log(flatArr);


