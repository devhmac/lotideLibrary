const without = require("../without");
const assert = require('chai').assert;

describe('without', () => {
  it("should return [1,2] if [1,2,3,4] and [3,4] are passed in", () => {
    assert.deepEqual(without([1, 2, 3, 4], [3, 4]), [1, 2])
  })
  it("should return 'You have removed all items' if [1,1,1,1] and [1] are passed in", () => {
    assert.deepEqual(without([1, 1, 1, 1], [1]), 'You have removed all items')
  })
  it("should return ['hello'] if ['hello','world'] and ['world'] are passed in", () => {
    assert.deepEqual(without(['hello', 'world'], ['world']), ['hello'])
  })
});
