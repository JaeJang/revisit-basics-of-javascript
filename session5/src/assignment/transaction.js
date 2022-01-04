export function Transaction(type, amount, balance) {
  this.type = type;
  this.amount = amount.toFixed(2);
  this.balance = balance.toFixed(2);
  this.date = new Date();
  this.toString = function () {
    return `Type: ${this.type}, Amount:${this.amount}, Balance: ${this.balance}, Date: ${this.date}`;
  };
}
