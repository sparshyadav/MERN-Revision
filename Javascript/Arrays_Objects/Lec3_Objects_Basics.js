const user = {
    name: "Sparsh",
    "Full Name": "Sparsh Yadav",
    age: 18,
    location: "Meerut",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Wednesday", "Friday"]
}

// console.log(user.name); // These two are the ways in which we can 
// console.log(user["age"]); // access object elements

// console.log(user["Full Name"]); // To access an element like Full Name it can never be 
// // accessed using dot operator, we will have to use brakets to access it

// user.email="xyz.google.com"; // This way we can assign new key value pairs to the object
// console.log(user);


// Object.freeze(user); // This way we can freeze our object, and then no changes, modifications, or creation will be allowed
// user.number=95832392343;
// console.log(user);

user.greet = function () {
    console.log("Hello User");
}
user.greet();

user.greetings = function () {
    console.log(`Hello ${this["Full Name"]}`); // Using this operator we can access the internal properties of an object
}
user.greetings();

