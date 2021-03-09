const countOnly = require("../countOnly");
const assert = require('chai').assert;

describe('countOnly', () => {
  it('Should only tally a & b if { a: true, b: true, c: false }', () => {
    assert.deepEqual(countOnly(['a', 'a', 'b', 'c'], { a: true, b: true, c: false }), { a: 2, b: 1 })
  })
});