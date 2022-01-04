// An array is a data type used to collect associated data and manage it as a whole.
// An array is a special variable, which can hold more than one value:
const name1 = "Jae";
const name2 = "Tom";
let name3 = "James";

const names = ["Jae", "Tome", name3];
console.log(names);
// index starts from zero
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

names[3] = "Han";
console.log(names);

const cars = [];
cars.push("KIA");
cars[2] = "BMW";

console.log(cars[1]);

console.log(typeof []);
// a variable that contains object doesn't really has the object data itself, like kia, bmw.
// but the variable has the address of where the data is located in memory


const cities = new Array();
cities.push("Vancouver");
cities.push(123);
cities.push(() => {
  console.log("Hello.");
});
cities.push([1]);
console.log(cities);
cities[2]();

console.log(cities.length);


cities.splice(0, 1);
console.log(cities);

const poppedFromCities = cities.pop();
console.log(cities);
console.log(poppedFromCities);

const countries = ["Korea", "Canada", "US", "Japan", "China"];

console.log(countries.find(item => item.startsWith("C")));
console.log(countries.findIndex(item => item.startsWith("C")));
console.log(countries.includes("Korea"));
console.log(countries.filter(item => item.startsWith("C")));



// for loop
for (let i = 0; i < countries.length; ++i) {
    console.log((countries[i]));
}

for (let country of countries) {
    console.log(country);
}