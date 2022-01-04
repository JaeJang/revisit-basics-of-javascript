// Primitive types
// immutable values 

// Number
// double-precision 64-bit binary format
// numbers between -(2^53 − 1) and 2^53 − 1
// +Infinity, -Infinity, and NaN
let num = 1;
console.log(typeof num);
num = -11;
console.log(typeof num);
num = 10.33;
console.log(typeof num);

console.log(Number.MAX_VALUE);

// BigInt
const bigNum = 10n;
console.log(typeof bigNum);
const bigNum2 = 10n * 10n;
console.log(bigNum2);

// String
// a set of "elements" of 16-bit unsigned integer
// immutable
const str = "Hello World";
console.log(typeof str);

// Boolean
let bool = true;
console.log(typeof bool);
console.log(bool);
bool = false;
console.log(typeof bool);
console.log(bool);

// Symbol
// every symbol is unique
// Every symbol value returned from the Symbol function is unique and can be used as an object property identifier.
const symbolOne = Symbol();
console.log(typeof symbolOne);

const symbolHello = Symbol("Hello");
const symbolHello2 = Symbol("Hello");

console.log(symbolHello);
console.log(symbolHello === symbolHello2);


// Null
const nullValue = null;
console.log(typeof nullValue);
console.log(nullValue);

// Undefined;
// not able to use const 
let notDefined;
console.log(typeof notDefined);
console.log(notDefined);