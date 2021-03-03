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

countLetters('hello there')
