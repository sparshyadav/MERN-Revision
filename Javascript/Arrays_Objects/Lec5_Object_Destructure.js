const course={
    courseName: "Js in Hindi",
    price: 9999,
    courseInstructor: "Hitesh Chaudhary"
}

const{courseName, price, courseInstructor}=course; // In this way we can destructure the object and use it's properties
console.log(courseInstructor);
console.log(courseName);
console.log(price);