class MyClass {
  // private field only can be accessible insinde class
  #name;
  constructor(name) {
    this.#name = name;
    console.log("My class is instantiated");
  }

  getName() {
    this.#foo();
    return this.#name;
  }

  // private method only can be called insinde class
  #foo() {
    console.log("Hola");
  }
}

const myClass = new MyClass("Jae");
console.log(typeof myClass);

// SyntaxError
//console.log(myClass.#name);
console.log(myClass.getName());
// SyntaxError
//console.log(myClass.#foo());


/**
 * Encapsulation means putting attributes and methods that play a related role in one class.
 * Class is a part and if it's a proper part, even those who don't know how it's made should be able to use it if they know how to use it.
 * For example, even though you don't know how your monitor is made, if you know how to connect with you PC, you can use the monitor
 * That is one of the major purpose of Encapsulation. 
 * 
 * Another important reason is information concealment.
 * Let's say there is Employee class and it has a salary property.
 * If the property is publicly open and anyone can access,
 * employee.salary = -10 this impossible code can be written
 */
