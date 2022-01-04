/*
The equality operators (== and !=) use the Abstract Equality Comparison Algorithm to compare two operands. This can be roughly summarised as follows:

If the operands are both objects, return true only if both operands reference the same object.

If one operand is null and the other is undefined, return true.

If the operands are of different types, try to convert them to the same type before comparing:
    -When comparing a number to a string, try to convert the string to a numeric value.
    -If one of the operands is a boolean, convert the boolean operand to 1 if it is true and +0 if it is false.
    -If one of the operands is an object and the other is a number or a string, 
    try to convert the object to a primitive using the object's valueOf() and toString() methods.

If the operands have the same type, they are compared as follows:
    -String: return true only if both operands have the same characters in the same order.
    -Number: return true only if both operands have the same value. +0 and -0 are treated as the same value. If either operand is NaN, return false.
    -Boolean: return true only if operands are both true or both false.

The most notable difference between this operator and the strict equality (===) operator is that the strict equality operator does not attempt type conversion. 
Instead, the strict equality operator always considers operands of different types to be different.
*/

// num vs string - string to a numeric value
console.log(10 == '10');
console.log(10 == '10a');

// one is bool - true to 1 and false to 0
console.log(true == 1);
console.log(true == '1');
console.log(false == 0);


console.log(null == undefined);

console.log(0 == null);
console.log(0 == undefined);

// Double NOT !! - force to convert to bool
console.log(0 == !!undefined);
console.log(0 == !!null);

const number1 = new Number(3);
const number2 = new Number(3);
console.log(number1 == 3);         // true
console.log(number1 == number2);   // false

const string1 = "hello";
const string2 = String("hello");
const string3 = new String("hello");
const string4 = new String("hello");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true



// Strict equality (===)
/*
The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result. 
Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
*/

console.log(true === '1');
console.log(false === 0);
console.log(null === undefined);
console.log(0 === null);
console.log(0 === undefined);
console.log(0 === !!undefined);
console.log(0 === !!null);
