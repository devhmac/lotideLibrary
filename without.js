// eqArray function
const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
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

//assertArrayEqual function
const assertArraysEqual = function (array1, array2) {
  let isEqual;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑 Assertion Failed: ${array1} !== ${array2} 🛑🛑`);
        isEqual = false;
        break;
      }
    }
    if (isEqual !== false) {
      console.log(`✅✅ Assertion Passed: ${array1} === ${array2} ✅ ✅ `);
    }
  } else {
    console.log(`🛑🛑 Assertion Failed: ${array1} !== ${array2} 🛑🛑`);
  }
};

const without = function (source, itemsToRemove) {
  let returnArray = []
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

console.log(without([1, 2, 3, 0], [0, 1, 2, 3])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3], [1, 2, 3, 4, 5]));
console.log(without([1, 2, 3], [1, 2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);