//operators
// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition: 15 
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2 
console.log(a % b); // Modulus: 0 (remainder of division)
console.log(a ** b); // Exponentiation: 100000 (10 raised to the power of 5)    
console.log(a++); // Post-increment: 10 (returns a, then increments)
console.log(a); // 11 (after increment)
console.log(++a); // Pre-increment: 12 (increments first, then returns)
console.log(a--); // Post-decrement: 12 (returns a, then decrements
console.log(a); // 11 (after decrement)
console.log(--a); // Pre-decrement: 10 (decrements first, then returns)
// Comparison Operators
console.log(a == b); // Equality: false (checks value)      
console.log(a === b); // Strict Equality: false (checks value and type)
console.log(a != b); // Inequality: true (checks value)
console.log(a !== b); // Strict Inequality: true (checks value and type)
console.log(a > b); // Greater than: true
console.log(a < b); // Less than: false
console.log(a >= b); // Greater than or equal to: true
console.log(a <= b); // Less than or equal to: false
// Logical Operators
console.log(a > 5 && b < 10); // Logical AND: true (both conditions are true)
console.log(a > 5 || b > 10); // Logical OR: true (at least one condition is true)
console.log(!(a > 5)); // Logical NOT: false (negates the condition)
console.log(a > 5 && b < 10 || a < 20); // Logical AND with OR: true (both conditions are true, or at least one is true)
console.log(a > 5 && (b < 10 || a < 20)); // Logical AND with OR in parentheses: true (both conditions are true, or at least one is true)
// Bitwise Operators
console.log(a & b); // Bitwise AND: 0 (binary AND operation)
console.log(a | b); // Bitwise OR: 15 (binary OR operation)
console.log(a ^ b); // Bitwise XOR: 15 (binary XOR operation)
console.log(~a); // Bitwise NOT: -11 (inverts the bits of a)
console.log(a << 1); // Left shift: 20 (shifts bits of a to the left by 1 position)
console.log(a >> 1); // Right shift: 5 (shifts bits of a to the right by 1 position)
console.log(a >>> 1); // Unsigned right shift: 5 (shifts bits of a to the right by 1 position, filling with zeros)
console.log(a & 1); // Bitwise AND with 1: 0 (checks if the least significant bit is set)
console.log(a | 1); // Bitwise OR with 1: 11 (sets the least significant bit)
console.log(a ^ 1); // Bitwise XOR with 1: 11 (toggles the least significant bit)
console.log(~1); // Bitwise NOT with 1: -2 (inverts the bits of 1)
console.log(1 << 1); // Left shift with 1: 2 (shifts bits of 1 to the left by 1 position)
console.log(1 >> 1); // Right shift with 1: 0 (shifts bits of 1 to the right by 1 position)
console.log(1 >>> 1); // Unsigned right shift with 1: 0 (shifts bits of 1 to the right by 1 position, filling with zeros)
// Assignment Operators
let c = 10;
c += 5; // Addition assignment: c = c + 5 (c becomes 15)
console.log(c);

