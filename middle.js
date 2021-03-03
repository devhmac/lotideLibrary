// ASSERT EQUAL ARRAYS FUNCTION

const assertArraysEqual = function (actual, expected) {
  let isEqual;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
        isEqual = false;
        break;
      }

    }
    if (isEqual !== false) {
      console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
    }
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
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
