export default class HolbertonClass {
  constructor(size, location) {
    // Store attributes in version
    this._size = size;
    this._location = location;
  }

  // Casting to Number returns the size
  valueOf() {
    return this._size;
  }

  // Casting to String returns the location
  toString() {
    return this._location;
  }
}
