//index

const assertArraysEqual = require("./assertArraysEqual"); // no return, no mocha test
const assertEqual = require("./assertEqual");// no return, no mocha test
const head = require('./head'); //done
const middle = require("./middle"); //done
const tail = require("./tail"); //done
const assertObjectsEqual = require('./assertObjectsEqual'); //done no return no mocha
const countLetters = require('./countLetters'); // done
const countOnly = require('./countOnly.js'); // done
const eqArrays = require("./eqArrays"); // done
const eqObjects = require('./eqObjects'); //done
const findKey = require('./findKey'); //done
const findKeyByValue = require('./findKeyByValue'); // done
const flatten = require('./flatten');// done 
const letterPositions = require('./letterPositions'); // done
const map = require('./map'); // done
const takeUntil = require('./takeUntil'); // done
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};
