/* Import the Car class from 10-car.js */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    
    // Call the constructor of the parent class (Car)
    super(brand, motor, color);

    // Store additional attributes in version
    this._range = range;
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
  /* Create a new instance of the Car class with 
     the same attributes */
    return new Car();
  }
}
