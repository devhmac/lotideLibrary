const assert = require('chai').assert;
const takeUntil = require("../takeUntil");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


describe('takeUntil', () => {
  it("should return [1, 2, 5, 7, 2] if [1, 2, 5, 7, 2, -1, 2, 4, 5] is input with x => x < 0", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])
  })
  it("should return [2, 4, 6, 8] if [2, 4, 6, 8, 9, 10, 11] is input with x => x % 2 !== 0", () => {
    assert.deepEqual(takeUntil([2, 4, 6, 8, 9, 10, 11], num => num % 2 !== 0), [2, 4, 6, 8])
  })
  it("should return ['a','b'] if ['a','b', ',' , 'c'] is input with x => x === ','", () => {
    assert.deepEqual(takeUntil(['a', 'b', ',', 'c'], x => x === ','), ['a', 'b'])
  })
});