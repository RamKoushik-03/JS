//  OOPS

const user = {
    userName : "Ram",
    loginCount : 9,
    signedIn : true,

    getUserDetails : function() {
        console.log("Got user details from DB");
    }
} 


console.log(user.userName);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("ram", 09, true)
const userTwo = new User("Ash", 07, false)
console.log(userOne.constructor);
//console.log(userTwo);
