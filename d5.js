//Start
//loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}  

while (true) {
  console.log("This will run forever");
  break; // Remove this line to make it an infinite loop
}  

do {
  console.log("This will run at least once");
}while (false); // This will not run again

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue; // Skip the rest of the loop when i is 3
  }
  console.log(i);
}

while (true) {
  console.log("This will run forever");
  break; // Remove this line to make it an infinite loop
}   

//End
//break and continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break; // Exit the loop when i is 2
  }
  console.log(i);
}       

//continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the rest of the loop when i is 2
  }
  console.log(i);
}   

//break
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(i);
}   

//continue
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue; // Skip the rest of the loop when i is 1
  }
  console.log(i);
}

