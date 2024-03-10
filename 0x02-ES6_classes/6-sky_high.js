// Import the Building class from 5-buildings
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the constructor of the parent class (Building)
    super(sqft);
    // Store attributes in "Underscore" attribute version
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  // Override the evacuationWarningsMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
