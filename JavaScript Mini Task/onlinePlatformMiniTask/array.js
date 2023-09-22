/**

TODO:
Create a variable named evenNumber, which is an array with the following conditions:
The array should contain even numbers from 1 to 100.
Note:
To make it easier, use a for loop and if logic to populate even numbers in the array.
*/
// Write the code below

// Creating the evenNumber variable as an empty array
const evenNumber = [];

// Populating the evenNumber array with even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
if (i % 2 === 0) {
evenNumber.push(i);
}
}

// Displaying the evenNumber array
console.log(evenNumber);
