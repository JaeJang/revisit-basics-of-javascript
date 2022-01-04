/**
 * When a function is called with parameters, local variables are defined and the value of variables passed to the function
 * are assgined to the local variables at the beginning of the function execution.
 */

function modifyA(_a) {
  _a = 10;
}

// primitive types
// copy by value
let a = 3;
modifyA(a);
console.log(a);

a = "Hello";
modifyA(a);
console.log(a);

// all other objects
// copy by reference
function modifyArray(_arr) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = "Benz";
  }
}

const arr = ["BMW", "Porsche"];
modifyArray(arr);
console.log(arr);

function modifyArrayV2(_arr) {
  _arr = [];
}
modifyArrayV2(arr);
console.log(arr);

function modifyObject(_obj) {
  delete _obj.name;
  _obj = {};
}

const obj = { name: "Jae", age: 40 };
modifyObject(obj);
console.log(obj);