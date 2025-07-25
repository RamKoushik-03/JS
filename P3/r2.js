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
