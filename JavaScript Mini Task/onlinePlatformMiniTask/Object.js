/**
 * TODO
 * 1. Create a variable named 'restaurant' of type object with the following specifications:
 *    - It has a property named "name"
 *       - Data type: string
 *       - Value: "Bakso Mang Dicoding".
 *    - It has a property named "city"
 *       - Data type: string
 *       - Value: "Bandung".
 *    - It has a property "favorite drink"
 *       - Data type: string
 *       - Value: "Iced Tea".
 *    - It has a property "favorite food"
 *       - Data type: string
 *       - Value: "Meatballs".
 *    - It has a property "isVegan"
 *       - Data type: boolean
 *       - Value: false.
 *
 * 2. Create a variable named 'name'.
 *    Then, assign it the value of the 'name' property from the 'restaurant' object.
 * 3. Create a variable named 'favoriteDrink'.
 *    Then, assign it the value of the "favorite drink" property from the 'restaurant' object.
 */

// Write the code below

// 1. Creating the 'restaurant' variable with the given properties
const restaurant = {
  name: "Bakso Mang Dicoding",
  city: "Bandung",
  "favorite drink": "Iced Tea",
  "favorite food": "Meatballs",
  isVegan: false,
};

// 2. Assigning the 'name' variable with the value of the 'name' property from the 'restaurant' object
const name = restaurant.name;

// 3. Assigning the 'favoriteDrink' variable with the value of the "favorite drink" property from the 'restaurant' object
const favoriteDrink = restaurant["favorite drink"];
