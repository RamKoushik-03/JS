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




