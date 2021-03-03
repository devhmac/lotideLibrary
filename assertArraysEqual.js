
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual([1, 2, 3], [1, 1, 2]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual(['hi', 'hello', 'shalom'], ['hi', 'hello', 'shalo']);

