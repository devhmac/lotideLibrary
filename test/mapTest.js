const map = require("../map");
const assert = require('chai').assert;


const words = ["ground", "control", "to", "major", "tom"];

describe('map', () => {
  it("should return ['g','c','t','m','t'] if ['ground','control','to','major','tom'], word => word[0]  is passed in", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])
  })
  it("should return [11,12,13,14] if [1,2,3,4], num => num + 10 is passed in", () => {
    assert.deepEqual(map([1, 2, 3, 4], num => num + 10), [11, 12, 13, 14])
  });

});