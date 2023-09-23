/**
 * TODO:
 * 1. Create a function called 'minimal' with the following specifications:
 *    - Takes two number arguments, a and b.
 *    - Returns the smallest value between a and b.
 *    - If both values are equal, return a.
 *
 *    Examples:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Create a function called 'findIndex' that takes two parameters, an array and a number.
 *    The function should return the index of the number within the array.
 *    If the number is not found, return -1.
 *
 *    Examples:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

// Write code below

// 1. minimal function
function minimal(a, b) {
  if (a <= b) {
    return a;
  } else {
    return b;
  }
}

// 2. findIndex function
function findIndex(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1; // Return -1 if the number is not found
}

// Example usage
console.log(minimal(1, 4)); // output: 1
console.log(minimal(3, 2)); // output: 2
console.log(minimal(3, 3)); // output: 3

console.log(findIndex([1, 2, 3, 4, 5], 3)); // output: 2
console.log(findIndex([1, 2, 3, 4, 5], 6)); // output: -1
console.log(findIndex([1, 2, 3, 4, 5], 5)); // output: 4
