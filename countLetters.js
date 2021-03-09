//assert equals function

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};


const countLetters = function (string) {
  returnObj = {}
  for (let letter of string) {
    if (letter !== ' ') {
      if (!returnObj[letter]) {
        returnObj[letter] = 1;
      } else {
        returnObj[letter] += 1;
      }
    }
  }
  return returnObj;
};

module.exports = countLetters;

//assert equal test
const stringTest = 'hello'
const actual = countLetters('hello')
assertEqual(actual['h'], 1)
assertEqual(actual['e'], 1)
assertEqual(actual['l'], 2)
assertEqual(actual['o'], 1)

