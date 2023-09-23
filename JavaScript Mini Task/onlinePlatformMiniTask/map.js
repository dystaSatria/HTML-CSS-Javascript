/**
 * TODO:
 * 1. Create a variable 'currency' which is a Map with the following criteria:
 *    - key "USD", value 14000
 *    - key "JPY", value 131
 *    - key "SGD", value 11000
 *    - key "MYR", value 3500
 * 2. Create a variable 'priceInIDR' with a value obtained by multiplying:
 *    - 'priceInJPY' by the value of 'JPY' in the 'currency' Map
 */

// 1. Creating the 'currency' variable as a Map with the given criteria
const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

const priceInJPY = 5000;

// 2. Calculating 'priceInIDR' by multiplying 'priceInJPY' by the value of 'JPY' in the 'currency' Map
const priceInIDR = priceInJPY * currency.get("JPY");

// Displaying the value of 'priceInIDR'
console.log(priceInIDR);
