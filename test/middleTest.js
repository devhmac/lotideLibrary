const assert = require('chai').assert
const middle = require("../middle");

describe('middle', () => {
  it('should return [2,3] from [1,2,3,4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should return [] from [2,3] as there is no middle', () => {
    assert.deepEqual(middle([2, 3]), []);
  });
  it('should return [] from [1] as there is no middle', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return [3,4] from [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});