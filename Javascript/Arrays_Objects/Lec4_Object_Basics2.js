// const tinderUser={};
// tinderUser.id="123bc";
// tinderUser.name="Sam";
// tinderUser.isLoggedIn=false;

// console.log(tinderUser);

// const user={
//     email: "sparsh@gmail.com",
//     fullname: {
//         firstName: "Sparsh",
//         lastName: "Yadav"
//     }
// }
// console.log(user.fullname.lastName);

const obj1={1: "a", 2: "b"};
const obj2={3: "c", 4: "d"};
const obj3={5: "e", 6: "e"};

// const obj4=Object.assign({}, obj1, obj2, obj3); // Object.assign copies all the object properties and copies it in the target object
// // Object.assig({}, obj1, obj2) -> in this the empty braces {} is the target telling that this is where the end result should be, and everything after that is to be copied
// console.log(obj4);

obj4={...obj1, ...obj2, ...obj3};
console.log(obj4);

console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));
// All these properties returns keys, values, and enteries in an array, and array of array for enteries