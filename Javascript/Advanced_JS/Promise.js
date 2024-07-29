const promiseOne=new Promise(function(resolve, rejest){
    setTimeout(function(){
        console.log("Async Task is Completed");
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})