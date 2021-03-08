const tail = require('../tail');
const assert = require('chai').assert

describe("tail", () => {
  it('should return ["cruel","world"] from ["goodbye","cruel","world"] ', () => {
    assert.deepEqual(tail(['goodbye', 'cruel', 'world']), ['cruel', 'world']);
  })
  it('should return [2,3] from [1,2,3] ', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  })
})