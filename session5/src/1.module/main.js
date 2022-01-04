import { Car, Person } from "./models.js";
import CarType from "./carType.js";
import CreateCarService from "./carService.js";

const person1 = new Person("Jae");
const person2 = new Person("Tom");

const car1 = new Car("Hyundai", "Santafe", CarType.SUV, person1);
const car2 = new Car("Honda", "Accord", CarType.SEDAN, person2);

const carService = CreateCarService();

carService.addCar(car1);
carService.addCar(car2);

console.log(carService.getList());
