/**
 * Standard built-in objects
 * It refers to the objects that JavaScript has by default.
 */

// Object
console.log(Object.isFrozen(Object.freeze({ a: 1 })));

// Number
console.log(Number.MAX_VALUE);

// Math
console.log(Math.sqrt(2));
console.log(Math.floor(1.34));
console.log(Math.floor(1.56));
console.log(Math.random());

// Date
console.log(new Date());
const date = new Date();
console.log(date.getDay());
console.log(date.toLocaleString());
console.log(Date.now());
console.log(new Date(Date.now()));

// Set
const set = new Set();
set.add(1);
set.add(1);
console.log(set);

// Error
console.log(new Error());
console.log(new Error("Message"));

// Array
console.log(Array.of(1, 2, 3));
console.log(Array.isArray([]));
const arr = [3, 2, 1];
arr.forEach((item) => console.log(item));

// String
const str = "Hello";
console.log(str.indexOf("H"));
console.log(str.replace("e", "i"));

// functions
console.log(parseInt("13.232"));
console.log(parseFloat("13.232"));
console.log(parseFloat("13.232a"));
console.log(parseFloat("13.dfef..113"));
console.log(parseFloat("Hello"));
console.log(isNaN(parseInt("Hello")));

const num = 1;
console.log(num.toFixed(2));
console.log(typeof num.toFixed(2));
