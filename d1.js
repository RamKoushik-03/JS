console.log("Hello World!");

const y = 20;
let x = 10;
var z = 30;
//Dont use var in most cases , since it has function scope
//Use let and const instead

p = 20;
//It will work, but it is not recommended to use undeclared variables

let gg;
//This varible value is undefined, since it is not initialized

console.table([x, y, z, gg]);

// alert(3+3)
// This will not work in Node.js, since alert is a browser function

//Datatypes
let a = 10; //number
let b = "Hello"; //string
let c = true; //boolean
let d = null; //null
let e; //undefined
let f = Symbol("symbol"); 
let g = BigInt(12345678901234567890); //bigint

console.log(typeof undefined); //undefined
console.log(typeof null); //object 

let score1 = "33";
let score2 = "33abc";

let n1 = Number(score1);
let n2 = Number(score2);
console.log(typeof n1); //number
console.log(typeof(n2)); //number
console.log(n1); // 33
console.log(n2); // NaN

let f1 = 1;

let bool1 = Boolean(f1);
console.log(bool1); // true

let num1 = 33

let str1 = String(num1);
console.log(typeof str1); //string
console.log(str1); // "33"

// **************Operations******************

console.log(1 + "2");
console.log("1" + 2);
console.log(1 + 2 + "3");
console.log("1" + 2 + 3);
console.log(1 + 2 +"3" + 4);

//Strict Checking
console.log(1 === 1); // true
console.log(1 === "1"); // false

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false

const bignum = 12345678901234567890n;

//Arrays , objects
const heros = ["Thor", "Ironman", "Hulk"];

let myObj = {
    name: "John",
    age: 30,
}

//Functions
const myfunc = function() {
    console.log("Hello world");
}

// Stack(primitive types) vs Heap(non-primitive types)

let s1 = "Ram";
let s2 = s1;
s2 = "Shyam";
console.log(s1); // "Ram"
console.log(s2); // "Shyam"

let obj1 = {
    name: "Ram",
    age: 30,
}
let obj2 = obj1;
obj2.name = "Shyam";
console.log(obj1.name); // "Shyam"
console.log(obj2.name); // "Shyam"

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

const name = "John";
const count = 10;
console.log(name + " has " + count + " apples.");

console.log(`${name} has ${count} apples, with him`); // Template literals

const st1 = new String("Hello"); // String object
console.log(st1); // String { "Hello" }
console.log(st1[0]); // "H"
console.log(st1.length); // 5
console.log(st1.toUpperCase()); // "HELLO"
console.log(st1); // "Hello"
console.log(st1.charAt(0)); // "H"
console.log(st1.indexOf("l")); // 2
console.log(st1.lastIndexOf("l")); // 3
console.log(st1.includes("lo")); // true
console.log(st1.startsWith("He")); // true

const st2 = st1.substring(0, 2); // "He"
console.log(st2); // "He"
console.log(st1.slice(0, 2)); // "He"
console.log(st1.slice(-2)); // "lo"

const st3 = "dasagassfsfasdadsfsf";
 // "dasagassfsfasdadsf@f"
console.log(st3.replace("s", "@")); // "da@agassfsfasdadsfsf";

const st4 = "Hello-world-how-are-you";
console.log(st4.split("-")); // ["Hello", "world", "how", "are", "you"]

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 10); // Random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // Random integer between 0 and 9
console.log(Math.ceil(Math.random() * 10)); // Random integer between 1 and 10
console.log(Math.round(Math.random() * 10)); // Random integer between 0 and 10

const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // Random integer between 10 and 20
console.log(randomNum); 

let myD = new Date();
console.log(myD); // Current date and time
console.log(myD.toString()); // String representation of the date
console.log(myD.toDateString()); // Date in string format
console.log(myD.toISOString()); // ISO string format
console.log(myD.getFullYear()); // Current year
console.log(myD.getMonth()); // Current month (0-11)
console.log(myD.getDate()); // Current date (1-31)
console.log(myD.getDay()); // Current day of the week (0-6)
console.log(myD.getHours()); // Current hour (0-23)
console.log(myD.getMinutes()); // Current minutes (0-59)
console.log(myD.getSeconds()); // Current seconds (0-59)
console.log(myD.getMilliseconds()); // Current milliseconds (0-999)
console.log(myD.getTime()); // Current timestamp in milliseconds since 1970-01-01T00:00:00Z
console.log(myD.getTimezoneOffset()); // Timezone offset in minutes
console.log(myD.toLocaleString()); // Localized date and time string

let createdDate = new Date("2025, 0, 3"); // January 3, 2025
console.log(createdDate); // Date object for January 3, 2025

let timeStamp = Date.now(); // Current timestamp in milliseconds
console.log(timeStamp); // Current timestamp in milliseconds

