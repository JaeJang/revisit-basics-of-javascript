// method
const myStudent = {
  id: 123,
  foo: function (a) {
    console.log(`From foo ${a}`);
  },
  boo(a) {
    console.log(`From boo ${a}`);
  },
  printId() {
    console.log(`My name is ${this.id}`);
  },
};

myStudent.foo("Hello");
myStudent.boo("World");
myStudent.printId();

// constructor function
// when you want some objects to have same properties
// and also when you the type of the objects to be called something you want
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const jae = new Person("Jae", 10);
const tom = new Person("Tom", 40);
console.log(jae);
console.log(typeof jae);
console.log(jae instanceof Person);
console.log({ name: "Jae", age: 10 } instanceof Person);

function Car(make, model, owner) {
  this.make = make;
  this.model = model;
  this.owner = owner;
}

const car1 = new Car("Honda", "Civic", jae);
console.log(car1);

// for loop
for (let property in car1) {
  console.log(property);
}

for (let value of Object.values(car1)) {
  console.log(value);
}

const cars = [
  car1,
  new Car("Hyundai", "Sonata", tom),
  { make: "Porsche", model: "Carrera", jae },
  { make: "Porsche", model: "911", owner: { name: "John", age: 30 } },
];

for (let car of cars) {
  console.log(car);
}

// getter setter
const obj = {
  a: 1,
  get b() {
    return this.a + 10;
  },
  set c(x) {
    this.a = x + 1;
  },
};
console.log(obj.a);
console.log(obj.b);
obj.c = 100;
console.log(obj.a);

// immutable object
const frozen = Object.freeze({
  a: 1,
  b: 2,
});

//frozen.a = 10;
