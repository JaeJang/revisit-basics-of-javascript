/**
 * Truthy
 *
 * In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
 * All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
 */

/**
 * Falsy
 *
 * A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.
 *
 * false, 0, -0, 0n, "", null, undefined, and NaN
 */

if (true) {
  console.log("It's true");
}
if ({}) {
  console.log("It's true");
}
if ([]) {
  console.log("It's true");
}
if (42) {
  console.log("It's true");
}
if ("0") {
  console.log("It's true");
}
if ("false") {
  console.log("It's true");
}
if (new Date()) {
  console.log("It's true");
}
if (-42) {
  console.log("It's true");
}
if (12n) {
  console.log("It's true");
}
if (3.14) {
  console.log("It's true");
}
if (-3.14) {
  console.log("It's true");
}
if (Infinity) {
  console.log("It's true");
}
if (-Infinity) {
  console.log("It's true");
}

const nullV = null;

const x = nullV || 200;
console.log(x);

const num = 100;
const y = num || 200;
console.log(y);

const z = y && 500;
console.log(z);

const boolV = false;
const r = boolV && 100;
console.log(r);


if (num) {
    console.log("It's defined and has a value init");
}

if (nullV) {
    console.log("This is not reachable");
} else {
    console.log("The value is falsy");
}