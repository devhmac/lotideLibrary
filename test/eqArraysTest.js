const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('eqArrays', () => {
  it('should return true comparing [1,2,3] & [1,2,3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  });
  it('should return true comparing [] & []', () => {
    assert.deepEqual(eqArrays([], []), true)
  });
  it('should return false comparing [1,2,3] & [1,"2",3]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, "2", 3]), false)
  });
  it('should return false comparing arrays of different lengths: [1,2,3] & [1,2,3,4]', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false)
  });

});