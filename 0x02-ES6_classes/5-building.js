export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      // Store attributes in "underscore" attribute version
	throw Error('Class extending Building must override evacuationWarningMessage');
    }

    // Store attributes in "underscore" attribute version
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
