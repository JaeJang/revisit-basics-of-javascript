class MyClass {
  constructor(name) {
    this.name = name;
    console.log("My class is instantiated");
  }

  getName() {
    return this.name;
  }
}

const myClass = new MyClass("Jae");
console.log(typeof myClass);
console.log(myClass.name);
console.log(myClass.getName());

// An important difference between function declarations and class declarations
// hoisting

// function declarations
const fromFunc = new FuncCreator("Tom");

function FuncCreator(name) {
  this.name;
  this.getName = function () {
    return this.name;
  };
}

// class declarations
//const fromClass = new MySecondClass("John");
class MySecondClass {
  constructor(name) {
    this.name = name;
  }
}

// Public field declarations
// By declaring fields up-front, class definitions become more self-documenting, and the fields are always present.
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
