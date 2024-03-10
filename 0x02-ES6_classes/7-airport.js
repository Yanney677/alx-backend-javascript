export default class Airport {
  constructor(name, code) {
    // Stores attributes in version
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Override deafault string description
  toString() {
    return `[object ${this.code}]`;
  }
}
