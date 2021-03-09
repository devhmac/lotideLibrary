// letterPositions functionality
const letterPositions = function (string) {
  returnObj = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (!returnObj[string[i]]) {
        returnObj[string[i]] = [i];
      } else {
        returnObj[string[i]].push(i);
      }
    }
  }
  return returnObj
};

module.exports = letterPositions;

