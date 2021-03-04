const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: [actual] === [expected]");
  } else console.log("Assertion Failed: [actual] != [expected]");
}

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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑 `);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual([1, 2, 3], [1, 1, 2]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual(['hi', 'hello', 'shalom'], ['hi', 'hello', 'shalo']);
assertArraysEqual(['hi', 'hello', 'shalom'], ['hi', 'hello', 'shalom']);