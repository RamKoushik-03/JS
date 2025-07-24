const promiseOne = new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log('Async task is completed');
        resolve()
    }, 1000) 
})

promiseOne.then(function() {
    console.log("Promise consumned");

})

new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Ash", email: "Ash@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hero", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
