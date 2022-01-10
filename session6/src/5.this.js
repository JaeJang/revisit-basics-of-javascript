// This means the context of the function call within the function.
// Context means that it can be changed depending on the situation, that is, the object that 'this' points to depends on how the function is called.

const a = { name: 'Jae' };

function foo() {
  return `${this.name} is cool`;
}

a.foo = foo;

console.log(a.foo());

function whoseThis() {
  return this;
}

console.log(whoseThis());

a.whoseThis = whoseThis;

console.log(a.whoseThis() === a);

const b = { name: 'Tom' };
b.foo = foo;
b.whoseThis = whoseThis;

console.log(b.foo());
console.log(b.whoseThis() === b);

// in class
class MyClass {
  // Static methods are not properties of this
  static className = 'Hello';

  constructor() {
    this.myName = 'World';
  }

  getClassName() {
    // Static methods are not properties of this
    console.log(this.className);
  }

  // Static methods are not properties of this
  static getMyName() {
    console.log(this.myName);
  }
}

const myClass = new MyClass();
myClass.getClassName();
MyClass.getMyName();

// arrow function
// arrow function doesn't have access to this
const c = {
  name: 'WOW',
  goo: () => {
    console.log(`${this.name} is cool`);
  },
};
c.goo();
