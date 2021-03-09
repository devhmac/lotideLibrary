//eq objects & eqArrays function bundle
const eqArrays = require('./eqArrays')

//eqObjects needs eqArrays
const eqObjects = function (object1, object2) {
  obj1Keys = Object.keys(object1);
  obj2Keys = Object.keys(object2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//assertObjectsEqual function
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // this is to stop [Object Object] === [Object Object]  
  // console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual, expected)) {
    console.log(`✅✅ Equality Passed: ${inspect(actual)} === ${inspect(expected)} ✅✅ `);
  } else {
    console.log(`🛑🛑 Equality Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑🛑 `);
  }
};

module.exports = assertObjectsEqual;
