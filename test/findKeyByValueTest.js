const findKeyByValue = require("../findKeyByValue");
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

describe('findKeyByValue', () => {
  it("Should return drama if bestTvShows and 'The Wire' are passed through", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  });
  it("Should return undefined if bestTvShows and 'The Office' are passed through", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), undefined)
  });
});