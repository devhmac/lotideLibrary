//function returing all elements but head of an array
const tail = function (array) {
  let arrayTail = array.slice(1);
  return arrayTail;
}

//assertEqual function to check tail functionality
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};

console.log(tail([1, 2, 3, 4]));

console.log(assertEqual(tail([1, 2, 3, 4]), [2, 3, 4]));