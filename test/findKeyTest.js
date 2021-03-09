const findKey = require('../findKey')
const assert = require('chai').assert;

const object1 = {
  "Blue Hill": { stars: 3 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 5 }
};


describe('findKey', () => {
  it("Should return noma if - key => key.stars === 2 is passed through", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 2), "noma")
  })
  it("Should return Akelarre if - key => key.stars === 5 is passed through", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 5), "Akelarre")
  })
  it("Should return noma if - key => key.stars !== 3 is passed through", () => {
    assert.strictEqual(findKey(object1, x => x.stars !== 3), "noma")
  })
  it("Should return undefined if - key => key.stars === 10 is passed through", () => {
    assert.strictEqual(findKey(object1, x => x.stars === 10), undefined)
  })

});