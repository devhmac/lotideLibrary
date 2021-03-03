// ASSERT EQUAL ARRAYS FUNCTION

const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: [actual] === [expected]");
  } else console.log("Assertion Failed: [actual] != [expected]");
}

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑 `);
  }
};
//MIDDLE FUNCTION!
//if array.length = odd - array.length % 2 !== 0
//Math.floor(array.length/2)
const middle = function (array) {
  let midArray = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midArray.push(array[midIndex - 1], array[midIndex]);
    } else {
      midArray.push(array[midIndex]);
    }
  }
  return midArray;
};


assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2,]), []);
assertArraysEqual(middle([1,]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
