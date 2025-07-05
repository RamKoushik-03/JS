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

