// assert Equals test function

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};

//find key by value!

const findKeyByValue = function (object, value) {

  for (let key in object) {
    //console.log(key)
    if (object[key] === value) {
      return key
    }
  }
  return undefined;
};


console.log(findKeyByValue({ dog: 1, cat: 2 }, 'dog'))
console.log(findKeyByValue({ dog: 1, cat: 2 }, 1))



//testing
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);