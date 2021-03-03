const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected} ✅ ✅ `);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
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


};

//eqObjects({ a: 1, b: 2 }, { a: "1", b: "2", c: "3" })

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false