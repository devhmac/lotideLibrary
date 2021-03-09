const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅ Equality Passed: ${actual} === ${expected} ✅✅ `);
  } else {
    console.log(`🛑🛑 Equality Failed: ${actual} !== ${expected} 🛑🛑 `);
  }
};

module.exports = assertArraysEqual;