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

