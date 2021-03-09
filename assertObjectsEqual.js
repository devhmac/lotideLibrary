
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')

//assertObjectsEqual function
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // this is to stop [Object Object] === [Object Object]  


  if (eqObjects(actual, expected)) {
    console.log(`✅✅ Equality Passed: ${inspect(actual)} === ${inspect(expected)} ✅✅ `);
  } else {
    console.log(`🛑🛑 Equality Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑🛑 `);
  }
};

module.exports = assertObjectsEqual;
