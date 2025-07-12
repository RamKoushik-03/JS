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
c -= 3; // Subtraction assignment: c = c - 3 (c becomes 12)
console.log(c);
c *= 2; // Multiplication assignment: c = c * 2 (c becomes 24)
console.log(c);
c /= 4; // Division assignment: c = c / 4 (c becomes 6)
console.log(c);
c %= 5; // Modulus assignment: c = c % 5 (c becomes 1)
console.log(c);
c **= 3; // Exponentiation assignment: c = c ** 3 (c becomes 1)
console.log(c); 
c &= 2; // Bitwise AND assignment: c = c & 2 (c becomes 0)
console.log(c);
c |= 3; // Bitwise OR assignment: c = c | 3 (c becomes 3)
console.log(c);
c ^= 1; // Bitwise XOR assignment: c = c ^ 1 (c becomes 2)
console.log(c);
c <<= 1; // Left shift assignment: c = c << 1 (c becomes 4)
console.log(c);
c >>= 1; // Right shift assignment: c = c >> 1 (c becomes 2)
console.log(c);
c >>>= 1; // Unsigned right shift assignment: c = c >>> 1 (c becomes 1)
console.log(c);
// Conditional (Ternary) Operator
let d = (a > b) ? "a is greater" : "b is greater";
console.log(d); // "a is greater" (since a is 10 and b is 5)

