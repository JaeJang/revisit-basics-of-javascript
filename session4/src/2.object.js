// An object is a collection of properties, and a property is an association between a key and a value.
// for example. A car is an object, with properties. A car has a make, a model, year, etc.

const myCar = {
  make: "Hyundai",
  model: "Sonata",
  year: 2022,
};

const student = {
  id: 12345,
  name: "Jae",
  courses: ["Javascript", "Java"],
};

console.log(student.id);
console.log(student["id"]);

console.log(student.address);
console.log(student["address"]);

console.log(Object.keys(student));

// in fact array is also an object
// the difference is array is always using integer keys

const arr = ["Hello", "World", "Haha"];
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.keys(arr));
console.log(Object.values(arr));
console.log(arr["0"]);
console.log(arr[0]);
// but not arr.0

student[1] = "One";
console.log(student[1]);
console.log(student);

// compare
const hisCar = {
  model: "Sonata",
};

const yourCar = {
  model: "Sonata",
};

// they are pointing two different objects
console.log(hisCar == yourCar);
console.log(hisCar === yourCar);
console.log(hisCar.model === yourCar.model);

const mySecondCar = hisCar;
// they are pointing a same object
console.log(mySecondCar == hisCar);
console.log(mySecondCar === hisCar);

// delete
const car = {
  make: "Hyundai",
  model: "Sonata",
  year: 2022,
};

delete car.year;
console.log(car);

// use variable as a key
const hello = "hello";
console.log({ [hello]: "world" });
