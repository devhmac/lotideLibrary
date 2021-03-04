const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};

//eqArrays 
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
//return true if both arrays have identical keys with identical values
//else FALSE
// for in loop!!!!!! through object1, if object1[key] !=== object2[key] false

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

// for implementing arrays
//while looping through keys if object1[key] === array, implement eq array function with eqArray(object1[key],object2[key])




eqObjects({ a: 1, b: 2 }, { a: "1", b: "2", c: "3" })

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
console.log(eqObjects(ab, ba));
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const dd = { d: ["2", 3], c: ["1"] };
const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, dc)); // => true
assertEqual(eqObjects(cd, dc), true); // => true


//console.log(eqObjects(cd, cd2)); // => false
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, dd), false);