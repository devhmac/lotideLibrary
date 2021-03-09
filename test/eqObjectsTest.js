const eqObjects = require("../eqObjects");
const assert = require('chai').assert;



describe('eqObjects', () => {
  it("Should return true if two objects are equal", () => {
    assert.deepEqual(eqObjects({ a: 1, b: 2 }, { a: 1, b: 2 }), true);
  })
  it("Should return false if two objects are not equal - different data types", () => {
    assert.deepEqual(eqObjects({ a: 1, b: 2 }, { a: '1', b: '2' }), false);
  })
  it("Should return false if two objects are not equal - different length", () => {
    assert.deepEqual(eqObjects({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }), false);
  })
});