// typeof Operator
console.log(typeof a); // "number" (returns the type of a)
console.log(typeof "Hello"); // "string" (returns the type of a string)
console.log(typeof true); // "boolean" (returns the type of a boolean)
console.log(typeof null); // "object" (returns the type of null, which is a known quirk in JavaScript)
console.log(typeof undefined); // "undefined" (returns the type of undefined)
console.log(typeof Symbol("symbol")); // "symbol" (returns the type of a symbol)
console.log(typeof BigInt(12345678901234567890)); // "bigint" (returns the type of a BigInt)
console.log(typeof function() {}); // "function" (returns the type of a function)
console.log(typeof [1, 2, 3]); // "object" (returns the type of an array, which is an object in JavaScript)
console.log(typeof { key: "value" }); // "object" (returns the type of an object)
console.log(typeof NaN); // "number" (returns the type of NaN, which is a special numeric value)
console.log(typeof Infinity); // "number" (returns the type of Infinity, which is a special numeric value)
console.log(typeof new Date()); // "object" (returns the type of a Date object)
console.log(typeof /regex/); // "object" (returns the type of a regular expression, which is an object in JavaScript)
console.log(typeof new Map()); // "object" (returns the type of a Map object)
console.log(typeof  new Set()); // "object" (returns the type of a Set object)
// instanceof Operator
console.log(a instanceof Number); // false (a is a primitive number, not an instance of Number)
console.log(new Number(a) instanceof Number); // true (new Number(a) creates an instance of Number)
console.log("Hello" instanceof String); // false (string literals are not instances of String)
console.log(new String("Hello") instanceof String); // true (new String("Hello  ) creates an instance of String)
console.log([] instanceof Array); // true (an array is an instance of Array)
console.log({} instanceof Object); // true (an object is an instance of Object)
console.log(new Date() instanceof Date); // true (a Date object is an instance of Date)
console.log(/regex/ instanceof RegExp); // true (a regular expression is an instance of RegExp)
console.log(new Map() instanceof Map); // true (a Map object is an instance of Map)
console.log(new Set() instanceof Set); // true (a Set object is an instance of Set)
console.log(a instanceof Object); // true (a primitive number is wrapped in an object when used in an object context)
console.log("Hello" instanceof Object); // true (a string literal is wrapped in an object when used in an object context)
console.log([] instanceof Object); // true (an array is an object in JavaScript)
console.log({} instanceof Object); // true (an object is an instance of Object)
console.log(new Date() instanceof Object); // true (a Date object is an instance of Object)
console.log(/regex/ instanceof Object); // true (a regular expression is an object in JavaScript)
console.log(new Map() instanceof Object); // true (a Map object is an instance of Object)
console.log(new Set() instanceof Object); // true (a Set object is an instance of Object)
console.log(null instanceof Object); // false (null is not an instance of Object)
console.log(undefined instanceof Object); // false (undefined is not an instance of Object)
console.log(Symbol("symbol") instanceof Symbol); // false (symbols are not instances of Symbol, they are primitive values)
console.log(BigInt(12345678901234567890) instanceof BigInt); // false (BigInt is a primitive value, not an instance of BigInt)
console.log(NaN instanceof Number); // false (NaN is a special numeric value, not an instance of Number)
console.log(Infinity instanceof Number); // false (Infinity is a special numeric value, not an instance of Number)
console.log(new Error() instanceof Error); // true (an Error object is an instance of Error)
console.log(new TypeError() instanceof TypeError); // true (a TypeError object is an instance of TypeError)
console.log(new RangeError() instanceof RangeError); // true (a RangeError object is an instance of RangeError)
console.log(new ReferenceError() instanceof ReferenceError); // true (a ReferenceError object is an instance of ReferenceError)
console.log(new SyntaxError() instanceof SyntaxError); // true (a SyntaxError object is an instance of SyntaxError)
console.log(new EvalError() instanceof EvalError); // true (an EvalError object is an instance of EvalError)
console.log(new URIError() instanceof URIError); // true (a URIError object is an instance of URIError)
console.log(new Map() instanceof Object); // true (a Map object is an instance of Object)
console.log(new Set() instanceof Object); // true (a Set object is an instance of Object)
console.log(new WeakMap() instanceof WeakMap); // true (a WeakMap object is an instance of WeakMap)
console.log(new WeakSet() instanceof WeakSet); // true (a WeakSet object is an instance of WeakSet)
console.log(new Promise((resolve, reject) => {}) instanceof Promise); // true (a Promise object is an instance of Promise)
console.log(new Proxy({}, {}) instanceof Proxy); // true (a Proxy object is an instance of Proxy)
console.log(new Reflect() instanceof Reflect); // false (Reflect is not a constructor, it is a built-in object)
console.log(new Intl.DateTimeFormat() instanceof Intl.DateTimeFormat); // true (an Intl.DateTimeFormat object is an instance of Intl.DateTimeFormat)
console.log(new Intl.NumberFormat() instanceof Intl.NumberFormat); // true (an Intl.NumberFormat object is an instance of Intl.NumberFormat)
console.log(new Intl.Collator() instanceof Intl.Collator); // true (an Intl.Collator object is an instance of Intl.Collator)
console.log(new Intl.ListFormat() instanceof Intl.ListFormat); // true (an Intl.ListFormat object is an instance of Intl.ListFormat)
console.log(new Intl.RelativeTimeFormat() instanceof Intl.RelativeTimeFormat); // true (an Intl.RelativeTimeFormat object is an instance of Intl.RelativeTimeFormat)
console.log(new Intl.PluralRules() instanceof Intl.PluralRules); // true (an Intl.PluralRules object is an instance of Intl.PluralRules)
console.log(new Intl.Locale() instanceof Intl.Locale); // true (an Intl.Locale object is an instance of Intl.Locale)
console.log(new Intl.DateTimeFormat("en-US") instanceof Intl.DateTimeFormat); // true (an Intl.DateTimeFormat object is an instance of Intl.DateTimeFormat with a specific locale)
console.log(new Intl.NumberFormat("en-US") instanceof Intl.NumberFormat); // true (an Intl.NumberFormat object is an instance of Intl.NumberFormat with a specific locale)
console.log(new Intl.Collator("en-US") instanceof Intl.Collator); // true (an Intl.Collator object is an instance of Intl.Collator with a specific locale)
console.log(new Intl.ListFormat("en-US") instanceof Intl.ListFormat); // true (an Intl.ListFormat object is an instance of Intl.ListFormat with a specific locale)
console.log(new Intl.RelativeTimeFormat("en-US") instanceof Intl.RelativeTimeFormat); // true (an Intl.RelativeTimeFormat object is an instance of Intl.RelativeTimeFormat with a specific locale)
console.log(new Intl.PluralRules("en-US") instanceof Intl.PluralRules); // true (an Intl.PluralRules object is an instance of Intl.PluralRules with a specific locale)
console.log(new Intl.Locale("en-US") instanceof Intl.Locale); // true (an Intl.Locale object is an instance of Intl.Locale with a specific locale)
console.log(new WeakMap() instanceof WeakMap); // true (a WeakMap object is an instance of WeakMap)
console.log(new WeakSet() instanceof WeakSet); // true (a WeakSet object is an instance of WeakSet)
console.log(new Promise((resolve, reject) => {}) instanceof Promise); // true (a Promise object is an instance of Promise)
console.log(new Proxy({}, {}) instanceof Proxy); // true (a Proxy object is an instance of Proxy)
console.log(new Reflect() instanceof Reflect); // false (Reflect is not a constructor, it is a built-in object)
console.log(new Intl.DateTimeFormat() instanceof Intl.DateTimeFormat);

