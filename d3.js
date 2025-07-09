//Arrays
const a = [1, 2, 3, 4, 5];
console.log(a[0]); // 1 
console.log(a.length); // 5
console.log(a[a.length - 1]); // 5
console.log(a[10]); // undefined
console.log(a[-1]); // undefined (negative indices are not supported in JavaScript arrays)

// Adding elements
a.push(6); // Adds 6 to the end of the array
console.log(a); // [1, 2, 3, 4, 5, 6]
a.unshift(0); // Adds 0 to the beginning of the array
console.log(a); // [0, 1, 2, 3, 4, 5, 6]

// Removing elements
a.pop(); // Removes the last element (6)
console.log(a); // [0, 1, 2, 3, 4, 5]
a.shift(); // Removes the first element (0)
console.log(a); // [1, 2, 3, 4, 5]

// Slicing and Splicing
const b = a.slice(1, 4); // Slices elements from index 1
console.log(b); // [2, 3, 4]
a.splice(1, 2, 10, 20); // Removes 2 elements
console.log(a); // [1, 10, 20, 4, 5]

console.log(a.includes(10)); // true
console.log(a.indexOf(20)); // 2
console.log(a.lastIndexOf(20)); // 2
console.log(a.join(', ')); // "1, 10, 20, 4, 5"