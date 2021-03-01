//function returing all elements but head of an array
const tail = function (array) {
  let arrayTail = array.slice(1);
  return arrayTail;
};

//assertEqual function to check tail functionality
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};

console.log(tail([1, 2, 3, 4]));
/// assertEqual function is not robust enough to compare arrays, so you'd have to compare individual values.
console.log(assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]));

//ensuring tail is not modifying original array, just creating a new one
const words = ["hello", "lighthoues", "labs"];
tail(words);
assertEqual(words.length, 3);

console.log(assertEqual(tail([1]), []));
console.log(tail([1]));