console.log(new Intl.NumberFormat() instanceof Intl.NumberFormat);  // true (an Intl.NumberFormat object is an instance of Intl.NumberFormat)
console.log(new Intl.Collator() instanceof Intl.Collator); // true (an Intl.Collator object is an instance of Intl.Collator)
console.log(new Intl.ListFormat() instanceof Intl.ListFormat); // true (an Intl.ListFormat object is an instance of Intl.ListFormat)
console.log(new Intl.RelativeTimeFormat() instanceof Intl.RelativeTimeFormat); // true (an Intl.RelativeTimeFormat object is an instance of Intl.RelativeTimeFormat)
console.log(new Intl.PluralRules() instanceof Intl.PluralRules); // true (an Intl.PluralRules object is an instance of Intl.PluralRules)
console.log(new Intl.Locale() instanceof Intl.Locale); // true (an Intl.Locale object is an instance of Intl.Locale)
console.log(new Intl.DateTimeFormat("en-US") instanceof Intl.DateTimeFormat); // true (an Intl.DateTimeFormat object is an instance of Intl.DateTimeFormat with a specific locale)
console.log(new Intl.NumberFormat("en-US") instanceof Intl.NumberFormat); // true (an Intl.NumberFormat object is an instance of Intl.NumberFormat with a specific locale)
console.log(new Intl.Collator("en-US") instanceof Intl.Collator); // true (an Intl.Collator object is an instance of Intl.Collator with a specific locale)
console.log(new Intl.ListFormat("en-US") instanceof Intl.ListFormat); // true (an Intl.ListFormat object is an instance of Intl.ListFormat with a specific locale)
console.log(new Intl.RelativeTimeFormat("en-US") instanceof Intl.RelativeTimeFormat); // true (an Intl.RelativeTimeFormat object is an instance of Intl.RelativeTimeFormat with a specific locale)
console.log(new Intl.PluralRules("en-US") instanceof Intl.PluralRules); // true (an Intl.PluralRules object is an instance of Intl.PluralRules with a specific locale)
console.log(new Intl.Locale("en-US") instanceof Intl.Locale); // true (an Intl.Locale object is an instance of Intl.Locale with a specific locale)
console.log(new WeakMap() instanceof WeakMap); // true (a WeakMap object is an instance of WeakMap)
console.log(new WeakSet() instanceof WeakSet); // true (a WeakSet object is an instance of WeakSet)
console.log(new Promise((resolve, reject) => {}) instanceof Promise); // true (a Promise object is an instance of Promise)
console.log(new Proxy({}, {}) instanceof Proxy); // true (a Proxy object is an instance of Proxy)
console.log(new Reflect() instanceof Reflect); // false (Reflect is not a constructor, it is a built-in object)
console.log(new Intl.DateTimeFormat() instanceof Intl.DateTimeFormat); // true (an Intl.DateTimeFormat object is an instance of Intl.DateTimeFormat)
console.log(new Intl.NumberFormat() instanceof Intl.NumberFormat); // true (an Intl.NumberFormat object is an instance of Intl.NumberFormat)
console.log(new Intl.Collator() instanceof Intl.Collator); // true (an Intl.Collator object is an instance of Intl.Collator)
console.log(new Intl.ListFormat() instanceof Intl.ListFormat); // true (an Intl.ListFormat object is an instance of Intl.ListFormat)
console.log(new Intl.RelativeTimeFormat() instanceof Intl.RelativeTimeFormat); // true (an Intl.RelativeTimeFormat object is an instance of Intl.RelativeTimeFormat)
console.log(new Intl.PluralRules() instanceof Intl.PluralRules); // true (an Intl.PluralRules object is an instance of Intl.PluralRules)
console.log(new Intl.Locale() instanceof Intl.Locale); // true (an Intl.Locale object is an instance of Intl.Locale)
console.log(new Intl.DateTimeFormat("en-US") instanceof Intl.DateTimeFormat); // true (an Intl.DateTimeFormat object is an instance of Intl.DateTimeFormat with a specific locale)
console.log(new Intl.NumberFormat("en-US") instanceof Intl.NumberFormat); // true (an Intl.NumberFormat object is an instance of Intl.NumberFormat with a specific locale)
console.log(new Intl.Collator("en-US") instanceof Intl.Collator); // true (an Intl.Coll ator object is an instance of Intl.Collator with a specific locale)