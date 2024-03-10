export default class Car {
  constructor(brand, motor, color) {
    // Store attributes in version
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
