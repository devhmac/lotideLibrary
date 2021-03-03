//assert array equals test function
const assertArraysEqual = function (actual, expected) {
  let isEqual;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑 `);
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




// letterPositions functionality
const letterPositions = function (string) {
  returnObj = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (!returnObj[string[i]]) {
        returnObj[string[i]] = [i];
      } else {
        returnObj[string[i]].push(i);
      }
    }
  }
  return returnObj
};

console.log(letterPositions('hi there'))

console.log(letterPositions('hello'))
let actual = letterPositions('hello');

assertArraysEqual(actual['h'], [0])
assertArraysEqual(actual['e'], [1])
assertArraysEqual(actual['l'], [2, 3])
assertArraysEqual(actual['o'], [4])

assertArraysEqual(letterPositions('hello').h, [0])