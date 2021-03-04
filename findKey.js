// assert Equal tester
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};

//find key function
const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};


const object1 = {
  "Blue Hill": { stars: 3 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 5 }
};


assertEqual(findKey(object1, x => x.stars === 2), 'noma');
assertEqual(findKey(object1, x => x.stars === 5), 'Akelarre');
assertEqual(findKey(object1, x => x.stars !== 3), 'noma');
assertEqual(findKey(object1, x => x.stars === 10), undefined);
