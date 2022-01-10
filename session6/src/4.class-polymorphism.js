class Cat {
  speak() {
    console.log('Meow');
  }
}

class Dog {
  speak() {
    console.log('Woof');
  }

  bark() {
    
  }
}

class Human {
  speak() {
    console.log('Hello');
  }
}

const cat = new Cat();
const dog = new Dog();
const person = new Human();

cat.speak();
dog.speak();
person.speak();

function animalSpeaking(animal) {
  animal.speak();
}

animalSpeaking(cat);
animalSpeaking(dog);
animalSpeaking(person);
