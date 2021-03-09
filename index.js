//index

const assertArraysEqual = require("./assertArraysEqual"); // no return, no mocha test
const assertEqual = require("./assertEqual");// no return, no mocha test
const middle = require("./middle"); //done
const tail = require("./tail"); //done
const assertObjectsEqual = require('./assertObjectsEqual'); //done no return no mocha
const countLetters = require('./countLetters');
const countOnly = require('./countOnly.js');
const eqArrays = require("./eqArrays"); // done
const eqObjects = require('./eqObjects'); //done
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
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
