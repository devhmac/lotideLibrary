const tail = require('../tail');
const assert = require('chai').assert


// const words = ["hello", "lighthoues", "labs"];

// tail(words);
// assertEqual(words.length, 3);
// assertEqual(tail(words).length, 2);

describe("tail", () => {
  it('should return ["cruel","world"] from ["goodbye","cruel","world"] ', () => {
    assert.deepEqual(tail(['goodbye', 'cruel', 'world']), ['cruel', 'world']);
  })
})