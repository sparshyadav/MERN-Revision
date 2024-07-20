// const myArr=[0, 1, 5, 3, 9];
// console.log(myArr);

// myArr.push(10);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(22); // Appends at the starting
// console.log(myArr);

// myArr.shift(); // Removes the first element
// console.log(myArr);

// const newArr=myArr.join(); // Converst array into String
// console.log(newArr);
// console.log(typeof newArr);


// Slice and Splice
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original Array: ", arr);

const sliceArray = arr.slice(2, 6); // Slice excludes the last index, and only copies the elements
console.log("Sliced Array: ", sliceArray);
console.log("Original Array: ", arr);

const spliceArray = arr.splice(2, 6); // Splice includes the last index, and cut out all the elements from the original array
console.log("Spliced Array: ", spliceArray);
console.log("Original Array: ", arr);
