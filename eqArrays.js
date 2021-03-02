const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};

// pseudo code
// are arrays the same length, if no, already false
//if they are same length, loop through
// if arr1[i] !== arr2[i] then we fail
// if no fails are triggered we should be good!

const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      // console.log('arr 1 :', array1[i]);
      // console.log('arr 2 :', array2[i]);
      if (array1[i] !== array2[i]) {
        console.log(`Index ${i} is the first not matching. Array1 = ${array1[i]}, Array 2 = ${array2[i]}`);
        return false;
      }
    }
    console.log('Your arrays match!');
    return true;
  } else {
    console.log('Arrays are not the same length');
    return false;
  }
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

console.log(eqArrays([1, 2, 3,], [1, 2, 3]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);