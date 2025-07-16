//object literals
const mySym = Symbol('mySymbol'); // creating a symbol
// Symbols are unique and can be used as keys in objects

const obj1 = {
    name : "John",
    age : 30,
    city : "New York",
    email : "john@gmail.com",
    [mySym] : "symbolValue" // using a symbol as a key
}

console.log(obj1); // { name: 'John', age: 30, city: 'New York', email: '

console.log(obj1.name); // John
console.log(obj1.age); // 30
console.log(obj1.city); // New York
console.log(obj1.email); // john@gmail.com

console.log(obj1['name']); // John
console.log(obj1['age']); // 30
console.log(obj1['city']); // New York
console.log(obj1['email']); 
console.log(obj1[mySym]); // symbolValue

// obj1.email = "john5@gmail.com"
// Object.freeze(obj1); // make the object immutable
// obj1.email = "john7@gmail.com" // this will not change the email
// console.log(obj1.email); //

obj1.greeting = function() {
    console.log(`Hello my Name is, ${this.name}`);
}
obj1.greeting(); // Hello 
console.log(obj1.greeting); // [Function: greeting]
console.log(obj1.greeting()); // Hello undefined

//destructuring

obj2 = {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
}

const { name, age, city } = obj2; // destructuring the object
console.log(name); // Jane, without using obj2.name
console.log(age); // 25
console.log(city); // Los Angeles

// using destructuring with a function
function displayInfo({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
displayInfo(obj2); // Name: Jane, Age: 25, City: Los Angeles

// {
//     "name": "Alice",
//     "age": 28,
//     "city": "Chicago"
// }   
// JSON object

//functions
function sayMyName(name) {
    console.log(`My name is ${name}`);
}
sayMyName("Alice"); // My name is Alice

function addTwoNumbers(a, b) {
    return a + b;
}
console.log(addTwoNumbers(5, 10)); // 15
console.log(addTwoNumbers(5)); // NaN, because b is undefined
console.log(addTwoNumbers(5, 10, 15)); // 15, only the first two arguments are considered
console.log(addTwoNumbers()); // NaN, because both a and b are undefined
console.log(addTwoNumbers(5, null)); // 5, because null is treated as 0 in addition
console.log(addTwoNumbers(5, undefined)); // NaN, because undefined is not a number
console.log(addTwoNumbers(5, "10")); // 510, because "10" is treated as a string and concatenated
console.log(addTwoNumbers(5, "abc")); // NaN, because "abc" is not a number
console.log(addTwoNumbers("5", "10")); // 510, because both are strings


function loginUserMessage(username) {
    if(!username) {
        console.log("Username is not provided");
        return;
    }
    return `${username} has logged in successfully`;
}

console.log(loginUserMessage("Alice")); // Alice has logged in successfully
// console.log(loginUserMessage()); // undefined has logged in successfully, because username is undefined
console.log(loginUserMessage("")); //  has logged in successfully, because username is an empty string
console.log(loginUserMessage(undefined)); // undefined has logged in successfully, because username is undefined


function calculatePrice(...prices) {
    return prices;
}

console.log(calculatePrice(10, 20, 30)); // [10, 20, 30], using rest parameter to collect all arguments into an array

const user1 = {
    username: "Alice",
    price : 100
}

function handleObject(anyobject) {
    console.log(anyobject.username); // Alice
    console.log(anyobject.price); // 100
}
handleObject(user1); // passing an object to the function
handleObject({ 
    username: "Bob", 
    price: 200 
}); // passing an object literal directly

const arr2 = [1, 2, 3, 4, 5];

function returnSecondElement(getArray) {
    return getArray[1]; // returning the second element of the array
}
console.log(returnSecondElement(arr2)); // 2, because the second element of the array is 2
console.log(returnSecondElement([10, 20, 30])); // 20, because the second element of the array is 20

//Scopes


if(true) {
    let globalVar = "I am a global variable"; // global scope
    const localVar = "I am a local variable"; // block scope
    var functionVar = "I am a function variable"; // function scope
    
}

// console.log(globalVar); //this will throw an error because globalVar is not defined outside the if block
// console.log(localVar); // this will throw an error because localVar is not defined outside the if block
console.log(functionVar); // I am a function variable, because functionVar is defined with var and has function scope

let a = 10;
if(true) {
    let a = 20; // this a is block scoped
}

console.log(a); // 10, because the outer a is not affected by the inner a

//Nested Scopes
function one() {
    const username = "ram";

    function two() {
        const website = "google.com";
        console.log(username) // ram, because username is defined in the outer function scope
    }
    // console.log(website); // this will throw an error because website is not defined in this scope
    two(); // calling the inner function to access the outer variable
    

}
one(); // calling the outer function to execute the code

//----------------------------

console.log(addOne(5)); // 6, calling the addOne function with 5 as argument
function addOne(num) {
    return num + 1;
}

// console.log(addTwo(5));

// const addTwo = function(num) {
//     return num + 2;
// } // this will throw an error because addTwo is not defined before it is called

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Arrow Functions

//this keyword 
const user2 = {
    username: "Alice",
    age: 30,
    welcomeMessage: function() {
        console.log(`Welcome ${this.username}, you are ${this.age} years old`);
    }
}
user2.welcomeMessage(); // Welcome Alice, you are 30 years old
user2.username = "Bob"; // changing the username
user2.welcomeMessage(); // Welcome Bob, you are 30 years old

const chai = () => {
    let username = "Alice";
    console.log("Hello from arrow function");
    console.log(this.username); // undefined, because arrow functions do not have their own this context
    console.log(this); // global object, because arrow functions inherit this from the outer scope
}
chai(); // Hello from arrow function

const addTwonums = (a, b) => {
    return a + b;
}
console.log(addTwonums(5, 10)); // 15, using arrow function to add two numbers

const addTwonums2 = (a, b) => a + b; // concise arrow function
console.log(addTwonums2(5, 10)); // 15, using concise arrow function to add two numbers




//Immediately Invoked Function Expression (IIFE)
(function chai() {
    console.log("Hello from IIFE");
})(); // IIFE, this function is executed immediately after it is defined
// chai(); // Hello from IIFE

