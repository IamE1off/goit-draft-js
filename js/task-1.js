"use strict";
// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;

//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
const person = {
  name: "Mango",
};
function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 18));
console.log(sayHi.bind(person, 18));
