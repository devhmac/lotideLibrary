const countLetters = require("../countLetters");
const assert = require('chai').assert;

describe('countLetters', () => {
  it('should return {h: 1, e: 1, l: 2, o: 1} if input hello', () => {
    assert.deepEqual(countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 });
  });
});