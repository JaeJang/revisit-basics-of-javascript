function movieFactory(initialTitle) {
  let title = initialTitle;

  return {
    setTitle: (_title) => {
      title = _title;
    },
    getTitle: () => {
      return title;
    },
  };
}

const movie2 = movieFactory("Iron Man");

console.log(movie2.getTitle());

movie2.setTitle("Dr.Stranger");
console.log(movie2.getTitle());

//
const people = [
  { name: "Jae", age: 30 },
  { name: "Tom", age: 10 },
  { name: "John", age: 22 },
];

let names = [];
for (let person of people) {
  names.push({
    name: person.name,
    displayName: function () {
      console.log(`Hello. I'm ${person.name}`);
    },
  });
}
names[0].displayName();

names = people.map((person) => ({
  name: person.name,
  displayName: function () {
    console.log(`Hello. I'm ${person.name}`);
  },
}));
names[1].displayName();