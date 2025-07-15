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

//break and continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break; // Exit the loop when i is 2
  }
  console.log(i);
}       

//for of
const arr1 = [1, 2, 3, 4, 5];
for (const val of arr1) {
  console.log(val); // Logs each element in arr1
}

const greetintgs = "Hello Wrold!";
for(const gre of greetintgs) {
  console.log(gre); // Logs each character in the string
}

//Maps 
const map1 = new Map();
map1.set('IN', 'India');
map1.set('US', 'United States');
map1.set('UK', 'United Kingdom');
console.log(map1);

for(const [key, values] of map1) {
  console.log(key, values); // Logs each key in the map
}

const myObj1 = {
  'game1' : 'NFS',
  'game2' : 'FIFA'
}

for(const [key, value] of Object.entries(myObj1)) {
  console.log(key, value);
}

//for in
const myObj2 = {
  game1: 'NFS',
  game2: 'FIFA',
  game3: 'PUBG'
};

for (const key in myObj2) {
  console.log(key,':', myObj2[key]); // Logs each key-value pair in myObj2
}

for(const val in arr1) {
  console.log(arr1[val]); // Logs each index in arr1
}

for(const val in greetintgs) {
  console.log(greetintgs[val]); // Logs each character in the string by index
}
for(const val in map1) {
  console.log(val); //cannot iterate over map keys directly with for..in
}

//forEach
const coding =  ['js','python', 'java','c++'];
coding.forEach( function (val) {console.log(val); // Logs each element in the coding array
} );

coding.forEach((val)=>{console.log(val);});

function printMe(val) {
  console.log(val); // Function to log each element
}
coding.forEach(printMe); // Using a named function to log each element

coding.forEach((item, id, coding) => {console.log(item, id, coding);})

const myCoding = [
  {
    language: 'JavaScript',
    languageFileName: 'js'
  },
  {
    language: 'java',
    languageFileName: 'java'
  },
  {
    language: 'python',
    languageFileName: 'py'
  }
]

myCoding.forEach((item) => {console.log(item.language, item.languageFileName)});

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tnums1 = nums2.filter( (num) => num>5)
console.log(tnums1); // Logs numbers greater than 5

const tnum2 = []; // Array to hold numbers greater than 4
nums2.forEach( (num) => {
  if(num>4) tnum2.push(num); // Pushes numbers greater than 4 into tnum2
})
console.log(tnum2); // Logs numbers greater than 4

const tnums3 = nums2.map( (num) => num + 10)
console.log(tnums3); // Logs each number in nums2 incremented by 10

//Chaining

const tnums4 = nums2
                .map( (num) => num * 10)
                .map( (num) => num * 10)
                .filter( (num) => num > 500)

console.log(tnums4); // Logs each number in nums2 multiplied by 100

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const initialValue = 0; // Initial value for the accumulator
const sum = newArr.reduce( (accumalator, currentValue) => {return accumalator + currentValue}, initialValue)
console.log(sum); // Logs the sum of all elements in newArr

const shoppingCart = [
  {
    itemName : 'Js course',
    price : 299,
  },
  {
    itemName : 'Python course',
    price : 199,
  },
  {
    itemName : 'Java course',
    price : 399,
  },
  {
    itemName : 'Mobile dev course',
    price : 899,
  }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice); // Logs the total price of all items in the shopping cart
