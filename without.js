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

const without = function (source, itemsToRemove) {
  let returnArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!(itemsToRemove.includes(source[i]))) {
      returnArray.push(source[i]);
    }
  }
  if (returnArray.length === 0) {
    return "You have removed all items from the source array";
  } else {
    return returnArray;
  }
};
console.log(without([1, 1, 1, 1], [1]))
console.log(without([1, 2, 3, 0], [0, 1, 2, 3])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [1, 2, 3, 4, 5]));
console.log(without([1, 2, 3], [1, 2]));
console.log(without(['hi', 'hello', 'howareyou'], ['hi']));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);