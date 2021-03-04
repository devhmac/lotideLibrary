//assertArrays equal test

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




// map functioning
const words = ["ground", "control", "to", "major", "tom"];



const map = (array, callback) => {

  const results = [];

  for (item of array) {
    results.push(callback(item))
  }




  return results;
};

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"])

assertArraysEqual(map(words, word => word + 's'), ["grounds", "controls", "tos", "majors", "toms"]);

assertArraysEqual(map(words, word => {
  if (word === 'tom') return 'Devin'
  else return word
}), ["ground", "control", "to", "major", "Devin"])


assertArraysEqual(map([1, 2, 3, 4], num => num + 10), [11, 12, 13, 14]);