// const promiseOne=new Promise(function(resolve, rejest){
//     setTimeout(function(){
//         console.log("Async Task is Completed");
//         resolve();
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async Task 2");
//         resolve();
//     }, 1000);
// })
//     .then(() => {
//         console.log("Async 2 Resolved");
//     })

// const promiseThree = new Promise((resolve, rejest) => {
//     setTimeout(() => {
//         resolve(
//             {
//                 username: "Sparsh",
//                 email: "sparsh@gmail.com"
//             }
//         )
//     }, 1000);
// })
//     .then((user) => {
//         console.log(user);
//     })

// Promise Chaining
new Promise((resolve, reject) => {
    let error = false;

    if (!error) {
        resolve(
            {
                username: "Sparsh",
                email: "sparsh@gmail.com"
            }
        )
    }
    else {
        reject("Error");
    }
})
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })