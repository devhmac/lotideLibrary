//tester

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


//takeUntil function

const takeUntil = (array, callback) => {
  returnArray = [];
  for (item of array) {
    if (callback(item)) return returnArray;
    else returnArray.push(item);
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//console.log(takeUntil(data1, x => x < 0));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

assertArraysEqual(takeUntil([2, 4, 6, 8, 9, 10, 11], num => num % 2 !== 0), [2, 4, 6, 8])