const flatten = require("../flatten")
const assert = require('chai').assert;



// console.log(flatten([[1, 2, 3], 4, 5, [6, 7]]))
// console.log(flatten([1, 2, [3, 4], 5, [6]]))
// console.log(flatten([1, 'hello', ['im', 'nested'], 2, 3]))

describe('flatten', () => {
  it("should return [1,2,3,4] if [1,2,[3,4]] is passed in", () => {
    assert.deepEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4])
  })
  it("should return [1,2,3,4] if [1,2,3,4] is passed in", () => {
    assert.deepEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4])
  })
  it("should return [1, 'hello', 'im', 'nested', 2, 3] if [1, 'hello', ['im', 'nested'], 2, 3] is passed in", () => {
    assert.deepEqual(flatten([1, 'hello', ['im', 'nested'], 2, 3]), [1, 'hello', 'im', 'nested', 2, 3])
  })
  it("should return [1,2,3,4] if [1, [2, [3]], 4] is passed in", () => {
    assert.deepEqual(flatten([1, [2, [3]], 4]), [1, 2, 3, 4])
  })
});