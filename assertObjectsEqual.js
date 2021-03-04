//eq objects & eqArrays function bundle

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
    console.log(`✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑🛑 `);
  }
};

//testing!
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const dd = { d: ["2", 3], c: ["1"] };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, dd);
assertObjectsEqual(cd2, cd2);
