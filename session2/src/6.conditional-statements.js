// if-else
// briefely about scope
if (true) {
  console.log("Hello World");
} else {
  console.log("Bye World");
}

const isTrue = false;
if (isTrue) {
  console.log("Hello World");
} else {
  console.log("Bye World");
}

const num = 10;

if (num > 10) {
  console.log("It's bigger than 10");
} else if (num > 5) {
  console.log("It's bigger than 5 and equal to or smaller than 10");
} else if (num > 3) {
  console.log("It's bigger than 3 and equal to or smaller than 5");
} else {
  console.log("It's equal to or smaller than 3");
}

// logical operators
// AND  &&
// OR   ||
// NOT  !
// AND Assignment &&=
// OR Assignment ||=

if (!true) {
  console.log("Hello World");
} else {
  console.log("Bye World");
}

if (isTrue && num === 10) {
  console.log("Hello World");
} else if (isTrue || num === 10) {
  console.log("OKAY");
}

// Conditional (ternary) operator
const x = num >= 10 ? "Hello" : "World";
console.log(x);

num !== 10 ? console.log("Hello") : console.log("World");

// switch
const fruit = "Banana";

switch (fruit) {
  case "Mango":
    console.log("It's mango");
    break;
  case "Banana":
    console.log("It's banana");
    break;
  case "Apple":
    console.log("It's apple");
    break;
  default:
    console.log("It's not in the list");
}
