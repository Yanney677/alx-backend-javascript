export default class Pricing {
  constructor(amount, currency) {

   // Store attributes version
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(a) {
    this._amount = a;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(c) {
    this._currency = c;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this.amount} ${this.currency._name} (${this.currency._code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
