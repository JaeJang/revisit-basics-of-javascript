// Function increases the reusability of the code by allowing one logic to be re-executed.

/*
 function name(parameters) {
     statement
 }
 */


function sumSquare(a, b) {
  return (a + b) ** 2;
  console.log("Not executed");
}

const x = sumSquare(1, 2);
console.log(x);

const y = sumSquare(2, 2);
console.log(y);

function print(a) {
  console.log(a);
}

print(y);

// default parameter
function sum(a, b = 1) {
  return a + b;
}

console.log(sum(4));
console.log(sum(4, undefined));
console.log(sum(4, null));
console.log(sum(4, ""));
console.log(sum());

function sumV2(a = 2, b) {
  console.log(a);
  console.log(b);
}

sumV2();

// store function in a variable
const func = sum;
console.log(func(1, 2));

const newFunc = function () {
  console.log("Hello World");
};

newFunc();

// callback
// pass function as a parameter
function cbTest(a, b, cb = function () {}) {
  return cb(a, b);
}

console.log(cbTest(1, 2, sum));
console.log(cbTest(1, 2));

// arguments
function argTest() {
  console.log(arguments);
  console.log(arguments[1]);
}

argTest(1, 2, 3);

function argTestV2(...args) {
  console.log(args);
}
argTestV2(3, 2, 1);

// arrow function
// no access to this
// no arguments
const arrowFunc = () => {
  console.log("Hello World");
};
arrowFunc();

const z = cbTest(2, 2, (x, y) => {
  return x * y;
});
console.log(z);

setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);
console.log("This goes first");

const arrowFuncV2 = (a, b) => a - b;
console.log(arrowFuncV2(4, 1));


// hoisting
console.log(hoistingTest());
function hoistingTest() {
    console.log("Defined later but executed");
}

//console.log(hoistingTestV2());
const hoistingTestV2 = () => {
    console.log("This is not possible");
}