//Conditional Statement
if (true) {
  console.log("This will always run");
}  

if (false) {
  console.log("This will never run");
}   

if(1 == "1") {
  console.log("This will run because == does type coercion");
}

if (1 === 1) {
  console.log("This will always run");
}
if (1 === 2) {
  console.log("This will never run");
}   

//Nested if
if (true) { 
  console.log("Outer condition is true");
  if (true) {
    console.log("Inner condition is also true");
  } else {
    console.log("Inner condition is false");
  }
}

// if else if
let number = 10;
if (number < 5) {
  console.log("Number is less than 5");
}
else if (number < 10) {
  console.log("Number is less than 10 but greater than or equal to 5");
}
else if (number < 15) {
    console.log("Number is less than 15 but greater than or equal to 10");
}
else {
  console.log("Number is 15 or greater");
}

if(true && false) {
  console.log("This will never run because one condition is false");
}
if(true || false) {
  console.log("This will always run because one condition is true");
}
if(true || true) {
  console.log("This will always run because both conditions are true");
}
if(true && true) {
  console.log("This will always run because both conditions are true");
}

//Switch Statement
let value = 2;
switch (value) {
  case 1:
    console.log("Value is 1");
    break;
  case 2:
    console.log("Value is 2");
    break;
  case 3:
    console.log("Value is 3");
    break;
  default:
    console.log("Value is something else");
}       

//Nullissh coalescing operator
let val1;
val1 = 5 ?? 10; // 5, because val1 is not null or undefined
val1 = null ?? 10; // 10, because val1 is null
val1 = undefined ?? 10; // 10, because val1 is undefined
val1 = 0 ?? 10; // 0, because 0 is a valid value and not null or undefined
val1 = "" ?? 10; // "", because empty string is a valid value and not null or undefined
val1 = false ?? 10; // false, because false is a valid value and not null or undefined

