const assert = require('chai').assert;
const head = require("../head");


//our ugly test code not using mocha/chai

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined)
// assertEqual(head([1]), 1)

//using mocha chai -------
describe('head', () => {
  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(["5"]), "5");
  });

});