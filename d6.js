//Conditional Statement
if (true) {
  console.log("This will always run");
}  

if (false) {
  console.log("This will never run");
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

